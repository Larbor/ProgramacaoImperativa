const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: 'Front End I',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [
        estudantes.bruno,
        estudantes.jair
    ],
    adicionarAluno: function(nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.adicionarAluno(nome, faltas, notas));
    },
    aprovacao: function(estudante) {
        const media = aluno.calcularMedia(estudante);

        if (
            media >= this.notaAprovacao &&
            estudante.qtdFaltas < this.faltasMaximas
        ) {
            return 'Aprovado';
        } else if (
            estudante.qtdFaltas === this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {
            return 'Aprovado';
        } else {
            return 'Reprovado';
        }
    },
    listaAprovados: function() {
        let lista = [];

        this.listaEstudantes.forEach(estudante => {
            lista.push(this.aprovacao(estudante));
        });

        return lista;
    }
}



const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});


