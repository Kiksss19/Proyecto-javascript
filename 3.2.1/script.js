alert('hola')

let valorA = 5;
let valorB = 4;

valorA = 9 

//operaciones basicas
console.log(valorA + " + " + valorB + " = " + (valorA + valorB));
console.log(valorA + " * " + valorB + " = " + (valorA * valorB));
console.log(valorA + " - " + valorB + " = " + (valorA - valorB));
console.log(valorA + " / " + valorB + " = " + (valorA / valorB));


//modulo
console.log("5 % 1 = " + (5 % 1));
console.log("5 % 2 = " + (5 % 2));
console.log("5 % 3 = " + (5 % 3));
console.log("5 % 4 = " + (5 % 4));
console.log("5 % 5 = " + (5 % 5));


//operadores combinados
let variable1 = 10;
console.log(variable1);
variable1 += 5;
console.log(variable1); 
variable1 -= 7;
console.log(variable1); 
variable1 *= 2;
console.log(variable1); 


//operador incremento
let variable2 = 0 
console.log(variable2);
variable2++;
console.log(variable2);
variable2++;
console.log(variable2);


//operador decremento 
console.log(variable2);
variable2--;
console.log(variable2);
variable2--;
console.log(variable2);


//operador de comparacion
console.log("5 == 5 " + (5 == 5));
console.log("5 == '5' -> " + (5 == '5'));
console.log("5 === '5' -> " + (5 === '5'));

console.log("18 != 17 " + (18 != 17));
console.log("18 != '18' " + (18 != '18'));
console.log("18 !== '18' " + (18 !== '18'));


let variableMayor = 24;
let variableMenor = -1;
console.log(variableMayor + " > " + variableMenor + " -> " + (variableMayor > variableMenor));
console.log(variableMayor + " < " + variableMenor + " -> " + (variableMayor < variableMenor));

let variableIgual = 24;
console.log(variableMayor + " > " + variableIgual + " -> " + (variableMayor > variableIgual));
console.log(variableMayor + " < " + variableIgual + " -> " + (variableMayor < variableIgual));

//operadores logicos
// AND (&&)
// true && true = true
// true && false = false
// false && true = false
// false && false = false

//Or (||)
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// NOT (!)
// !true = false
// !false = true


let edad = 18;
let traeine = true;
console.log("edad: " + edad);
console.log("traine: " + traeine);
console.log("edad >= 18  && traeine == true --> ", (edad >= 18 && traeine == true));

traeine = false;
console.log("edad: " + edad);
console.log("traine: " + traeine);
console.log("edad >= 18  && traeine == true --> ", (edad >= 18 && traeine == true));



let especie = "perro";
console.log("Especie: " + especie);
console.log("especie == 'perro' || especie == 'gato' --> ", (especie == "perro" || especie == "gato"));


especie = "gato";
console.log("Especie: " + especie);
console.log("especie == 'perro' || especie == 'gato' --> ", (especie == "perro" || especie == "gato"));

especie = "conejo";
console.log("Especie: " + especie);
console.log("especie == 'perro' || especie == 'gato' --> ", (especie == "perro" || especie == "gato"));

console.log("!true -> " + !true);
console.log("!false -> " + !false);

edad = 35;
console.log("!(edad>=18) -> "  + (!(edad >= 18)));
