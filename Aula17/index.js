const pessoa = {
    genero: 'Masculino'
}


// Isso:
/*
    const caeh = {
        nome: 'Caeh',
        __proto__: pessoa
    }

// É o mesmo que isso:

const caeh = Object.create(pessoa)

caeh.nome = 'Caeh'

console.log(caeh)

*/