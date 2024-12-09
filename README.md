# TI-AS--Monitoring_energy

## Identificação do Grupo
- **Alexandre França Quirino dos Santos**
- **Davi Jorge Leite Santos**
- **Heitor Meinicie Ribeiro**
- **Samuel Rodrigues Cardilo Van Petten**
- **Samuel Vitor Cardoso Santos**

---

# Dashboard de Monitoramento Energético para Otimização da Eficiência Energética

## 1. Apresentação
Este projeto tem como objetivo desenvolver um **dashboard de monitoramento energético** que permita identificar ineficiências energéticas em uma empresa. A proposta visa fornecer ferramentas para análise detalhada de consumo e desempenho energético, promovendo a otimização da eficiência energética e contribuindo para a sustentabilidade ambiental e econômica.

### 1.1 Cliente
O cliente é uma empresa que enfrenta desafios relacionados a altos custos e desperdícios energéticos. O dashboard será utilizado por gestores e técnicos, que possuem níveis variados de conhecimento técnico, para apoiar na tomada de decisões estratégicas e operacionais.

### 1.2 Problema
A ausência de visibilidade sobre o consumo de energia dificulta a identificação de áreas de desperdício e a implementação de medidas corretivas. Isso impacta diretamente os custos operacionais e a sustentabilidade da empresa.

### 1.3 Objetivo do Trabalho
Criar um **dashboard interativo** que permita monitorar o desempenho energético, identificar ineficiências e gerar relatórios detalhados. Além disso, será apresentada uma descrição arquitetural do sistema para apoiar o desenvolvimento.

#### Objetivos específicos:
- Implementar métricas como **PUE (Power Usage Effectiveness)**.
- Criar relatórios detalhados sobre eficiência energética.
- Desenvolver ferramentas de análise de desempenho e gasto energético.
- Prover interfaces intuitivas para visualização e exploração dos dados.

### 1.4 Definições e Abreviaturas
- **PUE:** Métrica de eficiência de data centers (energia total consumida / energia consumida por TI).
- **Eficiência Energética:** Redução do desperdício de energia.
- **Dashboard:** Interface gráfica para análise de dados.
- **Gestores de Energia:** Profissionais responsáveis por otimizar o consumo energético.

---

## 2. Arquitetura do Sistema

O sistema é baseado em uma arquitetura cliente-servidor, com o seguinte fluxo:
1. **Frontend:** Desenvolvido em HTML, CSS e JavaScript puro, utilizando bibliotecas como `XLSX.js` para manipulação de planilhas.
2. **Backend:** API RESTful implementada em Flask, responsável por:
   - Receber arquivos de planilhas enviados pelo frontend.
   - Atualizar os dados no arquivo principal (`Dados Servidores.xlsx`).
   - Gerar relatórios e dados simulados para análise energética.
3. **Integração com Power BI:** Automatizada via PowerShell para atualização periódica de dashboards baseados nos dados processados.


### Principais Funcionalidades do Backend:
- Atualização incremental de dados no arquivo principal.
- Geração de dados sequenciais desde uma data inicial até o presente.
- Suporte a múltiplas abas no Excel (`Servidor 1` e `Servidor 2`).
- Controle de logs e tratamento de erros.

### 2.1 Lista de Atores
Os atores deste projeto, considerando a abordagem do Design Thinking, envolvem:

1. **Gestor de TI:** Necessita de relatórios detalhados sobre o consumo de energia e eficiência para tomadas de decisões.
2. **Analista de Dados:** Utiliza o dashboard para analisar o comportamento dos servidores e identificar padrões de uso.
3. **Diretoria Executiva:** Requer uma visão simplificada dos indicadores-chave de desempenho (KPIs) para decisões estratégicas.
4. **Engenheiro de Sustentabilidade:** Busca dados de eficiência energética e sustentabilidade para elaborar relatórios de impacto ambiental.
5. **Operador de Servidores:** Monitora as métricas em tempo real para assegurar o funcionamento adequado dos sistemas.

---

### 2.2 Lista de Funcionalidades
Funcionalidades a serem atendidas no projeto na visão do cliente:

- Visualizar métricas de eficiência energética, como **PUE**, **DCiE**, **CUE** e **WUE**.
- Monitorar uptime dos servidores com histórico de falhas.
- Gerar relatórios personalizados sobre consumo de energia e desempenho de servidores.
- Visualizar a eficiência dos ventiladores e impacto na eficiência geral do data center.
- Exportar gráficos e relatórios para apresentações e reuniões.

---

### 2.3 Requisitos Funcionais

| ID   | Descrição Resumida                                                                  | Dificuldade | Prioridade | Responsável           |
|------|-------------------------------------------------------------------------------------|-------------|------------|-----------------------|
| RF01 | O sistema deve permitir a visualização em tempo real dos KPIs                       | Média        | Alta       | Davi Jorge            |
| RF02 | O sistema deve gerar relatórios de eficiência energética                            | Média        | Média      | Davi Jorge            |
| RF03 | O sistema deve alertar em caso de queda de desempenho dos servidores                | Alta         | Alta       | Samuel Vitor          |
| RF04 | O sistema deve exportar dados em formatos compatíveis com apresentações             | Baixa        | Baixa      | Heitor Meinicke       |
| RF05 | O sistema deve permitir a análise de tendências de consumo ao longo do tempo        | Média        | Média      | Samuel Vitor          |
| RF06 | O sistema deve ter a possibilidade de filtro de data                                | Baixa        | Alta       | Samuel Rodrigues      |
| RF07 | O sistema deve demonstrar alerta sobre irregularidades no consumo                   | Alta         | Baixa      | Samuel Rodrigues      |
| RF08 | O sistema deve apresentar gráficos interativos no dashboard                         | Média        | Média      | Heitor Meinicke       |
| RF09 | O sistema deve permitir o download dos gráficos gerados no dashboard                | Média        | Baixa      | Alexandre             |
| RF10 | O sistema deve possibilitar a parametrização do intervalo de atualizações dos dados | Média        | Alta       | Alexandre             |
| RF11 | Sistema de atualização dos dados brutos do Power BI que consiga conectar com ele    | Média        | Alta       | Davi Jorge            |

---

### 2.4 Requisitos Não Funcionais

| ID     | Descrição                                                                        | Prioridade | Responsável           |
|--------|----------------------------------------------------------------------------------|------------|-----------------------|
| RNF01  | O sistema deve operar exclusivamente no Power BI                                 | Alta       | Alexandre             |
| RNF02  | O tempo de atualização dos dados deve ser inferior a 5 minutos                   | Média      | Davi Jorge            |
| RNF03  | O sistema deve ser acessível via desktop com acesso restrito por login           | Alta       | Heitor Meinicke       |
| RNF04  | O desempenho do dashboard não deve ser afetado por grandes volumes de dados      | Média      | Samuel Vitor          |
| RNF05  | O sistema deve ser acessível por navegadores amplamente utilizados               | Alta       | Samuel Rodrigues      |

---

### 2.5 Descrição Resumida dos Casos de Uso ou Histórias de Usuários

#### Casos de Uso
**UC01 – Monitoramento de Consumo Energético**  
- **Descrição:** Permitir o monitoramento em tempo real do consumo energético da empresa.  
- **Atores:** Gestor de Energia, Técnico.  
- **Prioridade:** Alta.  
- **Requisitos associados:** RF01 (Monitoramento de consumo), RNF01 (Tempo de resposta).  

**Fluxo Principal:**  
1. O usuário acessa o dashboard.  
2. O sistema exibe o consumo energético em tempo real.  
3. O usuário analisa as informações e identifica possíveis ineficiências.  

---

**UC02 – Geração de Relatórios Energéticos**  
- **Descrição:** Permitir a geração de relatórios periódicos sobre o consumo energético e eficiência.  
- **Atores:** Gestor de Energia, Administrador.  
- **Prioridade:** Média.  
- **Requisitos associados:** RF02 (Geração de relatórios), RNF02 (Capacidade de armazenamento).  

**Fluxo Principal:**  
1. O usuário solicita a geração de um relatório.  
2. O sistema compila os dados energéticos.  
3. O relatório é gerado e disponibilizado para download.  

---

**UC03 – Análise de Eficiência Energética**  
- **Descrição:** Permitir a análise da eficiência energética com base em métricas como o PUE.  
- **Atores:** Gestor de Energia, Técnico.  
- **Prioridade:** Alta.  
- **Requisitos associados:** RF03 (Métricas de eficiência), RNF03 (Disponibilidade).  

**Fluxo Principal:**  
1. O usuário acessa a seção de análise.  
2. O sistema exibe as métricas de eficiência (PUE, CUE, etc.).  
3. O usuário avalia os resultados e identifica áreas para otimização.  

---

### 2.6 Restrições Arquiteturais
- **Ferramenta de Visualização e Análise de Dados:** O dashboard será desenvolvido com Power BI como ferramenta principal para visualização de dados e criação de gráficos interativos.  
- **Persistência de Dados:** Gerenciada por ORM (Object-Relational Mapping), garantindo integração com o Power BI e consistência nos dados.  
- **Segurança e Controle de Acesso:** Gerenciada via funcionalidades nativas do Power BI, garantindo acesso apenas a usuários autorizados.  

---

### 2.7 Mecanismos Arquiteturais

| **Análise**                            | **Design**                              | **Implementação**                  |
|----------------------------------------|-----------------------------------------|------------------------------------|
| Integração de Dados                    | Conectores para diferentes fontes       | Power Query                        |
| ETL (Extração, Transformação, Carga)   | Transformações diretas de dados         | Power Query                        |
| Persistência de Dados                  | Modelagem de dados interna              | Power BI                           |
| Visualização e Relatórios              | Visualizações dinâmicas                 | Power BI                           |
| Interatividade                         | Filtros e Slicers                       | Power BI                           |
| Segurança de Dados                     | Controle de acesso e permissões         | Power BI                           |
| Performance                            | Otimização de consultas e modelos       | Power BI                           |
| Automatização                          | Atualizações automáticas                | Power BI                           |
| Análise de Dados                       | Fórmulas DAX (Data Analysis Expressions)| DAX Functions                      |
| Exportação e Compartilhamento          | Relatórios e Dashboards                 | Power BI                           |
| Tratamento de Erros                    | Verificação de consistência e alertas   | Power BI                           |
| Documentação                           | Documentação interna e externa          | Power BI                           |



---

## 3. Requisitos Funcionais

### Funcionalidades do Sistema:
1. **Monitoramento de PUE:** 
   - Implementação de métricas que analisam a eficácia do uso de energia.
2. **Relatórios Detalhados:**
   - Exportação de dados no formato Excel e integração com Power BI.
3. **Análise de Gasto Energético:**
   - Identificação de padrões e áreas de desperdício.
4. **Geração Automática de Dados:**
   - Dados gerados sequencialmente a partir de uma data inicial (`14/08/2024 09:00:00`) até a data atual.
5. **Dashboard Interativo:**
   - Interfaces intuitivas para análise visual.

### Requisitos Técnicos:
- **Frontend:**
  - Suporte a navegadores modernos.
  - Gerenciamento dinâmico de dados utilizando tabelas e gráficos.
- **Backend:**
  - Suporte a manipulação de arquivos Excel (`openpyxl`).
  - APIs RESTful para comunicação com o frontend.
- **Power BI:**
  - Scripts PowerShell para automação de atualizações.

---

## 4. Cronograma do Projeto

### Sprint 1: Elaboração da Proposta
- **Início:** 19/08
- **Conclusão:** 02/09
- **Meta:** Definir objetivos, cronograma e entregáveis.

### Sprint 2: Requisitos Funcionais
- **Início:** 09/09
- **Conclusão:** 23/09
- **Meta:** Documentar requisitos e funcionalidades.

### Sprint 3: Modelagem Arquitetural
- **Início:** 30/09
- **Conclusão:** 07/10
- **Meta:** Desenvolver diagramas arquiteturais.

### Sprint 4: Implementação (Parte 1)
- **Início:** 21/10
- **Conclusão:** 18/11
- **Meta:** Implementar funcionalidades principais.

### Sprint 5: Implementação (Parte 2)
- **Início:** 25/11
- **Conclusão:** 09/12
- **Meta:** Refinar e completar a solução.

---

## 5. Estrutura do Projeto

### Frontend:
- **Páginas HTML:**
  - `huntfinder.html`: Interface principal para visualização de dados.
- **Scripts JS:**
  - `app.js`: Manipulação de tabelas e envio de dados.
  - `componentsLoader.js`: Carregamento dinâmico de componentes.
  - `auth.js`: Gerenciamento de autenticação.

### Backend:
- **API Flask:**
  - Endpoint `/atualizar_dados`: Recebe e processa dados enviados.
  - Manipulação de arquivos Excel utilizando `pandas` e `openpyxl`.

---

## 6. Execução do Sistema

### Backend
1. **Instalação de Dependências:**
   ```bash
   pip install flask pandas openpyxl flask-cors
   ```
2. **Inicializar o Servidor:**
   ```bash
   python server.py
   ```

### Frontend
1. Abra o arquivo `huntfinder.html` em um navegador moderno.

---

## 7. Contribuições dos Membros

### Alexandre França Quirino dos Santos:
- Modelagem arquitetural do sistema.
- Integração com Power BI.

### Davi Jorge Leite Santos:
- Desenvolvimento do frontend e manipulação de tabelas dinâmicas.
- Implementação do backend em Flask.

### Heitor Meinicie Ribeiro:
- Análise de requisitos e geração de relatórios.

### Samuel Rodrigues Cardilo Van Petten:
- Geração e validação de dados energéticos.

### Samuel Vitor Cardoso Santos:
- Otimização do sistema e revisão de código.

---

## 8. Referências
- **Agência Internacional de Energia:** Eficiência energética em data centers.
- **Documentação Flask:** https://flask.palletsprojects.com/
- **Documentação Pandas:** https://pandas.pydata.org/
- **Documentação Openpyxl:** https://openpyxl.readthedocs.io/

