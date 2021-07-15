export function criaGetReady() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');
  const sprites = new Image();
  sprites.src = './sprites.png';

  const getReady = {
    spriteX: 134,
    spriteY: 0,
    largura: 174,
    altura: 152,
    x: (canvas.width / 2) - (174 / 2),
    y: 50,
    desenha() {
      contexto.drawImage(
        sprites,
        getReady.spriteX, getReady.spriteY,
        getReady.largura, getReady.altura,
        getReady.x, getReady.y,
        getReady.largura, getReady.altura
      )
    },
  }

  return getReady
}