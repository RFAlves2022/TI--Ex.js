

let nome = prompt("Informe seu nome:")
while(nome.length<=3){
    nome = prompt("Informe seu nome:")
}
let idade = prompt("Informe sua idade:")
while(idade <0 || idade>150){
    idade = prompt("Informe sua idade:")
}
let salario = prompt("Informe seu salario")
while(salario<=0){
    salario = prompt("Informe seu salario")
}
let sexo = prompt("Informe o sexo (F ou M)")
while(sexo!= "f" && sexo!="m"){
    sexo = prompt("Informe o sexo (F ou M)")
}
let estadoCivil = prompt("Informe o estado civil (S-solteiro, C-casado, V-viúvo, D- divorciado)")
while(estadoCivil!='S' && estadoCivil!='C' && estadoCivil!='V' && estadoCivil!='D'){
    estadoCivil = prompt("Informe o estado civil (S-solteiro, C-casado, V-viúvo, D- divorciado)") 
}