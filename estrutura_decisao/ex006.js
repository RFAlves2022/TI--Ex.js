/*
Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
- par ou ímpar;
- positivo ou negativo;
- inteiro ou decimal.
*/

function verificaNum(n1, n2, op) {
    var resultado
    if (op == '+')
        resultado = n1 + n2
    if (op == '-')
        resultado = n1 - n2
    if (op == '/')
        resultado = n1 / n2
    if (op == '*')
        resultado = n1 * n2

    console.log("Resultado =", resultado,)
    console.log("Este numero é:")

    if (resultado % 2 == 0) {
        console.log("- Par.")
    } else {
        console.log("- Impar.")
    }

    if (resultado >= 0) {
        console.log("- Positivo")
    } else {
        console.log("- Negativo")
    }

    if (resultado % 1 == 0) {
        console.log("- Inteiro!")
    } else {
        console.log("- Decimal!")
    }
}

verificaNum(2, 5.5, '*')