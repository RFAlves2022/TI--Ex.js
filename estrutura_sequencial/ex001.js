//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

function calculaMedia(){
    console.log("aaaaa")
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let n3 = document.querySelector("#n3").value
    let n4 = document.querySelector("#n4").value
    let media = (n1+n2+n3+n3)/4
    document.querySelector("#resultado").innerHTML = `<strong>A sua média é: ${media} </strong>`
}
