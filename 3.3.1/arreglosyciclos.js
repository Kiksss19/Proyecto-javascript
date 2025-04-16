alert("Ciclos")

let contador = 1;

console.log(contador)

while(contador <= 10){
    console.log(contador);
    contador++;
}



//// do while se ejecuta siempre solo 1 vez, despues aplica el while
do{
    console.log("do while");
}while(contador < 10)


// Funciona mientras se cumpla la condicion, tu pones el tope, y sabes cuando va a terminar
console.log("For")
for (let i = 0; i <= 20; i += 21){
    console.log(i);
}


let nombres = ["jorge", "maria", "pepe", "luis", "jose"];

console.log(typeof nombres); //sirve para saber el tipo de dato
//array
console.log(nombres[1]) // me va  a dar el sexto elemento de izquierda a derecha, empieza la cuenta en 0, (Jose)
nombres[1] = "Miguel"; //modifica el valor seleccionado 
console.log(nombres[1])


let frutas = []
console.log(frutas)

frutas.push('Manzana') //agrega un elemento al final del array
console.log(frutas)

frutas.unshift('Uvas') //agrega un elemento al inicio del array
console.log(frutas)

frutas.push('Zanahoria')
frutas.unshift('cebolla')
console.log(frutas)

frutas.pop() //elimina el ultimo elemento del array
console.log(frutas)

frutas.shift() //elimina el primer elemento del array
console.log(frutas)

console.log(frutas.slice(1, 3)); //crea un subarreglo

let numpares = [1,3,4,5,7,8,9,10,11,15,64, 100, 87, 71, 65, 89, 10];

let pares = [];
let impares = [];

for(let i = 0; i < numpares.length; i++){
    if(pares[i] % 2 == 0){
        console.log(numpares[i] + " es par");
        pares.push(numpares[i]);
    }else{
        console.log(numpares[i] + " es impar");
        impares.push(numpares[i]);
    }
}

console.log("Pares:")
console.log(pares);

console.log("Impares:")
console.log(impares);   

