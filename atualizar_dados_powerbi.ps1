# Logando a inicialização do script
Write-Output "Iniciando a atualização do Power BI..."

# Caminho para o arquivo de configuração (mesma pasta do script PowerShell)
$configFilePath = Join-Path -Path (Split-Path -Parent $MyInvocation.MyCommand.Path) -ChildPath "config.json"

# Verifique se o arquivo de configuração existe
if (Test-Path $configFilePath) {
    Write-Output "Arquivo de configuração encontrado. Carregando..."
    $config = Get-Content -Path $configFilePath | ConvertFrom-Json
} else {
    Write-Output "Erro: Arquivo de configuração não encontrado no caminho especificado."
    exit 1
}

# Atribua as variáveis a partir do arquivo JSON
$basePath = $config.BASE_PATH
$dadosExcelPath = Join-Path -Path $basePath -ChildPath $config.dadosExcelPath
$pbixFilePath = Join-Path -Path $basePath -ChildPath $config.pbixFilePath
$powerBIPath = $config.powerBIPath

# Log das variáveis carregadas
Write-Output "Caminho do arquivo Excel de dados: $dadosExcelPath"
Write-Output "Caminho do arquivo PBIX: $pbixFilePath"
Write-Output "Caminho do Power BI Desktop: $powerBIPath"

# Verifique se o arquivo de dados existe
if (Test-Path $dadosExcelPath) {
    Write-Output "Arquivo de dados encontrado."
} else {
    Write-Output "Erro: Arquivo de dados não encontrado no caminho especificado."
    exit 1
}

# Verifique se o arquivo PBIX existe
if (Test-Path $pbixFilePath) {
    Write-Output "Arquivo PBIX encontrado. Executando atualização."
    Start-Process -FilePath $powerBIPath -ArgumentList $pbixFilePath
} else {
    Write-Output "Erro: Arquivo PBIX não encontrado no caminho especificado."
    exit 1
}

# Aguardar para garantir que a atualização seja concluída
Start-Sleep -Seconds 15
Write-Output "Atualização do Power BI concluída."

# Finalizando o script
Write-Output "Script de atualização do Power BI finalizado com sucesso."
