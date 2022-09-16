/*
Manipulação de listas

/////////forEach():
A mais essencial. É uma forma de percorrer uma lista orientada a funções. Ela recebe 
como parâmetro um callback que exige um value, um index e um array.

const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

/////////filter(): Recebe uma função que retorna um booleano. Se for true, fica na lista. 
Se não for, some da lista.

const listaDeNumerosPares = [1,2,3,4,5,6,7,8,9,10]

listaDeNumerosPares.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)

/////////Map: basicamente transforma um objeto em outro, inclusive html.

class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Marcos'), new Pessoa ('José')]

const listaNomes = lista.map((element) => {
    return element.name
})

console.log(listaNomes)

/////////Reduce: redeuz a lista para um único elemento.

const lista = [1,2,3,4,5,6,7,8,9,10]

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
})

console.log(somaDeTodosOsNumeros)

/////////Join e combinação de funções de manipulação:
Join junta os elementos em string, com o simbolo de demarcação que escolhermos

const lista = [1,2,3]

console.log(lista.join(';'))

retorna em 1;2;3

*/

const lista = [{nome: 'Renan'}, {nome: 'Andressa'}, {nome: 'Vitor'}, {nome: 'Amanda'}]

console.log(
    lista.map(e=> e.nome)
.filter((e) => e.startsWith('A'))
.join(';')
)


