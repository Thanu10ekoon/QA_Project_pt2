param(
  [string]$JMeterPath = "C:\Tools\apache-jmeter-5.6.3",
  [int]$Users = 50,
  [int]$Loops = 5,
  [int]$Ramp = 30,
  [switch]$Clean
)

if (!(Test-Path "$JMeterPath\bin\jmeter.bat")) {
  Write-Error "JMeter not found at $JMeterPath. Pass -JMeterPath or install JMeter."; exit 1
}

if ($Clean) {
  Write-Host "Cleaning old JMeter artifacts (test/jmeter/results_*.jtl, report_*/)..." -ForegroundColor Yellow
  Get-ChildItem test/jmeter -Filter results_*.jtl -ErrorAction SilentlyContinue | Remove-Item -Force
  Get-ChildItem test/jmeter -Directory -Filter report_* -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force
}

$stamp = Get-Date -Format "yyyyMMdd_HHmmss"
$results = "test/jmeter/results_$stamp.jtl"
$report  = "test/jmeter/report_$stamp"

Write-Host "Running JMeter test plan -> $results"
& "$JMeterPath\bin\jmeter.bat" -n -t test/jmeter/events_load.jmx -l $results -JUSERS=$Users -JLOOPS=$Loops -JRAMP=$Ramp
if ($LASTEXITCODE -ne 0) { Write-Error "JMeter test execution failed"; exit 1 }

Write-Host "Generating HTML report -> $report"
& "$JMeterPath\bin\jmeter.bat" -g $results -o $report -f
if ($LASTEXITCODE -ne 0) { Write-Error "JMeter report generation failed"; exit 1 }

Write-Host "DONE: Open $report/index.html"
