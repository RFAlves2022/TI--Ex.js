//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

function areaTinta(){
  let mtsQuad =  document.querySelector("#area").value
  let ltsTinta = mtsQuad/3
  let latasTinta = ltsTinta/18
  let preco = latasTinta*80
  document.querySelector("#resultado").innerHTML = `<br>Será nescessario<strong> ${latasTinta.toFixed(2)}</strong> latas de tinta e custará<strong> ${preco.toFixed(2)}</strong> R$.`
}