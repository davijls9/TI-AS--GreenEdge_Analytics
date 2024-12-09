@echo off
setlocal enabledelayedexpansion

rem Função para listar a estrutura do projeto
call :list_folder "."

exit /b

:list_folder
set "folder=%~1"
cd "%folder%"

for /d %%d in (*) do (
    echo +-- "%%d"
    cd "%%d"
    for %%f in (*) do (
        if exist %%f (
            echo ^|   +-- "%%f"
        )
    )
    cd ..
)

for %%f in (*) do (
    if not exist %%f\ (
        echo +-- "%%f"
    )
)
exit /b
