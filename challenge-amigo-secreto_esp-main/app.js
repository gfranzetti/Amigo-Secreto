// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];
let totalAmigos = 0;

// console.log(amigo1);


function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    nombresAmigos.push(amigoIngresado);
    
    console.log(amigoIngresado);
    console.log(nombresAmigos[totalAmigos]);
    
    totalAmigos++;
    console.log(totalAmigos);

    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();


}

function sortearAmigo(){
    let numeroSorteado=Math.floor(Math.random()*totalAmigos)+1;
    console.log(numeroSorteado);
    console.log('El amigo sorteado es ' + nombresAmigos[numeroSorteado-1]);
    
}



