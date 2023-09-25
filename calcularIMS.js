function calcularImc() {
    const peso = parseFloat(document.getElementById("ipeso").value);
    const altura = parseFloat(document.getElementById("ialtura").value);

    if (isNaN(peso) || isNaN(altura)) {
        return; // Sai da função se os valores não forem válidos
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.50) {
        document.getElementById("descricao").innerHTML = "Abaixo do peso."
    } else if (imc < 24.99) {
        document.getElementById("descricao").innerHTML = "Peso saudável."
    } else if (imc < 29.99) {
        document.getElementById("descricao").innerHTML = "Sobrepeso."
    } else if (imc < 34.99) {
        document.getElementById("descricao").innerHTML = "Obesidade grau 1 (leve)."
    } else if (imc < 39.99) {
        document.getElementById("descricao").innerHTML = "Obesidade grau 2 (moderada)."
    } else {
        document.getElementById("descricao").innerHTML = "Obesidade grau 3 (grave)."
    }

    document.getElementById("resultadoImc").innerHTML = imc;
}

const botao = document.getElementById("calcularBotao");
botao.addEventListener("click", calcularImc);
