const conserto = require('./recup');

const prontos = conserto.filter(estado => estado.pronto === true);
const pendentes = conserto.filter(estado => estado.pronto === false);
 

function precoTotal(custo) {
    return custo.valores.reduce((valor1, valor2) => valor1 += valor2);
  }
  
const percorreArraySomando = prontos.map(precoTotal); //percorre as arrays de conserto somando os valores

 const listaFinaldosProntos = percorreArraySomando.map((soma, index ) => 
`Modelo: ${prontos[index].aparelho},
Itens Consertados: ${prontos[index].itensConsertados},
Valor total: ${soma}`);

  console.log(listaFinaldosProntos); 