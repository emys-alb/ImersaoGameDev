class Vida {
    constructor(maxVidas, inicial) {
    this.maxVidas = maxVidas;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
    }
  
  exibe() {
     for(let i = 0; i < this.vidas; i++) {
       const margem = i * 10;
       const posicao = this.xInicial * (i + 1);
    
    image(imagemCoracao, posicao + margem, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.maxVidas) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
}