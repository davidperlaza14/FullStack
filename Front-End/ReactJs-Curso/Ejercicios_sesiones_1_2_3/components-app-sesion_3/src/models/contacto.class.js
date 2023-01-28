export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;


    constructor(nombre, apellido, email, contacto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = contacto;
    }
}

