# Importamos el modulo
from operaciones import *

a, b= (10,  2)

print( "{} + {} = {}".format(a, b, suma(a, b) ) )
print( "{} - {} = {}".format(a, b, resta(a, b) ) )
print( "{} * {} = {}".format(a, b, multiplicar(a, b) ) ) 
print( "{} / {} = {}".format(a, b, division(a, b) ) )