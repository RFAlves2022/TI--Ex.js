//Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.

function informarNum(n){
    if(n%1==0){
        console.log("Inteiro!")
    }else{
        console.log("Decimal!")
    }
}

informarNum(1)