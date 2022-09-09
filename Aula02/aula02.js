/*
Falou sobre os Tipos Primitivos: Boolean
Também falou sobre operadores aritiméticos: + - / * %
Falou da diferença entre =, == e ===. Disse que === é o que mais usamos. 
= serve para atribuição, == serve para "igual", mas este ignora o tipo da variável, fazendo uma conversão implícita entre os tipos, number, text etc.
=== serve para mostrar igualdade, sem a conversão implícita pois ele além de comparar a grandeza, também compara o tipo.
Executou testes de console para mostrar os valores booleanos.

Comentou sobre condições if, else e else if.

"!" no começo (operador de diferença), tranforma a variável no contrário dela. Legal!

Podemos trabalhar com quantos else if quisermos, mesmo ficando confuso pra ler. Tem sempre uma maneira mais limpa de pensar e criar.
Professor comentou sobre variáveis booleanas, de usar o "is" antes da variável, pra organiar o código
*/

const numero = 4;
const numeroDivisivelPor5 = (numero % 5) === 0;


if (numero === 0) { 
    console.log('O número é inválido')
    // isso abaixo é um tipo de negação, no caso "se não for par, é ímpar"
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
