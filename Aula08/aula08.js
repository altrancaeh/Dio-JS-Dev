/*
Introdução aos arrays/vetores e sua numeração (começando do 0). Podemos adicionar vários tipos (string, number, etc.). O tamanho da lista é dinâmico.
*/

const alunos = ['João', 'Vitor','Marina']
alunos.push('Renan') // para adicionar um novo item a última posição da lista
alunos[3] = 'Vinicius' // adiciona um item em um espaço específico. Consigo também substituir um item no caso do espaço já ter sido preenchido.

console.log(alunos)

alunos.pop() // retira o último item da lista.

console.log(alunos)

console.log(alunos.length) //mostra o tamanho da lista.


/*
Introdução ao FOR e as estruturas de repetição.
*/

const nome = 'Caeh Augusto Altran'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i]
    console.log(letra)
}
