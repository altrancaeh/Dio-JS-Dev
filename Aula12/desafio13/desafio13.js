
/*
Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número ímpar.
Exemplo:
Entradas: 5, 3, 4, 1, 10, 8
Saídas: Maior número par: 10 / Menor número ímpar: 1
*/

const { gets, print } = require('./funcoes-auxiliares')

let maiorValorPar = 0
let menorValorImpar = 0
const n = gets()

for (let i = 0; i < n; i++) {
    const numero = gets()

    if (numero % 2 === 0) {
        if (numero > maiorValorPar) {
            maiorValorPar = numero
        } 
    } else {
            if (menorValorImpar === 0) {
                menorValorImpar = numero
            } else if (numero < menorValorImpar) {
                menorValorImpar = numero
            }
        }
    }


print(`Maior valor par: ${maiorValorPar}`)
print(`Menor valor ímpar: ${menorValorImpar}`)