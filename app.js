
let lista = [];
let amigos = [];

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoTela('h2','Digite o nome de amigos');

function sortearAmigo(){
   if(amigos.length < 1){
     alert('Não há nomes na lista');
   }else{
        let indiceAleatorio = parseInt(Math.random() * amigos.length + 1);
        let amigoAleatorio = amigos[indiceAleatorio];
        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML = amigoAleatorio;
   }
}

function adicionarAmigo(){
    let campo = document.querySelector('input').value;
    validarEntrada(campo, amigos);
    limparCampo();
    adicionaLista();
}
function validarEntrada(entrada, nomeamigo){
    if(entrada == ''){
        alert('Por favor, insira um nome');
    }else {
            nomeamigo.push(entrada.trimStart());
    }
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