console.log('Início do Desafio 2.')

var etanol = 4.32
var gasolina = 6.99
var consumoKmPorEtanol = 8.7
var consumoKmPorGasolina = 12.5
var dist = 150
var gastoComEtanol = (dist / consumoKmPorEtanol) * etanol
var gastoComGasolina = (dist / consumoKmPorGasolina) * gasolina
var porcentagemGasolina = gasolina * 0.7


console.log(`Vamos calcular quanto gastaremos ao percorrer uma distância de ${dist}Km.`);
console.log(`Sabemos que nosso veículo percorre ${consumoKmPorEtanol} Km/l de Etanol e ${consumoKmPorGasolina} Km/l de Gasolina.`);

console.log(`Se a viagem de ${dist}Km for com Etanol, o gasto será de R$${gastoComEtanol.toFixed(2)}. Se formos com Gasolina, será de R$${gastoComGasolina.toFixed(2)}.`);
console.log(`Qual compensa mais? Como o Etanol costuma durar 30% a menos que a gasolina, para que o Etanol valha a pena, precisa ter seu valor menor que 70% do valor da Gasolina. Vamos calcular.`);
console.log(`O preço do Etanol está ${etanol} e o da gasolina está ${gasolina}`)
console.log(`70% do preço da Gasolina é R$${porcentagemGasolina.toFixed(2)}. O valor atual do Etanol é ${etanol}`)
if (porcentagemGasolina > etanol) {
    console.log('Abasteça com Etanol')
} else {
    console.log('Abasteça com Gasolina')
}

