import { criaBackground } from "../modules/criaBackground.js"
import { criaChao } from "../modules/criaChao.js";
import { criaPlacar } from "../modules/criaPlacar.js";
import { criaGetReady } from "../modules/criaGetReady.js";
import { criaGameOver } from "../modules/criaGameOver.js";
import { criaCanos } from "../modules/criaCanos.js";
import { criaFlappyBird } from "../modules/criaFlappyBird.js";

export function criaTelas() {

  const telas = {
    frames: 0,
    Globais: {},
    telaAtiva: {},
    INICIO: {
      inicializa() {
        telas.Globais.flappyBird = criaFlappyBird()
        telas.Globais.chao = criaChao()
        telas.Globais.canos = criaCanos()
        telas.Globais.background = criaBackground()
        telas.Globais.getReady = criaGetReady()
        telas.Globais.gameOver = criaGameOver()
      },
      desenha() {
        telas.Globais.background.desenha()
        telas.Globais.chao.desenha()
        telas.Globais.getReady.desenha()
        telas.Globais.flappyBird.desenha(telas.frames)
      },
      click() {
        telas.mudaTela(telas.JOGO)
      },
      atualiza() {
        telas.Globais.chao.atualiza()
      }
    },
    JOGO: {
      inicializa() {
        telas.Globais.placar = criaPlacar()
      },
      desenha() {
        telas.Globais.background.desenha()
        telas.Globais.canos.desenha(telas.frames)
        telas.Globais.chao.desenha()
        telas.Globais.flappyBird.desenha(telas.frames)
        telas.Globais.placar.desenha()
      },
      click() {
        telas.Globais.flappyBird.pular()
      },
      atualiza() {
        telas.Globais.canos.atualiza(telas.frames, telas.Globais.flappyBird, telas.mudaTela, telas)
        telas.Globais.chao.atualiza()
        telas.Globais.flappyBird.atualiza(telas.Globais.chao, telas.mudaTela, telas)
        telas.Globais.placar.atualiza(telas.frames)
      }
    },
    GAME_OVER: {
      desenha() {
        telas.Globais.gameOver.desenha()
      },
      atualiza() { },
      click() {
        telas.mudaTela(telas.INICIO)
      },
    },
    mudaTela(novaTela) {
      telas.telaAtiva = novaTela

      if (telas.telaAtiva.inicializa) {
        telas.telaAtiva.inicializa()
      }
    }
  }
  return telas
}