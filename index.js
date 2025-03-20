let score = (JSON.parse(localStorage.getItem('score')))

if (score === null) {
    score = {
        vitoria: 0,
        derrota: 0,
        empate: 0
    }
}

updateScore()

let isAutoPlaying = false
let intervalId

function autoPlay() {
    if (!isAutoPlaying) {
        document.querySelector('.auto-play-button').innerHTML = 'Stop Play'
        isAutoPlaying = true
        intervalId = setInterval(function (){
            const opcoes = ['Pedra', 'Papel', 'Tesoura']
            const escolhaDoUsuario = opcoes[Math.floor(Math.random() * opcoes.length)];
            jogar(escolhaDoUsuario)
        }, 2000)
    } else {
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play'
        clearInterval(intervalId)
        isAutoPlaying = false
    }
}
 

function jogar(escolhaUsuario) {

    const opcoes = ['Pedra', 'Papel', 'Tesoura']
    const jogoAleatorio = opcoes[Math.floor(Math.random() * opcoes.length)]
    console.log(jogoAleatorio)
    
    let resultado = ''
    
    if (escolhaUsuario === jogoAleatorio) {
        resultado = 'Empate'
    } else if (
        (escolhaUsuario === 'Pedra' && jogoAleatorio == 'Tesoura') ||
        (escolhaUsuario === 'Tesoura' && jogoAleatorio == 'Papel') ||
        (escolhaUsuario === 'Papel' && jogoAleatorio == 'Pedra')
    ) {
        resultado = 'Vitoria'
    
    } else {
        resultado = 'Derrota'
    }

    if (resultado === 'Vitoria') {
        score.vitoria += 1
    } else if (resultado === 'Derrota'){
        score.derrota += 1
    } else if (resultado === 'Empate') {
        score.empate += 1
    }

    localStorage.setItem('score', JSON.stringify(score))

    document.querySelector('.js-score').innerHTML =

    `Vitorias: ${score.vitoria}, Derrotas: ${score.derrota},Empates: ${score.empate}.`

    document.querySelector('.js-result').innerHTML = `${resultado}.`

    document.querySelector('.js-moves').innerHTML = `Você     
    <img src="./Img/${escolhaUsuario}-emoji.png" alt="">
    <img src="./Img/${jogoAleatorio}-emoji.png" alt="">
    Computador`

    }

    function updateScore(){
        document.querySelector('.js-score').innerHTML =
    
        `Vitorias: ${score.vitoria}, Derrotas: ${score.derrota},Empates: ${score.empate}.`
    }