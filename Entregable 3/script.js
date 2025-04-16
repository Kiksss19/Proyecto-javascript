let frutasConTipo = [
    {nombre: "Naranja", tipo: "Citrico"},
    {nombre: "Manzana", tipo: "Pomacea"},
    {nombre: "Platano", tipo: "Tropical"},
    {nombre: "Uva", tipo: "Baya"},
    {nombre: "Fresa", tipo: "Baya"},
    {nombre: "Piña", tipo: "Tropical"},
    {nombre: "Mango", tipo: "Tropical"},
    {nombre: "Sandia", tipo: "Cucurbitacea"},
    {nombre: "Melon", tipo: "Curcurbitacea"},
    {nombre: "Cereza", tipo: "Drupa"},
    {nombre: "Pera", tipo: "Pomacea"},
    {nombre: "Durazno", tipo: "Drupa"},
    {nombre: "Kiwi", tipo: "Baya"},
    {nombre: "Limon", tipo: "Citrico"},
    {nombre: "Coco", tipo: "tropical"},
]

let citricos = []
let pomaceas = []
let tropicales = []
let bayas = []
let drupas = []
let cucurbitaceas = []

for(let i = 0; i < frutasConTipo.length; i++){
    if(frutasConTipo[i].tipo == "Citrico"){
        citricos++;
    }else if(frutasConTipo[i].tipo == "Pomacea"){
        pomaceas++;
    }else if(frutasConTipo[i].tipo == "Tropical"){
        tropicales++;
    }else if(frutasConTipo[i].tipo == "Baya"){
        bayas++;
    }else if(frutasConTipo[i].tipo == "Drupa"){
        drupas++;
    }else if(frutasConTipo[i].tipo == "Cucurbitacea"){
        cucurbitaceas++;
    }
}

console.log("Frutas citricas: " + citricos);
console.log("Frutas pomaceas: " + pomaceas);
console.log("Frutas tropicales: " + tropicales);
console.log("Frutas bayas: " + bayas);
console.log("Frutas drupas: " + drupas);
console.log("Frutas cucurbitaceas: " + cucurbitaceas);
