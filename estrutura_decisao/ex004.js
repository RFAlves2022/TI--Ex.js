//Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

function parImpar(n){
    n = parseInt(n)
    if(n%2==0){
        console.log("O número informado é par.")
    }else{
        console.log("O número informado é impar.")
    }
}

parImpar(6.5)