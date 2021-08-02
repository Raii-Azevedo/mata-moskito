/* Delimitação do  Palco do Jogo */
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var mosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

/* Níveis do Jogo */
if(nivel === 'Padawan') {
    mosquitoTempo = 1500

} else if(nivel === 'Jedi') {
    mosquitoTempo = 1000

} else {
    mosquitoTempo = 750
}

function palcoDoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

palcoDoJogo ()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'win.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    } 
}, 1000)

/* Função para randomizar posição do mosquito*/
function posicaoMosquito() {
    /*Remover mosquito anterior (caso exista)*/
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas>5) {
            window.location.href = 'game-over.html'

        } else {
            document.getElementById('v' + vidas).src= "{% static 'images/coracao_vazio.png' %}"
            
            vidas++
        }    
    }
    
    /* Posição do Mosquito */
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    /* Criar o elemento HTML de forma programática */
    var mosquito = document.createElement('img')

    mosquito.src = "{% static 'images/mosca.png' %}"
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoMosquito() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
    
        case 1:
            return 'mosquito2'
    
        case 2:
            return 'mosquito3'
    }
}

function ladoMosquito() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
    
        case 1:
            return 'ladoB'
    }
}

