$ErrorActionPreference = 'Continue'
$out = "$env:TEMP\pushbg_out.txt"
$err = "$env:TEMP\pushbg_err.txt"
Remove-Item $out,$err -ErrorAction SilentlyContinue
$env:GIT_TERMINAL_PROMPT = '0'
$env:GCM_INTERACTIVE = 'Never'
"inicio $(Get-Date -Format 'HH:mm:ss') remoto_antes=$((git ls-remote origin refs/heads/main 2>$null) -split "`t" | Select-Object -First 1)"
# push em background usando credencial gravada (funcionou no ls-remote)
$p = Start-Process -FilePath git -ArgumentList 'push','origin','main:main' -RedirectStandardOutput $out -RedirectStandardError $err -PassThru -WindowStyle Hidden
"push pid=$($p.Id) iniciado $(Get-Date -Format 'HH:mm:ss')"
# gera: o processo push pode demorar p/ pack grande; aguardamos com timeout proprio
if (-not $p.WaitForExit(780000)) {
  "AVISO: push ainda rodando apos 13min; consultando estado via ls-remote..."
} else {
  "push terminou exit=$($p.ExitCode)"
}
"--- saida ---"; if(Test-Path $out){ Get-Content $out }
"--- erro ---"; if(Test-Path $err){ Get-Content $err }
"fim $(Get-Date -Format 'HH:mm:ss')"
