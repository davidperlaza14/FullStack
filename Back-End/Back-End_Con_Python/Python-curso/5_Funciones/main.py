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

def miFuncion(nombre):
    print("Hola", nombre)

def matematicas(a,b):
    def suma(a,b):
        print(a+b)
    def resta(a,b):
        print(a-b)
    
    suma(a,b)
    resta(a,b)
    
    
    
miFuncion("David")
# suma(5,4)
matematicas(5,3)
