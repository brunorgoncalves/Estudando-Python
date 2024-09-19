from datetime import datetime

data_hora = datetime.now()
data_hora_str = "2024-09-1 13:40"
mascara_ptbr = "%d/%m/%Y %a %H:%M"
mascara_en = "%Y-%m-%d %H:%M"

print(data_hora.strftime(mascara_ptbr))

print(datetime.strptime(data_hora_str, mascara_en))