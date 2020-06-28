class Intro {
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
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(30);
    text('Narutinha sabendo importancia do isolamento social', width / 2, height / 5);
    text('foi se refugiar na floresta', width / 2, height / 4);
    text('O que ela nao sabia eh que os furoes da quarentena', width / 2, height / 6 * 2);
    text('levaram o virus ate la', width / 2, height / 5 * 2);
    textSize(50);
    text('Corra para casa e ', width / 2, height / 6 * 3 + 35);
    text('=nao pegue corona=', width / 2, height / 5 * 3 + 35);
  }

  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
    botaoGerenciador.cena = 'jogo';
  }
}