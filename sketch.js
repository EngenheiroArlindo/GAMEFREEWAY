function setup() {
    createCanvas(500, 400);
    somDatrilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaAtor();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();  
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }
  
  
  
  
  