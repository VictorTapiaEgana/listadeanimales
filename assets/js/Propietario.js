class Propietario {
    constructor(NombrePropietario, Direccion, Telefono) {
        
        this.NombrePropietario = NombrePropietario; 
        this.direccion = Direccion;
        this.telefono = Telefono;
    }

    datosPropietario() {
        
        return `El nombre del propietario es ${this.NombrePropietario},
                el domicilio es ${this.direccion},  
                y el numero Telefónico de contacto es: ${this.telefono}  
                ${this.tipo}, mientras que el nombre es "${this.nombreMascota}" 
                y la enfermedad es : ${this.enfermedad}`            
    }
}

class Animal extends Propietario {
    constructor(NombrePropietario, Direccion, Telefono, Tipo) {
        
        super(NombrePropietario, Direccion, Telefono);        

        this.tipoAnimal = Tipo;
    }   

    get tipo() {

         return `El tipo de animal es un: ${this.tipoAnimal}`;        

    }
}

export class Mascota extends Animal {
    constructor(NombrePropietario, Direccion, Telefono, Tipo, NombreMascota, Enfermedad) {
        
        super(NombrePropietario, Direccion, Telefono, Tipo);
        
        this.nombreMascota = NombreMascota;
        this.enfermedadMascota = Enfermedad;
    }

    get nombre() {
        return this.nombreMascota;
    } 

    set nombre(NuevoNombre) {
        this.nombreMascota = NuevoNombre;
    }

    get enfermedad() {
        return this.enfermedadMascota;
    }

    set enfermedad(NuevaEnfermedad) {
        this.enfermedadMascota = NuevaEnfermedad;
    }
}