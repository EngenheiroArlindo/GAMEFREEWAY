//criando uma lista para simplificar os códigos dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

// utilização do for para simplificar mais ainda o código

function mostraCarro(){
  for(let i = 0; i < imagemDosCarros.length; i++){                image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);   
    }
}
function movimentaCarro(){
  for (let i = 0; i < imagemDosCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemDosCarros.length; i++){
  if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
   }
 }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}