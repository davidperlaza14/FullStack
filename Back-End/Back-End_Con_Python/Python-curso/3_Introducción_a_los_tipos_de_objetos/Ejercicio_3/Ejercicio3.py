print("Indice De Masa Corporal(IMC)");

peso = int(input("Ingresa tu peso en kg: "));
altura = float(input("ngresa tu estatura en m: "));

imc = peso / (altura)**2

print("Tu indice de masa corporal es: {:.2f}".format(imc));