class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }
  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 100, 138, 200, 276);
    const inimigoZumbiMulher = new Inimigo(matrizInimigoZumbiMulher, imagemInimigoZumbiMulher, width - 52, 30, 110, 121, 220, 243, 20, 300);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 700);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 50, 200, 100, 75, 200, 150, 10, 300);
    const inimigoVoadorBaixo = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 50, 80, 100, 75, 200, 150, 15, 900);


    inimigos.push(inimigoZumbiMulher);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoVoadorBaixo);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.exibe();

    pontuacao.exibe();
    pontuacao.adicionaPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > inimigos.length - 1) {
        this.inimigoAtual = 0;
      }

      inimigo.velocidade = parseInt(random(10, 40));
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornaInvencivel();

      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
      }
    }
  }
}