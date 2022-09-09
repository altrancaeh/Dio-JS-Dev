/*
1) Faça um algorítimo que dado as 3 notasa tiradas por um aluno em um semestra da faculdade e imprima a sua média e sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado;
*/

console.log(`Vamos iniciar o desafio 3.`)

var nota1 = 8
var nota2 = 10
var nota3 = 4.5
var media = (nota1 + nota2 + nota3) / 3

console.log(`As notas atribuídas foram ${nota1}, ${nota2} e ${nota3} respectivamente.`)
console.log(`A média das notas é ${media.toFixed(2)}`)

if (media < 5) {
    console.log('O aluno foi REPROVADO')
} else if (media >= 5 && media <= 7) {
    console.log('O aluno está em RECUPERAÇÃO')
} else {
    console.log ('O aluno foi APROVADO')
}