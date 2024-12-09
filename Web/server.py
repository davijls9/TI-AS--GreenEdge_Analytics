from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import logging
import os
import subprocess
import json

app = Flask(__name__)
CORS(app)

# Caminho do arquivo de configuração
CONFIG_FILE_PATH = "../config.json"

# Carrega as configurações do arquivo JSON
try:
    with open(CONFIG_FILE_PATH, 'r') as config_file:
        config = json.load(config_file)
        BASE_PATH = config.get("BASE_PATH", "")
        DATA_FILE_PATH = os.path.join(BASE_PATH, config.get("DATA_FILE_PATH", ""))
        POWERBI_SCRIPT_PATH = os.path.join(BASE_PATH, config.get("POWERBI_SCRIPT_PATH", ""))
except FileNotFoundError:
    logging.error(f"Arquivo de configuração {CONFIG_FILE_PATH} não encontrado.")
    BASE_PATH = DATA_FILE_PATH = POWERBI_SCRIPT_PATH = ""
except json.JSONDecodeError as e:
    logging.error(f"Erro ao ler o arquivo de configuração {CONFIG_FILE_PATH}: {str(e)}")
    BASE_PATH = DATA_FILE_PATH = POWERBI_SCRIPT_PATH = ""

# Configuração de logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

@app.route('/atualizar_dados', methods=['POST'])
def atualizar_dados():
    logging.info("Recebida solicitação para atualizar o arquivo de dados")

    # Verifica se um arquivo foi enviado
    if 'file' in request.files and request.files['file'].filename != '':
        file = request.files['file']
        if not file.filename.endswith('.xlsx'):
            logging.error("Arquivo inválido enviado")
            return jsonify({"status": "error", "message": "Arquivo inválido"}), 400

        try:
            novos_dados = pd.read_excel(file, sheet_name=None)
            for aba, df in novos_dados.items():
                if 'Time' in df.columns:
                    df['Time'] = pd.to_datetime(df['Time']).dt.strftime('%Y/%m/%d %H:%M:%S')
        except Exception as e:
            logging.error(f"Erro ao ler o arquivo enviado: {str(e)}")
            return jsonify({"status": "error", "message": "Erro ao ler o arquivo Excel"}), 500
    else:
        novos_dados = None

    if os.path.exists(DATA_FILE_PATH):
        dados_existentes = pd.read_excel(DATA_FILE_PATH, sheet_name=None)
    else:
        dados_existentes = {}

    dados_atualizados = {}
    if novos_dados:
        for aba, novos_dados_aba in novos_dados.items():
            dados_atualizados[aba] = pd.concat([dados_existentes.get(aba, pd.DataFrame()), novos_dados_aba], ignore_index=True)
    else:
        dados_atualizados = dados_existentes

    try:
        with pd.ExcelWriter(DATA_FILE_PATH, engine='openpyxl', mode='w') as writer:
            for aba, dados in dados_atualizados.items():
                dados.to_excel(writer, sheet_name=aba, index=False)
        logging.info("Arquivo atualizado com sucesso")

        try:
            result = subprocess.run(
                ["powershell", "-ExecutionPolicy", "Bypass", "-File", POWERBI_SCRIPT_PATH],
                capture_output=True, text=True, check=True
            )
            logging.info(f"Atualização do Power BI concluída: {result.stdout}")
            return jsonify({"status": "success", "message": "Dados e Power BI atualizados com sucesso"}), 200
        except subprocess.CalledProcessError as e:
            logging.error(f"Erro ao executar o script PowerShell: {e.stderr}")
            return jsonify({"status": "error", "message": "Erro ao atualizar o Power BI"}), 500
    except Exception as e:
        logging.error(f"Erro ao salvar o arquivo atualizado: {str(e)}")
        return jsonify({"status": "error", "message": "Erro ao salvar o arquivo Excel"}), 500

if __name__ == '__main__':
    logging.info("Iniciando o servidor Flask")
    app.run(port=5000)
