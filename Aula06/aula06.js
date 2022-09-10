/*
Um objeto literal é um conjunto de dados dentro de uma chave. 
Podemos utilizar funções dentro de objetos, que são chamados de "método"
*/

const pessoa = {
    nome: 'Caeh Augusto Altran',
    idade: 30,
    altura: 1.72,

    descrever: function() {
    // ensinou sobre o uso da condição "this", que busca a referencial de dentro do objeto:
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

//Explicou sobre como puxar informações específicas direto do objeto:

pessoa.descrever = function (){
    console.log(`Meu nome é ${this.nome}`)
}

/* Explicou que podemos buscar informaçaões de forma mais dinâmica, através dos atributos do objeto, mesmo que eu não saiba o nome das variáveis.
ex: console.log(pessoa['altura'])
O mesmo vale se eu souber a variavel, exemplo:
console.log(pessoa.altura)
*/

console.log(pessoa['altura'])

/*
Comentou como podemos dinamizar o objeto de forma que possamos adicionar várias "pessoas" sem precisar recriar cada objeto individualmente
através da criação de uma classe.

classe é a definição do que deve ser o objeto
instância é uma ocorrência deste objeto
*/

class Pessoa {
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome, idade, altura) { // Comentou sobre ser o que acontece quando uma pessoa é instanciada. Qualquer nova instância precisará passar por aqui.
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.altura} e ${this.idade} anos. `)
    }
}

const caeh = new Pessoa() //Assim adicionamos uma nova variavel dentro da classe individualmente
caeh.nome = 'Caeh Augusto Altran'
caeh.idade = 30
caeh.altura = 1.72

const renan = new Pessoa()
renan.nome = 'Renan J Paula'
renan.idade = 30
renan.altura = 1.75

const marina = new Pessoa('Marina Ribeiro Rodrigues', 28, 1.54) // Aqui adicionamos uma nova pessoa depois de criar o constructor(nome, idade, altura) lá no objeto.

renan.descrever() // Aqui eu consigo imprimir todas as informações dentro da função sem digirar muito código.

console.log(marina)