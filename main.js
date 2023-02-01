function tocaSom(seletoAudio){
    const elemento = document.querySelector(seletoAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
               
    }
    else{
        alert('Elemento não encontrado') 
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


/*
while(contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador+=1;
    //console.log(contador);
}
*/

for (let contador =0;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
        }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
