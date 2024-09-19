from datetime import datetime, timedelta, time

tipo_carro = "P" # P, M, G
tempo_pequeno = 30
tempo_medio = 45
tempo_grande = 60
data_atual = datetime.now()

if tipo_carro == "P":
    print(f'A hora de abertura de serviço foi às: {data_atual}')
    data_estimada = data_atual + timedelta(minutes=tempo_pequeno)
    print(f'Sua hora estimada de retirada do veículo é às {data_estimada}')
elif tipo_carro == "M":
    print(f'A hora de abertura de serviço foi às: {data_atual}')
    data_estimada = data_atual + timedelta(minutes=tempo_medio)
    print(f'Sua hora estimada de retirada do veículo é às {data_estimada}')
else:
    print(f'A hora de abertura de serviço foi às: {data_atual}')
    data_estimada = data_atual + timedelta(minutes=tempo_grande)
    print(f'Sua hora estimada de retirada do veículo é às {data_estimada}')


# para manipular hora, eu preciso criar uma variável, atribuir data e hora e executar a operação dentro da mesma, pra só assim a hora ser acrescida ou subtraída

# print(time(10, 19 ,50) - timedelta(hours=1)) // essa seria a forma errada de fazer a opeção 

hora_subtraida = datetime(2024, 9, 1, 13, 22, 50) - timedelta(hours=1)

print(hora_subtraida.time()) #imprime só a hora da variável hora_subtraida


