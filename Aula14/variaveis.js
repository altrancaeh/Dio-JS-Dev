// Variáveis são case-sensitive 
/* 
Entendendo Hoisting (içamento)
A ordem de declaração importa para uma linguagem procedural. No JS, certas ordens de declaração são influenciadas pelo hoisting, porque ele iça tudo que foi declarado
e joga para o começo do arquivo.

VAR



CONST


LET


*/

if (true) {
    var passouPorAqui = 'SIM';
}

console.log(passouPorAqui);