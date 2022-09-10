/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que , dado a quantidade de km e o preço do combustível, nos dê um valor 
gasto em reais para realizar este percurso.
*/

class Carros {
    modelo;
    marca;
    cor;
    consumoMedioKm;

    constructor(modelo, marca, cor, consumoMedioKm) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.consumoMedioKm = consumoMedioKm
    }

    calcularGasto(distKm, precoCombustivel) {
        return (distKm * this.consumoMedioKm) * precoCombustivel
    }
}

const uno = new Carros ('Fiat','Preto', 1/8.5 ) //aqui estou dizendo que faço 8.5 km/l, e estou dividindo para descobrir quantos L eu preciso para 1km

console.log(uno.calcularGasto(100, 4.5))

const palio = new Carros ('Fiat', 'Preto', 1/10)

console.log(palio.calcularGasto(100, 4.5))

const kicks = new Carros ('Kicks', 'Nissan', 'Prata', 1/8)

kicks.calcularGasto(100, 4.5)