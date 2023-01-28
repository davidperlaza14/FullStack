from django.http import HttpResponse

def saludo(request):
    return HttpResponse("Hola mundo")

def adios(request):
    return HttpResponse("Adios")

def adulto(request,edad):
    if edad >= 18:
        return HttpResponse("Eres mayor de edad")
    else:
        return HttpResponse("No eres mayor de edad")
    
def estudio(request,numero):
    if numero == 1:
        return HttpResponse("Eres estudiante de Programacion")
    elif numero == 2:
        return HttpResponse("Eres estudiante de Quimica")
    elif numero == 3:
        return HttpResponse("Eres estudiante de Fisica")
