function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(35);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  intro = new Intro();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
    intro
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2, 'jogo')
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}