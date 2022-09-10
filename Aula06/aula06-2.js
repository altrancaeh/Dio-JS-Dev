// Exemplo mais limpo para explicar como podemos trabalhar funções usando as informações dos objetos criados, resultando em um código mais limpo.

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

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é maias velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const caeh = new Pessoa('Caeh Augusto', 30, 1.75)
const marina = new Pessoa('Marina Ribeiro', 29, 1.54)

compararPessoa(caeh, marina)