

/* NO JS, a herança é feita pelo protótipo, é como se fosse a base para o objeto, alguém 
no qual o objeto que estamos lidando está se baseando:

const pessoa = {
    genero: 'Masculino'
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa  
}

console.log(renan.genero)
*/


/*
o log vai puxar o gênero primeiro na chave do Renan, se não o encontrar ele vai 
seguir o __proto__, na chave pessoa e seguir em busca do atributo solicitado.
*/

/*
Funções construtoras possuem sintaxe de função convencional, porém com a primeira letra
maíscula. As funções no JS tem o poder de serem invocados pelo operador new.

// ISSO AQUI:

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

// É IGUAL A ISSO:

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

*/