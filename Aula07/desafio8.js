/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = Peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg e 1.75 de altura
e peça para josé dizer o valor do seu IMC.
imc = (peso / (altura ** 2)).toFixed(2) // ou imc = peso / Math.pow(altura, 2)
*/ 

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / (this.altura ** 2)
    }

    classificarImc() {
    const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso'
        } else if (imc >= 30 && imc < 40) {
            return 'Obesidade'
        } else {
            return 'Obesidade Grave'
        }
    }
}

const caeh = new Pessoa ('Caeh Augusto', 78, 1.72)

console.log(caeh.calcularImc())

const jose = new Pessoa ('José', 70, 1.75)

console.log(jose.calcularImc())

console.log(jose.classificarImc())