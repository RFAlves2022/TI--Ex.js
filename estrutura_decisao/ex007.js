/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool:
até 20 litros, desconto de 3% por litro
acima de 20 litros, desconto de 5% por litro
Gasolina:
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro 
    Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90. */
function descontoCombustivel() {
    let litros = document.querySelector("#qtdLitros").value
    let select = document.querySelector("#tipoComb")
    let tipo = select.options[select.selectedIndex].value
    let valor, pInicial

    switch (tipo) {
        case "A":
            pInicial = 1.9

            if (litros <= 20) {
                valor = ( pInicial - (pInicial * 0.03)) * litros
            } else {
                valor = (pInicial - (pInicial * 0.05)) * litros
            }
            document.querySelector("#resultado").innerHTML = `<strong> O valor a ser pago: R$ ${valor.toFixed(2)}</strong>`
            break;

        case "G":
            pInicial = 2.5

            if (litros <= 20) {
                valor = (pInicial - (pInicial * 0.04)) * litros
            } else {
                valor = (pInicial - (pInicial * 0.06)) * litros
            }
            document.querySelector("#resultado").innerHTML = `<strong> O valor a ser pago: R$ ${valor.toFixed(2)}</strong>`
            break;
    }
}

