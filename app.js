let amigos = [];

function adicionarAmigo(){
    let campo = document.querySelector('input').value;
    if(campo == ''){
        alert('Por favor, insira um nome');
    } else {
        amigos.push(campo);
        console.log(campo);
    }
    limparCampo();
}
function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

