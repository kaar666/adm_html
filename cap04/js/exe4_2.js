function calcular(){
    const nome= document.getElementById("inNome").value;
    const masculino= document.getElementById("inMasculino").checked;
    const altura= document.getElementById("inAltura").value;

    let peso;

    if(masculino){
      peso = 22 * Math.pow(altura, 2)
    }else{
        peso = 21 * Math.pow(altura, 2)       
    }

    document.querySelector("h3").innerText = 'peso ideal ${peso.tofixed(2)}';
    
    alert()

    return false; //  vai impedir o refresh da pagina equivalente ao e.preventDefault()



}