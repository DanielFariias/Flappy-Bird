export function criaPlacar() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');

  const placar = {
    pontuacao: 0,
    desenha() {
      contexto.font = '40px "VT323"';
      contexto.textAlign = 'right';
      contexto.fillStyle = 'white';
      contexto.fillText(`${placar.pontuacao}`, canvas.width - 10, 35);
    },
    atualiza(frames) {
      const intervaloDeFrames = 100;
      const passouOIntervalo = frames % intervaloDeFrames === 0;

      if (passouOIntervalo) {
        placar.pontuacao = placar.pontuacao + 1;
      }
    }
  }
  return placar;
}