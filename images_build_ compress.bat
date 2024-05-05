@echo off
setlocal
set "FILES=netoab.tar arquivo1.txt"
for %%f in (%FILES%) do (
    if exist "%%f" (
	
		if exist "%%~nf.zip" del /F /Q "%%~nf.zip"	
        7z a -tzip "%%~nf.zip" "%%f"
    ) else (
        echo Arquivo não encontrado: %%f
    )
)
echo Todos os arquivos foram compactados.
endlocal
