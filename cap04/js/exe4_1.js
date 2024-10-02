const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    //alert(nome)
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    //alert(media.toFixed(2));

    //se media>= 7 então "aprovado" senão "reprovado"
    //alert(media >= 7);
    if (media >= 7) {
        alert("aprovado");
        //alert(aprovado)
        resp2.innerText = `parabéns ${nome}! você foi abençoado!`;
        resp2.style.color = "blue";
    } else {
        alert("reprovado");
        resp2.innerText = `ops ${nome}! você foi aniquilado!`;
        resp2.style.color = "red";
        //alert(reprovado)
    }
})