//funcion
function saludo() {
    console.log("Hola, esto es una funcion");
}
//cuando se decreta una funcion, no se ejecuta hadta que la llames

saludo(); //lamar a una funcion


function saludarPersona(nombre){
    console.log("Hola " + nombre + ", esto es una funcion");
}

saludarPersona("Carlos"); 
saludarPersona("Juan");

let nombre1 = "Pepe";
saludarPersona(nombre1); //llamar a la funcion con una variable

function sumar(a, b) {
    return a + b; //retorna el resultado de la suma
}
//despues de un return, no se ejecuta nada mas de la funcion
console.log(sumar(5, 10)); //llamar a la funcion y mostrar el resultado en consola

// se puede hacer una funcion dentro de otra

function sumResMult(a, b){

    function sumar(a, b) {
        return a + b;
    }

    function restar(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    return sumar(a, b) + restar(a, b) + multiplicar(a, b); 

}

console.log(sumResMult(5, 10));


//scope (alcance) nos permite saber hasta donde podemos utilizar una variable o funcion
//scope global, dentro de todo el codigo fuera de una funcion
// scope local, dentro de una funcion

