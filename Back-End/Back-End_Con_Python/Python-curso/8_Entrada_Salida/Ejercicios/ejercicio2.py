from pickle import *
class Vehiculo:
    
    def __init__(self, puertas, color):
        self.puertas = puertas
        self.color = color
        
    
    def __str__(self):
        return self.puertas + " " + self.puertas
    

lamborghini =  Vehiculo("2", "Negro")
print(lamborghini)

f = open('vehiculo_obj', 'w+b')

dump(lamborghini, f)

f.seek(0)
new_lamborghini = load(f)

print(new_lamborghini)
f.close()
    
        