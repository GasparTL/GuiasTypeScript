"use strict";
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Gaspar");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
