//variable con id amigo del html
let input = document.getElementById('amigo'); 
//varibale que contendra la lista de amigos
let amigos = []; 
//variable de la lista que contiene id de listaAmigos del html
let listaAmigos = document.getElementById('listaAmigos');
//variable de la lista que contiene id de resultado del html
let resultado = document.getElementById("resultado");
//funcion para agregar el amigo con Enter.
document.getElementById("amigo").addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        agregarAmigo();
    }
});
//funcion agregar texto a un elemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//funcion para agregarAmigo unida al html.
function agregarAmigo(){
    //if para que se deba escribir unicamente y no agregar espacios vacios.
    if(input.value === ""){
        asignarTextoElemento('alert', 'Ingresa un nombre valido.');
    }
    else{
    //metodo para poder ingresar los amigos escritos a la lista nuestra.
        asignarTextoElemento('alert', 'Escriba el nombre de sus amigos');
    amigos.push(input.value);
    listaAmigos.innerHTML += `<li> 👤 ${input.value}</li>`;
    document.getElementById("amigo").value = '';
    }
}
//funcion para sortear el amigo unida al html.
function sortearAmigo(){
//metodo matematico unido a una variable que elige un numero al azar de la lista por su indice mediante length. 
    let random = Math.floor((Math.random() * amigos.length));
//variable para determinar quien es el amigoSecreto y asi imprimir en pantalla.
    let amigoSecreto = amigos[random];

    if (amigos.length <= 1){
        resultado.innerHTML = 'Debe agregar al menos 2 nombres a la lista.'
    }
    else {
            resultado.innerHTML = `El amigo secreto es: "${amigoSecreto}"`
    }
}
