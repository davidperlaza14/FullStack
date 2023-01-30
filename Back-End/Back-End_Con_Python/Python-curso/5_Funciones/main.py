""" 
Descripción

Esta es la quinta sesión, donde veremos para qué sirven las funciones, así como sus variables, tipos y aplicaciones.
"""
# Modelo de una funcion en python
# def numbre():
#     pass

# def miFuncion():
#     print("Nombre");
#     print("Mas lineas");
    
#     for i in range(1, 6):
#         print(i)
    
    
# print("Antes");
# miFuncion()
# print("Despues");


# ===========================
# Funcion con parametros

# def miFuncion(nombre):
#     print("Hola", nombre)

# def matematicas(a,b):
#     def suma(a,b):
#         print(a+b)
#     def resta(a,b):
#         print(a-b)
#
#     suma(a,b)
#     resta(a,b)
    
    
    
# miFuncion("David")
# suma(5,4)
# matematicas(5,3)

#
# def suma(a=2, b=4, c=3):
#     print(a+b+c)
# suma()


# Parametros variables (*args)

# def suma(*args):
#     resul = 0
#     for arg in args:
#         resul += arg
#     print(resul)
#
# suma(1,2,3,4,5,6,7,8,3)


# def suma(**kwargs):
#     print(kwargs)
#
# suma(vivienda='piso', coche='rojo')


# Funciones lambda

anonima = lambda: print("Hola")
anonima()

anonima = lambda nombre, nombre2: print("Hola", nombre, "adios",nombre2)
anonima("David", "Ivan")


sumatoria = lambda x: x+x
print(sumatoria(2))












