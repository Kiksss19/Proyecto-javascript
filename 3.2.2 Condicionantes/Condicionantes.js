
alert("Hola mundo");

let edad = 18;
let traeine = true;
let deseo = "batman";

// no es necesario comparar booleanos (!TraeIne == no trae ine)
edad >= 18 && traeine

if(edad >= 18 && traeine){
    alert("Puedes entrar al cine");

    if( deseo == "Spiderman"){
        alert("Veras tu pelicula deseada");
    }else{
        alert("Veras otra pelicula");
    } 
    
}else if(edad >= 18 && !traeine){
    alert("Muestrame una foto de tu Ine para entrar")
    
} else{
    alert("No puedes entrar al cine");
    }

