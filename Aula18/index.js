/*
function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}


//ISSO
const caeh = new Pessoa('Caeh', 30)

//É O MESMO QUE ISSO

const caeh = {
    genero: 'masculino'
}

Pessoa.call(caeh, 'nome', 30)

caeh.falar()
*/

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()