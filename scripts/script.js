 // informações da música (capa, nome e nome do artista)
const capaMusica = document.getElementById('imagen')
const nomeMusica = document.getElementById('titulo')
const bandaNome = document.getElementById('nome-artista')
const tempoMusica = document.getElementById('tempo-musica')
const barraCiclavel = document.getElementById("constainer-progresso")
const barraProgresso = document.getElementById('barra-tempo')
const progressoMusica = document.getElementById('progresso-atual')
 // tag de audio
const musica = document.getElementById("audio")
 // pega os botões
const aleatorio = document.getElementById('embaralhar')
const anterior = document.getElementById('anterior')
const play = document.getElementById("tocar")
const proxima = document.getElementById('proxima')
const repetir = document.getElementById('repetir')
const tempoAtual = document.getElementById('tempo-atual')
const tempoTotal = document.getElementById('tempo-total')

musica.pause

 // constantes com as infos das musicas
const asItWas = {
    'capa': '../imgs/asItWas.jpg',
    'nome': 'As It Was',
    'artista': 'Harry Styles',
    'musica': '../musicas/as_it_was.mp3',
    'tempo': '2:45'
}
const beggin = {
    'capa': '../imgs/beggin.webp',
    'nome': 'Beggin',
    'artista': 'Måneskin',
    'musica': '../musicas/beggin.mp3',
    'tempo': '3:31'
}
const bones = {
    'capa': '../imgs/bones.jpg',
    'nome': 'Bones',
    'artista': 'Imagine Dragons',
    'musica': '../musicas/bones.mp3',
    'tempo': '2:45'
}
const m505 = {
    'capa': '../imgs/505.jpg',
    'nome': '505',
    'artista': 'Arctic Monkeys',
    'musica': '../musicas/505.mp3',
    'tempo': '4:14'
}
const chlorine = {
    'capa': '../imgs/chlorine.jpg',
    'nome': 'Chlorine',
    'artista': 'Twenty One Pilots',
    'musica': '../musicas/chlorine.mp3',
    'tempo': '5:25'
}
const heathens = {
    'capa': '../imgs/heathens.jpg',
    'nome': 'Heathens',
    'artista': 'Twenty One Pilots',
    'musica': '../musicas/heathens.mp3',
    'tempo': '3:16'
}
const spaceSong = {
    'capa': '../imgs/spaceSong.jpg',
    'nome': 'Space Song',
    'artista': 'Beach House',
    'musica': '../musicas/spaceSong.mp3',
    'tempo': '5:21'
}
const young = {
    'capa': '../imgs/young.jpg',
    'nome': 'Young',
    'artista': 'Vacations',
    'musica': '../musicas/young.mp3',
    'tempo': '3:10'
}
const money = {
    'capa': '../imgs/money.jpg',
    'nome': 'Money',
    'artista': 'The Drums',
    'musica': '../musicas/money.mp3',
    'tempo': '3:54'
}
 // playlist (com todas as variaveis com as informações das) e indice
const playlistOriginal = [asItWas, beggin, bones, m505, chlorine, heathens, 
    spaceSong, young, money]
// os '...' espalha os dados do array para este nv array
let playlistEmbaralhada = [...playlistOriginal] 


let index = 0 // indice da música
musica.volume = .6
let tocando = false
let porcentagem // para a barra de tempo
let repetição = false
let embaralhado = false

function configurarMusica() {
    capaMusica.src = playlistEmbaralhada[index].capa
    nomeMusica.innerText = playlistEmbaralhada[index].nome
    bandaNome.innerText = playlistEmbaralhada[index].artista
    musica.src = playlistEmbaralhada[index].musica
    //tempoMusica.innerText = playlistEmbaralhada[index].tempo
    /*musica.ontimeupdate = barraTempo
    barraProgresso.onclick = definirTempo*/
}

configurarMusica()

function formatarTempo(númeroOriginal) {
    let horas = Math.floor(númeroOriginal/3600)
    console.log(horas)
    let mins = Math.floor((númeroOriginal-horas*3600) / 60)
    console.log(mins)
    let segs = Math.floor((númeroOriginal-horas*360-mins*60))
    console.log(segs)
    horas = horas.toString().padStart(2, '0')
    mins = mins.toString().padStart(2, '0')
    segs = segs.toString().padStart(2, '0')
    if (horas != '00') {
        return `${horas}:${mins}:${segs}`
    } else {
        return `${mins}:${segs}`
    }
}
function atualizarTempoAtual() {
    tempoAtual.innerText = formatarTempo(musica.currentTime)
}
function atualizarTempoTotal() {
    tempoTotal.innerText = formatarTempo(musica.duration)
}

function tocarMusica(){
     // classe Bootstrap Icon para mudar icone
    play.querySelector('.bi').classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
    musica.play()
}
function pausarMusica(){
     // classe Bootstrap Icon para mudar icone
    play.querySelector('.bi').classList.replace('bi-pause-circle-fill', 'bi-play-circle-fill')
    musica.pause()
}
function atualizarProgresso() {
    const larguraBarra = (musica.currentTime/musica.duration)*100
    progressoMusica.style.setProperty('--progresso', `${larguraBarra}%`)
    atualizarTempoAtual()
}
function pularPara(evento) {
    const largura = barraProgresso.offsetWidth // largura da barra
    /* evento.offsetX == largura em px aonde foi clicado*/
    const clickPos = evento.offsetX
    const pularParaTempo = (clickPos/largura)*musica.duration
    musica.currentTime = pularParaTempo
}

 /* meu sem o teacher
function acabou() {
    if (repetição) {
        musica.currentTime = 0
        musica.play()
    } else {
        proximaFunc()
    }
}*/
function embaralhar(preEmbarArray) {
    const tamanho = preEmbarArray.length // pega o tamanho do array
    let indexEM = tamanho - 1
    /*
    NÃO há nescessidade de embaralhar o primeiro elemento, pois
    ele começa da direita para esquerda(do 'final') logo
    quando chegar no primeiro elemento ele ja acabou sendo
    embaralhado, pois se todos os outros ja foram, alguma
    hora alguem trocou com ele!
    */
    while (indexEM > 0) {
        let indexAleatorio = Math.floor(Math.random() * tamanho)
        let aux = preEmbarArray[indexEM]
        /* função de trocar os valores (o escolhido com o ultimo) */
        preEmbarArray[indexEM] = preEmbarArray[indexAleatorio]
        preEmbarArray[indexAleatorio] = aux
        /*  */
        indexEM--
    }
    console.log(playlistEmbaralhada)
}
function acabou() {
    if (repetição) {
        tocarMusica()
    } else {
        proximaFunc()
    }
}
/*
function barraTempo() {
    porcentagem = musica.currentTime*100 / musica.duration
    porcentagem = porcentagem.toFixed(2) + '%'
    progressoMusica.style.width = porcentagem
    if (musica.currentTime == musica.duration) {
        acabou()
    }
}
function definirTempo(e) {
    musica.currentTime = (e.offsetX/barraProgresso.offsetWidth) * musica.duration
}
*/
/* fiz por conta kk
function repetirFunc() {
    repetição = !repetição
    if (repetição) {
        repetir.querySelector('.bi').classList.replace('bi-repeat', 'bi-repeat-1')
    } else {
        repetir.querySelector('.bi').classList.replace('bi-repeat-1', 'bi-repeat')
    }
}*/
/* do video fora do curso, aqui é aleatorio e n embaralhar
function aleatorioFunc() {
    let numero = Math.floor(Math.random() * playlistEmbaralhada.length)
    if (numero != index) {
        index = numero
    } else {
        aleatorioFunc()
    }
    configurarMusica()
    tocarMusica()
}*/
function embaralhadoClick(){
    if (embaralhado) {
        embaralhado = false
        playlistEmbaralhada = [...playlistOriginal]
        aleatorio.classList.remove('botao-ativo')
    } else {
        embaralhado = true
        embaralhar(playlistEmbaralhada)
        aleatorio.classList.add('botao-ativo')
    }
}
function anteriorFunc() {
    if (index > 0) {
        index --
    }else if (index == 0){
        index = playlistEmbaralhada.length - 1
    }
    configurarMusica()
    tocarMusica()
}
function botaoPlay() {
    if (tocando) {
        pausarMusica()
    } else {
        tocarMusica()
    }
    tocando = !tocando
}
function proximaFunc() {
    if (index < (playlistEmbaralhada.length - 1)) {
        index ++
    }else if (index == (playlistEmbaralhada.length -1)){
        index = 0
    }
    configurarMusica()
    tocarMusica()
}
function repetirFunc() {
    if (repetição) {
        repetir.classList.remove('botao-ativo')
    } else {
        repetir.classList.add('botao-ativo')
    }
    repetição = !repetição
}

 // monitora e responde os eventos dos botões
aleatorio.addEventListener('click', embaralhadoClick)
anterior.addEventListener('click', anteriorFunc)
play.addEventListener('click', botaoPlay)
proxima.addEventListener('click', proximaFunc)
repetir.addEventListener('click', repetirFunc)

//song
barraCiclavel.addEventListener('click', pularPara)
musica.addEventListener('timeupdate', atualizarProgresso)
musica.addEventListener('ended', acabou)
musica.addEventListener('loadedmetadata', atualizarTempoTotal)