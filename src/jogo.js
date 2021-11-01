import { criaTelas } from "./telas/telas.js";

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