const aluno = require('./aluno');

const bruno = new aluno.adicionarAluno('Bruno', 2, [7, 7, 7]);
aluno.aumentarFaltas(bruno);

const jair = new aluno.adicionarAluno('Jair', 1, [8, 8, 8]);
aluno.aumentarFaltas(jair);


module.exports = {
 bruno,
 jair, 
}