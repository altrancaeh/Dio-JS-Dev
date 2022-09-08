console.log('Olá');

var preComb = 4.24
var gasto = 8.7
var dist = 150
var consumo = (dist / gasto) * preComb

console.log(`Vamos calcular quanto gastaremos ao percorrer uma distância de ${dist}Km, sabendo que nosso veículo percorre ${gasto}Km/l.`);
console.log(`Nosso custo de combustível para percorrer ${dist}km é de ${consumo.toFixed(2)} com o combustível a ${preComb} reais.`);