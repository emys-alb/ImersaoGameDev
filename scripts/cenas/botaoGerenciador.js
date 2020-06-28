class BotaoGerenciador {
  constructor(texto, x, y, cena) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.cena = cena;
    
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => {
      if(this.proximaTela==='telaInicial') {
           jogo.setup();
        }
      this._alteraCena();
    });
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw() {
    this._criaBotao();
    this.botao.position(this.x, this.y);
    this.botao.center("horizontal");
  }
  
  _criaBotao() {
    if(this.botao==null)
    {
      this.botao=createButton(this.texto);
    this.botao.mousePressed(() =>{
      if(this.cena==='telaInicial')
         {
           jogo.setup();
         }
      this._alteraCena()}
      );
    this.botao.addClass('botao-tela-inicial');
    }
  }

  _alteraCena() {
    this.botao.remove();
    this.botao = null;
    cenaAtual = this.cena;
  }
}