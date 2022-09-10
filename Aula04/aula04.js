// Explicando sobre funções.

/*
function incrementarJuros (valor, percentualJuros) { // cria as variáveis direto na função, como base? Legal.
    const valorAcressimo = (percentualJuros / 100) * valor //Cria a fórmula
    return valor + valorAcressimo
}

console.log(incrementarJuros(100, 20)) // preenche o valor com 100 e o percentual, com 20
*/

/* Explícando sobre organização de código. 
Falou sobre criar uma função main () e dentro dela adicionar as demais funções:
 function calcularJuros(){

}

function main () {
    console.log('Programa Principal')
    calcularJuros()
}

*/

/* Transformando o desafio4.js em funções: 
Muito foda. Ele criou funções automáticas para retornar os valores e deixou apenas 
as variáveis de peso e altura para serem alteradas, ambos separados cada um em sua função.

a funçãoa calcularImc recebe as variaveis peso e altura e retornam o calculo
peso / math.pow (que retorna a base elevada ao expoente 2, no caso a altura ao quadrado)
aqui, já temos o IMC calculado em 1 linha.

a função classificarImc(imc) recebe na função a nova variavel imc, que receberá o resultado
da função anterior, calcularImc(peso, altura).

Ainda, a função classificarImc(imc) retorna as mensagens baseadas no if e else if igual no 
desafio anterior, mas tudo em função.

tudo o que sobra para imprimir é atribuir a funcao imc a uma variavel:
const imc = calcularImc(peso, altura) e imprimir na tela a classificação, conforme
as opções no console.log(classificarImc(imc)). Todo o cáclulo é feito nessa linha. maneiro.


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}  

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

const peso = 75
const altura = 1.75

const imc = calcularImc(peso, altura)
console.log(classificarImc(imc))
*/
/* Colocando tudo isso dentro da function main: */
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}  

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

function main() {
    const peso = 75
    const altura = 1.75

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))

}

main(); //aqui eu aviso ao terminal apenas para imprimir a função main, que é tudo aquilo acima.

// Falou sobre a função imediatamente invocada, ao colocara a função main entre parentesis e fechar depois da chave, ()



