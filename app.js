let amigos = [];

function agregarAmigo(){
//capturar el valor del campo amigo
let nuevoAmigo = document.getElementById('amigo').value;

//validamos que no sea un espacio vacio
if(nuevoAmigo==""){
    alert("por favor ingrese un nombre");
    return;
}

//agregamos a la matriz
amigos.push(nuevoAmigo);
 alert("Agregado: " + nuevoAmigo);

//limpiamos la caja de texto
document.getElementById('amigo').value = ""; 


}