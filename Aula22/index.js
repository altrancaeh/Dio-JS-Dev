const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

promessaDaLeituraDoArquivo
.then((arquivo) => arquivo.toString('utf-8'))
.then((texto) => console.log(texto))
.catch((error) => console.log('deu ruim!', error))