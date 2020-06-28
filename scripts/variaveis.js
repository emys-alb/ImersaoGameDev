let imagemTelaInicial;
let imagemCenario;
let imagemCoracao;
let imagemPersonagem;
let imagemInimigoZumbiMulher;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameover;
let fonteTelaInicial;
let somDoPulo;
let somDoJogo;

let jogo;
let intro;
let telaInicial;
let cenaAtual = 'telaInicial';
let cenas;
let vida;
let fita;

let cenario;
let personagem;
let pontuacao;
let botaoGerenciador;
let botaoJogarNovamente;

const matrizInimigoZumbiMulher = [
  [0, 0],
  [263, 0],
  [518, 0],
  [773, 0],
  [1028, 0],
  [0, 348],
  [263, 348],
  [518, 348],
  [773, 348],
  [1028, 348]
];
const matrizPersonagem = [
  [0, 0],
  [282, 0],
  [552, 0],
  [798, 0],
  [1057, 0],
  [0, 374],
  [282, 374],
  [552, 374],
  [798, 374],
  [1057, 374]
];
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const inimigos = [];