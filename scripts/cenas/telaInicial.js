class TelaInicial {
  constructor() {}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('Narutinha em', width /
      2, height / 4);
    textSize(125);
    text('Isolamento', width / 2, height / 2);
    text('Social', width / 2, height / 3 * 2);
  }

  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
    botaoGerenciador.cena='intro';
  }
}