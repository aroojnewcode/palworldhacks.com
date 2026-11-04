# Palworld Hacks — local dev (uses D: drive when C: is full)
# Right-click → Run with PowerShell, or:
#   Set-ExecutionPolicy -Scope Process Bypass; .\RUN-DEV.ps1

$ErrorActionPreference = 'Stop'
$ProjectRoot = $PSScriptRoot
$WorkDir = if ($env:PALWORLD_DEV_DIR) { $env:PALWORLD_DEV_DIR } else { 'D:\palworldhacks-dev' }

$env:TEMP = 'D:\temp'
$env:TMP = 'D:\temp'
$env:npm_config_cache = 'D:\npm-cache'
New-Item -ItemType Directory -Path $env:TEMP, $env:npm_config_cache, $WorkDir -Force | Out-Null

Write-Host "Syncing project to $WorkDir ..."
robocopy $ProjectRoot $WorkDir /MIR /XD node_modules dist .git /NFL /NDL /NJH /NJS | Out-Null
if ($LASTEXITCODE -ge 8) { throw "Robocopy failed (exit $LASTEXITCODE)" }

Set-Location $WorkDir

if (-not (Test-Path '.\node_modules\astro\package.json')) {
  Write-Host 'Installing npm packages (first run takes a few minutes)...'
  npm install
}

Write-Host ''
Write-Host 'Open in browser: http://127.0.0.1:4321/' -ForegroundColor Green
Write-Host 'Press Ctrl+C to stop.' -ForegroundColor DarkGray
npm run dev -- --host 127.0.0.1 --port 4321
