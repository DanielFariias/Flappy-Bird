export function criaCanos() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');
  const sprites = new Image();
  sprites.src = './src/images/sprites.png';
  const somHIT = new Audio()
  somHIT.src = './src/efeitos/hit.wav'

  const canos = {
    largura: 52,
    altura: 400,
    chao: {
      spriteX: 0,
      spriteY: 169,
    },
    ceu: {
      spriteX: 52,
      spriteY: 169,
    },
    espaco: 80,
    desenha() {
      canos.pares.forEach(function (par) {
        const espacamentoCanos = 90
        const YRandom = par.y

        const canoCeuX = par.x;
        const canoCeuY = YRandom


        contexto.drawImage(
          sprites,
          canos.ceu.spriteX, canos.ceu.spriteY,
          canos.largura, canos.altura,
          canoCeuX, canoCeuY,
          canos.largura, canos.altura,
        )

        const canoChaoX = par.x;
        const canoChaoY = canos.altura + espacamentoCanos + YRandom
        contexto.drawImage(
          sprites,
          canos.chao.spriteX, canos.chao.spriteY,
          canos.largura, canos.altura,
          canoChaoX, canoChaoY,
          canos.largura, canos.altura,
        )

        par.canoCeu = {
          x: canoCeuX,
          y: canos.altura + canoCeuY
        }
        par.canoChao = {
          x: canoChaoX,
          y: canoChaoY
        }

      })


    },
    temColisaoComOFlappyBird(par, flappyBird) {
      const cabecaDoFlappy = flappyBird.y;
      const peDoFlappy = flappyBird.y + flappyBird.altura;

      if ((flappyBird.x + flappyBird.largura - 5) >= par.x) {
        if (cabecaDoFlappy <= par.canoCeu.y) {
          return true;
        }

        if (peDoFlappy >= par.canoChao.y) {
          return true;
        }
      }
      return false;
    },
    pares: [],
    atualiza(frames, flappyBird, mudaTela, telas) {
      const passou100Frames = frames % 100 === 0;
      if (passou100Frames) {
        console.log('Passou 100 frames');
        canos.pares.push({
          x: canvas.width,
          y: -150 * (Math.random() + 1),
        });
      }


      canos.pares.forEach(function (par) {
        par.x = par.x - 2;

        if (canos.temColisaoComOFlappyBird(par, flappyBird)) {
          console.log('Você perdeu!')
          somHIT.play()
          mudaTela(telas.GAME_OVER)
        }

        if (par.x + canos.largura <= 0) {
          canos.pares.shift();
        }
      });

    }
  }

  return canos;
}