import datetime 
d = datetime.date(2024, 9, 21)

print(d)

# ou podemos fazer dessa forma abaixo (essa vai ser a forma de estudo do módulo)

from datetime import date, datetime, time
data = date(2024, 9, 15)

print(data)
print(date.today()) # não necessita de parâmetro, pois imprime a data atual

data_hora = datetime(2024, 9, 1, 12, 51, 30)
print(data_hora)
print(datetime.today()) # não necessita de parâmetro, pois imprime a data e hora atual

hora = time(20, 49, 54, 1000)
print(hora)


