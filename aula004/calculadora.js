function somar() {
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let conta = parseFloat(n1) + parseFloat(n2)
    document.querySelector("#resultado").innerHTML = `<strong>${conta}</strong>`
}

function subtrair() {
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let conta = n1 - n2
    document.querySelector("#resultado").innerHTML = `<strong>${conta}</strong>`
}

function multiplicar() {
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let conta = n1 * n2
    document.querySelector("#resultado").innerHTML = `<strong>${conta}</strong>`
}

function dividir() {
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let conta = n1 / n2
    document.querySelector("#resultado").innerHTML = `<strong>${conta}</strong>`
}
