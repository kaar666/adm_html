const frm = document.querySelector("form");
const response = document.querySelector("h3"); 

frm.addEventListener("submit", (e) => {
    //  veja se e impar 
    //   ou 
    //  veja se e par
    // 1 = leia o numero
    // 2 = analise os
    // se par = divisivel por 2, se não for par é impar

    const numero = Number(frm.inNum.value);

    if(numero % 2 == 0){
        // é par
        // escrever retorno 
        response.innerText = `O número ${numero} é par!`;
    }
    else{
        // é impar
        // escrever retorno
        response.innerText = `O número ${numero} é impar!`;
    }
    e.preventDefault();
})