const pessoa = {
    idade: 18
}

const caeh = {
    nome: 'Caeh',
    idade: 30,
    __proto__: pessoa
}

console.log(caeh.idade)

// Se houver o atributo dentro da classe principal, o programa não terá motivos de buscar no __proto__