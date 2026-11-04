@echo off
REM Quick start using existing D:\rust-cheats.net node_modules (sync latest code first)
setlocal
set "TEMP=D:\temp"
set "TMP=D:\temp"
set "npm_config_cache=D:\npm-cache"
if not exist "%TEMP%" mkdir "%TEMP%"
if not exist "%npm_config_cache%" mkdir "%npm_config_cache%"

set "SRC=%~dp0"
set "DEST=D:\rust-cheats.net"

echo Updating %DEST% from your project folder...
robocopy "%SRC%" "%DEST%" /E /XD node_modules dist .git /NFL /NDL /NJH /NJS

cd /d "%DEST%"
echo Open http://127.0.0.1:4321/
call npm run dev -- --host 127.0.0.1 --port 4321
pause
