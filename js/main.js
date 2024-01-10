const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

listaDeTeclas.forEach((element) => {
  element.onclick = () => {
    tocaSom(`#som_${element.classList[1]}`);
  };
});
