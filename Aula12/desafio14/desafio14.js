
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

let salarioBruto = gets(0)
let benefícios = gets(1)


function calcularSalario() {
    if (salarioBruto <= 1100) {
        salarioBruto = (salarioBruto - (salarioBruto * 0.05))
        return salarioBruto + benefícios
    } else if(salarioBruto > 1100.01 || salarioBruto <= 2500) {
        salarioBruto = (salarioBruto - (salarioBruto * 0.1))
        return salarioBruto + benefícios
    } else {
        salarioBruto = (salarioBruto - (salarioBruto * 0.15))
        return salarioBruto + benefícios
    }
}

print(`O salário é ${(calcularSalario().toFixed(2))}`)


