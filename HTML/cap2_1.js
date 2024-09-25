// criaruma referencia ao form e ao h3(onde sera exibida a resposta)
const frm =document.querySelector("form");
const resp =document.querySelector("h3");

//cria um 'ouvinte' de evento,acionado quando o botão submit for clicado//
frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `olá ${nome}`; //exibe a resposta do programa 
    e.preventDefault(); // vai envitar que o form envio os dados pro destino.php
});
