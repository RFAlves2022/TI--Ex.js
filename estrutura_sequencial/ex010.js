//Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

function download() {
    let tamanho = document.querySelector("#tamanhoArquivo").value
    let velocidade = document.querySelector("#velicidadeInternet").value
    let tempoDownload = (tamanho / (velocidade / 8)) / 60
    document.querySelector("#resultado").innerHTML = `<strong> O arquivo vai demorar ${tempoDownload.toFixed(2)} minutos</strong>`
}



//Tamanho do arquivo em megabytes / (velocidade de download em megabits / 8) = tempo em segundos
