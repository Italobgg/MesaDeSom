function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeteclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeteclas.length; contador++) {
  const tecla = listaDeteclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
