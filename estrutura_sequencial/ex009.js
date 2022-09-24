//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

var mtsQuad=56, ltsTinta, latasTinta, preco

ltsTinta = mtsQuad/3
latasTinta = ltsTinta/18
preco = latasTinta*80
preco = preco.toLocaleString('pt-br',{minimumFractionDigits: 2})

console.log("Para o valor informado são necessarios:",latasTinta.toFixed(2),"Litros de tinta e custará:",preco,"R$!")