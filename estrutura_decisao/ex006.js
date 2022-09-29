/*
Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
- par ou ímpar;
- positivo ou negativo;
- inteiro ou decimal.
*/

function verificaNum() {
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let select = document.querySelector("#operacao")
    let op = select.options[select.selectedIndex].value
    let resultado, parImpar, posNeg, intDec

    switch (op) {
        case "selecione":
            alert("Selecione uma operação!")
            break;
        case "+":
            resultado = parseFloat(n1) + parseFloat(n2)
            break;
        case "-":
            resultado = n1 - n2
            break;
        case "/":
            resultado = n1 / n2
            break;
        case "*":
            resultado = n1 * n2
            break;
    }

    if (resultado % 2 == 0) {
        parImpar = "Par"
    } else {
        parImpar = "Impar"
    }

    if (resultado >= 0) {
        posNeg = "Positivo"
    } else {
        posNeg = "Negativo"
    }

    if (resultado % 1 == 0) {
        intDec = "Inteiro"
    } else {
        intDec = "Decimal"
    }
    document.querySelector("#resultado").innerHTML = `<strong>Resultado: ${resultado.toFixed(2)}<br>Este número é:<br>${parImpar}<br>${posNeg}<br>${intDec}</strong>`
}