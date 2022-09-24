/*
Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/
function mediaEscolar(n1,n2,n3){
    let media = (n1+n2+n3)/3
    if(media == 10){
        console.log("APROVADO com Distinção! Sua média foi:",media) 
    }else if(media>=7){
        console.log("APROVADO! Sua média foi:",media) 
    }else{
        console.log("REPROVADO! Sua média foi:",media) 
    }
}   

mediaEscolar(5,5,7)