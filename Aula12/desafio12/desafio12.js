
/*
    Fça um programa que receba a média de um aluno.
    caso a média seja < 5 imprima 'reprovado'
    caso a média seja >= 5 e < 7 imprima 'recuperação'
    caso a média seja >= 7 imprima aprovado

    exemplos
    entrada: 5.5
    saída: recuperação
*/

const {gets, print} = require('./funcoes-auxiliares')

let media = gets()

if (media < 5) {
    print('O aluno foi REPROVADO')
} else if (media >= 5 && media < 7) {
    print('O aluno está em RECUPERAÇÃO')
} else {
   print('O aluno foi APROVADO')
}