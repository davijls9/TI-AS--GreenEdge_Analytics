@echo off

:: Ativa o ambiente virtual do Python (se necessário)
:: call path\to\your\virtualenv\Scripts\activate.bat

:: Inicia o servidor HTTP do Node.js
echo Iniciando o servidor HTTP...
start cmd /k "npm install -g http-server && http-server ."

:: Inicia o servidor Flask
echo Iniciando o servidor Flask...
start cmd /k "pip install flask flask_cors openpyxl && python server.py"

:: Mensagem de conclusão
echo Os servidores foram iniciados em janelas separadas.
pause
