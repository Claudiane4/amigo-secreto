let lista = [];
let amigos = [];

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoTela('h2','Digite o nome de 10 amigos');

function sortearAmigo(){
   
}

function adicionarAmigo(){
    let campo = document.querySelector('input').value;
    if(campo != '' ){
        amigos.push(campo);
    } else {
        alert('Por favor, insira um nome'); 
    }
    limparCampo();
    adicionaLista();
}


function adicionaLista(){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let nome = amigos[i];
        let el = document.createElement('li');
        el.appendChild(document.createTextNode(nome));
        lista.appendChild(el);
    }
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}