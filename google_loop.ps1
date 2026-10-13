$ErrorActionPreference = 'Continue'
Set-Location "d:\Minhas Coisas\Minhas Coisas\Voltris\VOLTRIS INTERNACIONAL"
$log = "google_run.log"
Remove-Item $log -ErrorAction SilentlyContinue
for ($i = 0; $i -lt 100000; $i++) {
    $output = node scripts/google_bulk_translate.mjs --batch 25 --delay 1500 2>&1
    $output *>> $log
    $resum = ($output | Select-String "GOOGLE_RESUM=(\d+)")
    if ($resum) {
        $r = [int]($resum.Matches[0].Groups[1].Value)
        "PASS $i : GOOGLE_RESUM=$r" *>> $log
        if ($r -eq 0) { "ALL DONE" *>> $log; break }
    }
    # Back off a bit between passes to avoid Google abuse lockouts.
    Start-Sleep -Seconds 20
}
