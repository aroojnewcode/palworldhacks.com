# Local dev (uses D: for temp/npm cache when C: is tight)
$env:TEMP = 'D:\temp'
$env:TMP = 'D:\temp'
$env:npm_config_cache = 'D:\npm-cache'
New-Item -ItemType Directory -Force -Path $env:TEMP, $env:npm_config_cache | Out-Null

Set-Location $PSScriptRoot
if (-not (Test-Path 'node_modules\astro\package.json')) {
  npm install
}

Write-Host 'Starting Astro (first start can take 30–60s)...' -ForegroundColor Cyan
npm run dev -- --host 127.0.0.1 --port 4321
