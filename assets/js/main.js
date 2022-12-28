function printMensagem(msg, tipo) {
    const campoMensagem = document.querySelector("#campoMensagem");

    if (!tipo) {
        campoMensagem.classList.add("negativo");
        campoMensagem.classList.remove("positivo");
    } else if (tipo) {
        campoMensagem.classList.add("positivo");
        campoMensagem.classList.remove("negativo");
    } else {
        campoMensagem.classList.remove("negativo");
        campoMensagem.classList.remove("positivo");
    }

    campoMensagem.innerHTML = msg;
}

function verificaCampos(peso, altura) {
    if (!peso || peso === 0) {
        return { msg: "Peso inválido", tipo: false };
    } else if (!altura || altura === 0) {
        return { msg: "Altura inválida", tipo: false };
    } else if (peso <= altura) {
        return { msg: "Campos inválidos", tipo: false };
    } else {
        return { msg: "", tipo: true };
    }
}

function getIMCMensagem(imc) {
    if (imc >= 40) return "Obesidade grau 3";
    if (imc >= 35) return "Obesidade grau 2";
    if (imc >= 30) return "Obesidade grau 1";
    if (imc >= 25) return "Sobrepeso";
    if (imc >= 18.5) return "Peso normal";
    if (imc < 18.5) return "Abaixo do peso";
}

function getIMCValue(peso, altura) {
    return (peso / (altura * altura)).toFixed(1);
}

function main() {
    const calculadoraIMC = document.querySelector("#calculadoraIMC");

    calculadoraIMC.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const camposIsValid = verificaCampos(peso, altura);

        if (camposIsValid.tipo) {
            const imc = getIMCValue(peso, altura);
            const imcMensagem = getIMCMensagem(imc);
            printMensagem(`Seu IMC é ${imc} (${imcMensagem})`, true);
        } else {
            printMensagem(camposIsValid.msg, camposIsValid.tipo);
        }
    });
}

main();