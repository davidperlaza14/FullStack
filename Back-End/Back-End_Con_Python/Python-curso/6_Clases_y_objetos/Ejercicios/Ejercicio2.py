# Creamos la clase Alumno
class Alumno:
    def alumNota(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
    
    
    # Funcion para imprimir
    def imprimir(self):
        print("Nombre: ",self.nombre)
        print("Nota: ", self.nota)
    
    
    # Funcion para obtener los resultados
    def resultado(self):
        if self.nota < 5:
            print("El alumno ha Reprobado")
        else:
            print("El alumno ha Aprobado")


# creamos los nuevos objetos
alumno1 = Alumno()
alumno2 = Alumno()

# inicializamos los atributos
alumno1.alumNota("Jose", 8)
alumno2.alumNota("Carlos", 3)

# imprimimos los datos y resultados de cada alumno
alumno1.imprimir()
alumno1.resultado()
alumno2.imprimir()
alumno2.resultado()