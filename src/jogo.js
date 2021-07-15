import { criaTelas } from "./telas/telas.js";

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');
const sprites = new Image('./sprites.png');
const somHIT = new Audio('./efeitos/hit.wav')

const telas = criaTelas()

function loop() {
  telas.telaAtiva.desenha()
  telas.telaAtiva.atualiza()

  telas.frames += 1
  requestAnimationFrame(loop)
}

window.addEventListener('click', () => {
  if (telas.telaAtiva.click) {
    telas.telaAtiva.click()
  }
})

telas.mudaTela(telas.INICIO)

loop()