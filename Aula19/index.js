/*
Lembrando que funções no JS podem atribuir variáveis.

function nomeDaFuncao() {   > isso é uma declaração de função

}

const nomeDeOutraFuncao = function () { > isso é uma expressão de função

}

São as mesmasa coisas. Porém a grande diferença entre elas é a questão do hoisting. 
Com a função declarada, as declarações são jogadas pra cima. Já na função declarada, 
sua variável sobe, mas sua expressão não sofre o hoisting.

Se aprofundar na pesquisa de hoisting.

Declaração explícita e arrow function:

literal:
function funcao1() {

}

expressão:
const funcao2 = function () {

}

mas também podemos fazer uma função expressa com arrow function:

const funcao2 = () => {

}

a diferença entre as funções 1 e 2 é que a arrow function não tem o .this, 
não tem o contexto isolado como na função sem arrow function.

Closures ou Fechamentos:

function soma(x) {
    return function(y) {
        return x + y
    }
}

console.log(soma(10)(20))

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

Invocação Direta, Call, Apply e Operador New:

function teste() {
    console.log('teste')
}

teste() > invocação direta


const pessoa = {
    nome: 'Caeh',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olá']) > Com o apply, estou executando a função dentro do contexto pessoa,
e executando os parâmetros 'olá'

gritar.call(pessoa, 'Olá') > mesmo pensamento.

new 

*/


