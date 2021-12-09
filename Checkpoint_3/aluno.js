const aluno = {
    nome: '',
    qtdFaltas: 0,
    notas: [],
    adicionarAluno: function(nome, faltas, notas) {
        this.nome = nome;
        this.qtdFaltas = faltas;
        this.notas = notas;
    },
    calcularMedia: function(aluno) {
        let total = 0;

        aluno.notas.forEach(nota => {
            total += nota;
        });

        return total/aluno.notas.length;
    },
    aumentarFaltas: function(aluno) {
        aluno.qtdFaltas++;
    }
}

module.exports = aluno;