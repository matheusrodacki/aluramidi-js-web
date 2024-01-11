const listaDeBotoes = document.querySelectorAll(".tecla");

function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

listaDeBotoes.forEach((element) => {
  element.onclick = () => {
    tocaSom(`#som_${element.classList[1]}`);
  };
});

listaDeBotoes.forEach((element) => {
  element.onkeydown = (evento) => {
    if (evento.code === "Enter" || evento.code === "Space") {
      element.classList.add("ativa");
    }
  };
  element.onkeyup = (evento) => {
    element.classList.remove("ativa");
  };
});
