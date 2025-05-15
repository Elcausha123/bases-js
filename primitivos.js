let nombre = "Jeampool Ramos";
console.log(nombre);

nombre = "Juan Ramos";
console.log(nombre);

nombre = "Destino Final";
console.log(nombre);

console.log(typeof nombre); //String

nombre[0] = 'J';
console.log(nombre);

let edad = 25;
console.log(edad);
edad = 30;
console.log(edad);
console.log(typeof edad); //Number
edad[0] = 2;
console.log(edad);


let personaje = {
    nombre: "Juan Ramos",
    edad: 25,
    habilidades: ["JavaScript", "HTML", "CSS"],
    dirreccion: {
        ciudad: "Lima",
        pais: "Perú"
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
}
