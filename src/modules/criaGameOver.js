export function criaGameOver() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');
  const sprites = new Image();
  sprites.src = './sprites.png';

  const mensagemGameOver = {
    sX: 134,
    sY: 153,
    w: 226,
    h: 200,
    x: (canvas.width / 2) - 226 / 2,
    y: 50,
    desenha() {
      contexto.drawImage(
        sprites,
        mensagemGameOver.sX, mensagemGameOver.sY,
        mensagemGameOver.w, mensagemGameOver.h,
        mensagemGameOver.x, mensagemGameOver.y,
        mensagemGameOver.w, mensagemGameOver.h
      );
    }
  }

  return mensagemGameOver
}