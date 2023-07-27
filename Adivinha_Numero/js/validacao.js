const capivaraImg = document.getElementById("capivara-img");

function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  function chuteInvalido(numero) {
    return Number.isNaN(numero);
  }

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido, isso não é um número!!!!</div>
      <span class="box">${chute}</span>
    `;
  }
  if (numeroDiferente(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>
      <span class="box">${chute}</span>
    `;
  }
  if (numero === numeroSecreto) {
    buscarGifAleatorio(); 
    document.body.innerHTML = `
            <h3>Parabéns! Você acertou!!!</h3>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <div id="gifContainer" class="gif"></div>
            <button id="jogar-novamente" class="btn-jogar"> Jogar novamente <i class="fa-solid fa-rotate-right fa-spin"></i> </button>
  `;
  const botaoJogarNovamente = document.getElementById("jogar-novamente");
  botaoJogarNovamente.addEventListener("click", reiniciarJogo);
    
  }else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
} else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}
const distancia = Math.abs(chute - numeroSecreto);
if (distancia <= 10) {
  capivaraImg.src = "../images/feliz.png";
  capivaraImg.alt = "Capivara feliz";
} else {
  capivaraImg.src = "../images/rindo.png";
  capivaraImg.alt = "Capivara triste";
}
if (chute.toLowerCase() == "game over") {
  document.body.innerHTML = 
  `
  <h3>Game Over!!!</h3>
  <h2>Não fique triste você pode tentar de novo...</h2>
  <img src="../images/amor.png" alt="" class="tela__imagem" id="capivara-img">
  
  <button id="jogar-novamente" class="btn-jogar"> Jogar novamente <i class="fa-solid fa-rotate-right fa-spin"></i> </button>
  `
  const botaoJogarNovamente = document.getElementById("jogar-novamente");
  botaoJogarNovamente.addEventListener("click", reiniciarJogo);
}
}

function numeroDiferente(numero) {
  return numero > maiorValor || numero < menorValor;
}

function reiniciarJogo() {
 
  window.location.reload(); 
}