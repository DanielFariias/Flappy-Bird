export function criaBackground() {
  const canvas = document.querySelector('canvas');
  const contexto = canvas.getContext('2d');
  const sprites = new Image();
  sprites.src = './src/images/sprites.png';

  const background = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
      contexto.fillStyle = '#70c5ce'
      contexto.fillRect(0, 0, canvas.width, canvas.height)
      contexto.drawImage(
        sprites,
        background.spriteX, background.spriteY,
        background.largura, background.altura,
        background.x, background.y,
        background.largura, background.altura
      )
      contexto.drawImage(
        sprites,
        background.spriteX, background.spriteY,
        background.largura, background.altura,
        (background.x + background.largura), background.y,
        background.largura, background.altura
      )
    }
  }

  return background;
}

