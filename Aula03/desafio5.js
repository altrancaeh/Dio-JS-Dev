/*
Elabore um algorítimo que calcuile o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
1 À vista no cartão de débito, recebe 10% de desconto;
2 À vista no dinheiro ou Pix, recebe 15% de desconto;
3 Em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

console.log('Vamos almoçarrr? Início do desafio 5.')

/*
// var valorProduto = console.prompt(`Qual o valor do produto?`)
//var formaPgto = console.prompt(`Qual a forma de pagamento?`)
var valorProduto = 100
var pgtoDebito = valorProduto - (valorProduto * 0.1)
var pgtoDinheiro = valorProduto - (valorProduto * 0.15)
var pgtoCredito = valorProduto
var pgtoPrazo = valorProduto + (valorProduto * 0.1)

console.log(`O valor do produto é ${valorProduto}`)
console.log(`Pagamento via Cartão de Débito, 10% de desconto: R$${pgtoDebito}`)
console.log(`Pagamento via Dinheiro o Pix, 15% de deconto: R$${pgtoDinheiro}`)
console.log(`Pagamento via Crédito até 2x, sem adição de juros: R$${pgtoCredito}`)
console.log(`Pagamento parcelado acima de 2x, 10% de juros: R$${pgtoPrazo}`)
*/
/*  Execução do prof abaixo. Mesma coisa, porém devemos mudar a forma de pagamento manualmente na var formaPgto.
No meu caso acima, apenas imprimi todas as formas de pagamento de uma só vez, para apenas mudar o preço do produto.
Mas é bom treinar IF e ELSE para fixar melhor as coisas.
*/

var valorProduto = 100
var formaPgto = 4
if (formaPgto === 1) {
    console.log(valorProduto - (valorProduto * 0.1))
} else if (formaPgto === 2) {
    console.log(valorProduto - (valorProduto * 0.15))
} else if (formaPgto === 3) {
    console.log(valorProduto)
} else {
    console.log(valorProduto + (valorProduto * 0.1))
}
