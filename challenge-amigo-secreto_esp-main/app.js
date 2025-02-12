// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];
let totalAmigos = 0;
let numeroSorteado = 0;
let amigoIngresado = "";
 
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
        
    if (amigoIngresado == "") {
        alert('El nombre no puede estar vacio');
        document.getElementById('amigo').focus();
        return;
    }
    
    nombresAmigos.push(amigoIngresado);
 
    // Aqui es donde deberia mostrar uno debajo del otro, pero no encuentro la forma!!!
    let elementoHTML = document.querySelector('ul');
    elementoHTML.innerHTML = nombresAmigos[totalAmigos];


    totalAmigos++;
    
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();

}

function sortearAmigo(){

console.log(totalAmigos);

    if (totalAmigos == 0) {
        let elementoHTML = document.querySelector('ul');
        elementoHTML.innerHTML = "Debe ingresar al menos un amigo";
        }
        else {
            let numeroSorteado=Math.floor(Math.random()*totalAmigos)+1;
            let elementoHTML = document.querySelector('ul');
            elementoHTML.innerHTML = 'El amigo sorteado es ' + nombresAmigos[numeroSorteado-1];
            reiniciarJuego();
            }
    }


// Esta es una de las posibles maneras de finalizar el juego 

function reiniciarJuego(){
    nombresAmigos.length = 0;
    let elementoHTML = document.querySelector('ul');
    elementoHTML.innerHTML.value = "";
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
    amigoIngresado = "";
    totalAmigos = 0;
}
