let amigos = [];

function agregarAmigo(){
//capturar el valor del campo amigo
let nuevoAmigo = document.getElementById('amigo').value;

//validamos que no sea un espacio vacio
if(nuevoAmigo==""){
    alert("por favor ingrese un nombre");
    return;
}

//agregamos el amigo a la matriz
amigos.push(nuevoAmigo);

//limpiamos la caja de texto
document.getElementById('amigo').value = ""; 

mostrarLista();
}

function mostrarLista(){
//creamos la etiqueta    
let lista = document.getElementById("listaAmigos");

//borrar lista inexistente
lista.innerHTML = "";

//armar el array de amigos
for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}