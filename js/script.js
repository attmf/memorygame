function embaralhar(lista) {
  let valor_temporario;
  let indice_aleatorio;

  for (let i = lista.length -1; i !== 0; i--) {
      indice_aleatorio = Math.floor(Math.random() * i);

      valor_temporario = lista[i];
      lista[i] = lista[indice_aleatorio];
      lista[indice_aleatorio] = valor_temporario;
  }
  return lista;
}

let cartas = document.querySelectorAll(".carta");

let imagensSalvas = ["img-1.png", "img-2.png", "img-3.png", "img-4.png", "img-5.png", "img-6.png", "img-7.png", "img-8.png", ];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i < cartas.length; i++){
  cartas[i].style.backgroundImage = `url("img/${imagens[i]}")`;
}

setTimeout(function(){
  for(let carta of cartas){
    carta.style.backgroundImage = 'url("img/img-back.png")';
    carta.onclick = function () {
      carta.style.backgroundImage = `url("img/${imagens[Number(carta.id)]}")`;
      carta.onclick = null;
    }
  }
}, 3000);
