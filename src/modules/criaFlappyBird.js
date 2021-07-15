export function criaFlappyBird() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');
  const sprites = new Image();
  sprites.src = './sprites.png';
  const somHIT = new Audio()
  somHIT.src = './efeitos/hit.wav'


  const flappyBird = {
    movimentos: [
      { spriteX: 0, spriteY: 0, }, // asa pra cima
      { spriteX: 0, spriteY: 26, }, // asa no meio 
      { spriteX: 0, spriteY: 52, }, // asa pra baixo
      { spriteX: 0, spriteY: 26, }, // asa no meio 
    ],
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    pulo: 4.6,
    pular() {
      flappyBird.velocidade = - flappyBird.pulo
    },
    atualiza(chaozinho, mudaTela, telas) {
      if (flappyBird.fazColisao(flappyBird, chaozinho)) {
        somHIT.play()
        mudaTela(telas.GAME_OVER)

        return
      }

      flappyBird.velocidade += flappyBird.gravidade
      flappyBird.y += flappyBird.velocidade
    },
    frameAtual: 0,
    atualizaFrame(frames) {
      const intervaloDeFrames = 10;
      const passouOIntervalo = frames % intervaloDeFrames === 0;

      if (passouOIntervalo) {
        const baseDoIncremento = 1;
        const incremento = baseDoIncremento + flappyBird.frameAtual;
        const baseRepeticao = flappyBird.movimentos.length;
        flappyBird.frameAtual = incremento % baseRepeticao
      }
    },
    desenha(frames) {
      flappyBird.atualizaFrame(frames)
      const { spriteX, spriteY } = flappyBird.movimentos[flappyBird.frameAtual]
      contexto.drawImage(
        sprites,
        spriteX, spriteY,
        flappyBird.largura, flappyBird.altura,
        flappyBird.x, flappyBird.y,
        flappyBird.largura, flappyBird.altura
      )
    },
    fazColisao(flappyBird, chao) {
      const flappyBirdY = flappyBird.y + flappyBird.altura
      const chaoY = chao.y

      if (flappyBirdY >= chaoY) {
        return true
      }

      return false
    }
  }

  return flappyBird
}