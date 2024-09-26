// criaruma referencia ao form e ao h3(onde sera exibida a resposta)
const frm =document.querySelector("form");
const resp =document.querySelector("h3");

//cria um 'ouvinte' de evento,acionado quando o botão submit for clicado//
frm.addEventListener("submit",executar);

function executar(evento) {
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerHTML = `ola <i>${nome}</i>`;
    evento.preventDefault();
}
