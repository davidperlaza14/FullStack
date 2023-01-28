"""Esta es la cuarta sesión, donde veremos una introducción al control de flujo y sus distintas funciones y aplicaciones."""
# contador = 1;

# while (contador < 10):
    
#     print("Contador vale", contador);
#     if contador % 2 == 0:
#         print(contador, "Este es un numero par.");
#     elif contador % 2 == 1:
#         print(contador, "es in par")
    
# #         print("s")
#     contador +=1;

# lista = [1,2,3,4,5,10]

# for num in range(1, 10):
#     print(num)

# lista = ["hola", "mensaje", "adios"]
# for palabra in lista:
#     if palabra == "mensaje":
#         print("he encontrado la palabra mensaje.")

# if "mensaje" in lista:
#     print("he encontrado la palabra mensaje.")


# lista = [3,4,1,2,5]
# print(lista, " Desordenado")

# listaOrdenada = sorted(lista)
# print(listaOrdenada, "Ordenado")
# listaOrdenada = sorted(lista,reverse=True)
# print(listaOrdenada, "en forma decreciente.")


rango_1_100 = range(1,101)

# Se muestra el rango de números desde 100 hasta 1
for i in reversed(rango_1_100):
    print(f"- {i}")