//imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

//sons do jogo

let somDatrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/galinha.png")
  imagemDoCarro = loadImage("imagens/carro-1.png")
  imagemDoCarro2 = loadImage("imagens/carro-2.png")
  imagemDoCarro3 = loadImage("imagens/carro-3.png")
  imagemDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  somDatrilha = loadSound("sons/Transito2.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}