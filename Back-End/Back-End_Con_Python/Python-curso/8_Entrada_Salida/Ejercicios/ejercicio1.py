"""Enunciado del ejercicio:

En este ejercicio, tendréis que crear un archivo py donde creéis un archivo txt, lo abráis y escribáis dentro del archivo. Para ello, tendréis que acceder dos veces al archivo creado."""

f = open('ejercicio1.txt', 'w')
lista = ['Hola, mundo\n', 'hola, mundo']
f.writelines(lista)
f.close()