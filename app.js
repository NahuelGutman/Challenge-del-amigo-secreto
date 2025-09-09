const input = document.getElementById('amigo');
const amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById("resultado");


function agregarAmigo(){
    if(input.value === ""){
        alert("Ingresa un nombre para poder continuar")
    } else{
    amigos.push(input.value);
    listaAmigos.innerHTML += `<li>${input.value}</li>`;
    }
}

function sortearAmigo(){
    //const random = 
    const random = Math.floor((Math.random() * amigos.length));
    const amigoSecreto = amigos[random];
    resultado.innerHTML = `El amigo secreto es ${amigoSecreto}`
}


