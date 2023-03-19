function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();
        console.log('elemento não encontrado');
    if(elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }
}

//querySelector, caso utilize o nome da tag, o resultado será: querySelector('button'); se utilizar uma classe: querySelector('.tecla_pom'); se utilizar um ID: querySelector('#som_tecla_pom')

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //usa ` para criar essa string - Template String.

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function() {
            tecla.classList.remove('ativa');
        }
    }
}
