console.log ("hola");

alert("Bienvenido a tu contador de libros, para terminar tu lista escribe 'fin'")

let leidos = [];

function agregarLibro(){
    while(leidos[leidos.length -1] != "fin"){
    let libros = prompt("Que libros has leido? (Recuerda escribir 'fin' para terminar la lista)");
    leidos.push(libros);
    }
}

function mostrarLibrosLeidos(){
    alert("Libros leidos: " + leidos);
}

agregarLibro()
mostrarLibrosLeidos()

