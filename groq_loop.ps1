$ErrorActionPreference = 'Continue'
Set-Location "d:\Minhas Coisas\Minhas Coisas\Voltris\VOLTRIS INTERNACIONAL"
$log = "groq_run.log"
Remove-Item $log -ErrorAction SilentlyContinue
for ($i = 0; $i -lt 200000; $i++) {
    $output = node scripts/translate-guides.mjs --provider groq --model openai/gpt-oss-120b --lang all --batch 50 --concurrency 1 2>&1
    $output *>> $log
    $total = ($output | Select-String "TOTAL_RESUM=(\d+)")
    if ($total) {
        $resum = [int]($total.Matches[0].Groups[1].Value)
        "PASS $i : TOTAL_RESUM=$resum" *>> $log
        if ($resum -eq 0) { "ALL DONE" *>> $log; break }
    }
    Start-Sleep -Seconds 15
}
