function CadastrarCliente() {

    let nome = document.querySelector("#nome").value
    if (nome.length < 3) {
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        return
    }else{
        document.querySelector("#erro-nome").innerHTML = ""
    }
    
}