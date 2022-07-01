function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play() // toca o som
}

const listaDeTeclas = document.querySelectorAll('.tecla') // seleciona todas as classes .tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador] // pega a tecla de indice contador
  const instrumento = tecla.classList[1] // pega a classe de indice 1 que é o nome da classe
  const idAudio = `#som_${instrumento}` // cria um id para o audio com o nome do instrumento

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
}
