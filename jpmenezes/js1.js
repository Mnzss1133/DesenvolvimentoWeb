var primeira = 1;
let segunda = "casa";
const terceira =[1,2,"nada"];

let quarta;

console.log("primeira: " + primeira);

console.log("segunda: " +  segunda );
segunda = "banana";
console.log("segunda:" + segunda);

console.log("terceira: " + terceira );
terceira[12] = "terceira";
terceira.push("novo");
terceira.splice(2)
console.log("terceira:" + terceira);

console.log("quarta: " + quarta );
quarta = {
  primeira: 1,
  segunda: "tudo"
};
console.log("quarta.primeiro:" + quarta.primeira);

function uma_funcao(entrada){
  return entrada + 1;
}

console.log(uma_funcao(1));

const outra_funcao = function(entrada){
  return entrada + 2;
}

console.log(outra_funcao(1));

const mais_uma_funcao=(entrada)=> {
  return entrada + 3;
}

console.log(mais_uma_funcao(1));

const funcao_com_raiva = (entrada) => entrada + 4;

console.log(funcao_com_raiva(1));
