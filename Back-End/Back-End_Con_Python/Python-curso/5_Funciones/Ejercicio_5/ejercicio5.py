"""

Enunciado del ejercicio:

Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.
"""

def  es_bisiesto(agnio):
        if agnio % 400 == 0:
            return True
        elif agnio % 100 == 0:
            return False
        elif agnio % 4 == 0:
            return True
        else:
            return False

agnio = 2000
print('El año %i es bisiesto?: %s' % (agnio, es_bisiesto(agnio)))
agnio = 2001
print('El año %i es bisiesto?: %s' % (agnio, es_bisiesto(agnio)))
agnio = 2070
print('El año %i es bisiesto?: %s' % (agnio, es_bisiesto(agnio)))
agnio = 2024
print('El año %i es bisiesto?: %s' % (agnio, es_bisiesto(agnio)))
