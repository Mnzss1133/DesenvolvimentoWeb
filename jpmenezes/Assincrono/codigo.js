const url = "https://botafogo-atletas.mange.li";
const numero_jogador = 54;


const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;

}

pegar_coisas(`${url}/${numero_jogador}`).then(
    (entrada) => console.log(entrada)
);

console.log("assíncrono");