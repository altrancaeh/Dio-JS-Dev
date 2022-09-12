
/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calcula da seguinda maneira:
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios.
Para calcular o percentual dos impostos, siga as alíquotas:
    De R$ 0.00 a R$1100.00 = 5.00%
    De R$1100.01 a R$2500.00 = 10.00%
    Acima de R$$2500.01 = 15.00%

    Exemplo: 
        Entrada:   
            2000 (salário bruto)
            250 (benefícios)
        Saída:
            2050.00
*/

const { gets, print } = require('./funcoes-auxiliares')

let salarioBruto = gets()
let beneficios = gets()


function calcularAliquota(valor, percentual) {
   return valor * (percentual/100)
}

function pegarAliquotaComBaseNoSalario(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

let aliquotaSalario = pegarAliquotaComBaseNoSalario(salarioBruto)
let valorImposto = calcularAliquota(salarioBruto, aliquotaSalario)
let salarioLiquido = salarioBruto - valorImposto + beneficios

print(salarioLiquido)
