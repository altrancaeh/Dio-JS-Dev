/*
O IMC - índice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma  pessoa adulta.
Fórmula do IMC:
IMC = peso / altura² (alturaa * altura)

Elabore um algorítimo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos, condição:
- Abaixo de 18.5: Abaixo do peso
- Entre  18.5 e 25: Peso normal
- Entre 25 e 30: Acima do peso
- Entre 30 e 40: Obeso
- Acima de 40: Obesidaded grave
*/

var peso = 80
var altura = 1.72      
var imc = (peso / (altura ** 2)).toFixed(2) // ou imc = peso / Math.pow(altura, 2)


console.log('Vamos calcular o IMC.')
console.log(`O peso do indivíduo é ${peso}Kg. Sua altura é ${altura}m.`)

if (imc < 18.5) {
    console.log(`O IMC é ${imc}. Está ABAIXO do peso.`)
} else if (imc >= 18.5 && imc <= 25) {
    console.log(`O IMC é ${imc}. Está com peso normal.`)
} else if (imc >= 25 && imc <= 30) {
    console.log(`O IMC é ${imc}. Está ACIMA do peso.`)
} else {
    console.log(`O IMC é ${imc}. Tem obesidade grave.`)
} 