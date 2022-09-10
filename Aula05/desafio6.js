/*
Elabore um algorítimo que calcuile o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
1 À vista no cartão de débito, recebe 10% de desconto;
2 À vista no dinheiro ou Pix, recebe 15% de desconto;
3 Em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

var valorProduto = 100
var formaPgto = 4

function aplicarDesconto(valorProduto, desconto) {
    return (valorProduto - (valorProduto * (desconto/100)))
}

function aplicarJuros(valorProduto, juros) {
    return (valorProduto + (valorProduto * (juros/100)))
}

if (formaPgto === 1) {
    console.log(aplicarDesconto(valorProduto, 10))
} else if (formaPgto === 2) {
    console.log(aplicarDesconto(valorProduto, 15))
} else if (formaPgto === 3) {
    console.log(valorProduto)
} else {
    console.log(aplicarJuros(valorProduto, 15))
}
