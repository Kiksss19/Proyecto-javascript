alert("Bienvenido")
let nota = prompt("Cual fue tu calificacion?")

if(nota > 0){
    if(nota < 60){
        alert("Reprobado")
    } else if(nota >= 60 && nota <= 74){
        alert("Suficiente")
    } else if(nota >= 75 && nota <= 89){
        alert("Bien")
    } else if(nota >= 90){
        alert("Excelente")
    }
} else{
    alert("La calificacion no es valida")
}


//objetos literales

let fruta 1= {
    nombre: "Manzana",
    color: "rojo",
}

let fruta 2= {
    nombre: "Plátano",
    color: "amarillo",
}

let frutasobjetos = [fruta1, fruta2];
console.log(frutasobjetos[0].color);
