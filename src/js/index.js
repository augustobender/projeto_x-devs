/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrara o proximo cartao da lista
- passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
- passo 2 - dar um jeito de identificar o clique do usuario na seta avancar
- passo 3 - fazer aparecer o proximo cartao da lista
- passo 4 - buscar o cartao que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartao anterior da lista
- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
- passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
- passo 3 - fazer aparecer o cartao anterior da lista
- passo 4 - buscar o cartao que esta selecionado e esconder
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function (){

    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimoCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener("click", function () {

    const ehprimeiroCartao = cartaoAtual === 0
    if(ehprimeiroCartao) return;
    
   esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
};

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");   
};

