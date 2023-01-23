 // informações da música (capa, nome e nome do artista)
const capaMusica = document.getElementById('imagen')
const nomeMusica = document.getElementById('titulo')
const bandaNome = document.getElementById('nome-artista')
const tempoMusica = document.getElementById('tempo-musica')
const barraProgresso = document.getElementById('barra-tempo')
const progressoMusica = document.getElementById('progresso-atual')
 // tag de audio
const musica = document.getElementById("audio")
 // pega os botões
const aleatorio = document.getElementById('embaralhar')
const anterior = document.getElementById('anterior')
const play = document.getElementById("tocar")
const proxima = document.getElementById('proxima')

 // constantes com as infos das musicas
const asItWas = {
    'capa': '../KaSong/imgs/asItWas.jpg',
    'nome': 'As It Was',
    'artista': 'Harry Styles',
    'musica': '../KaSong/musicas/as_it_was.mp3',
    'tempo': '2:45'
}
const beggin = {
    'capa': '../KaSong/imgs/beggin.webp',
    'nome': 'Beggin',
    'artista': 'Måneskin',
    'musica': '../KaSong/musicas/beggin.mp3',
    'tempo': '3:31'
}
const bones = {
    'capa': '../KaSong/imgs/bones.jpg',
    'nome': 'Bones',
    'artista': 'Imagine Dragons',
    'musica': '../KaSong/musicas/bones.mp3',
    'tempo': '2:45'
}
const m505 = {
    'capa': '../KaSong/imgs/505.jpg',
    'nome': '505',
    'artista': 'Arctic Monkeys',
    'musica': '../KaSong/musicas/505.mp3',
    'tempo': '4:14'
}
const chlorine = {
    'capa': '../KaSong/imgs/chlorine.jpg',
    'nome': 'Chlorine',
    'artista': 'Twenty One Pilots',
    'musica': '../KaSong/musicas/chlorine.mp3',
    'tempo': '5:25'
}
const heathens = {
    'capa': '../KaSong/imgs/heathens.jpg',
    'nome': 'Heathens',
    'artista': 'Twenty One Pilots',
    'musica': '../KaSong/musicas/heathens.mp3',
    'tempo': '3:16'
}
const spaceSong = {
    'capa': '../KaSong/imgs/spaceSong.jpg',
    'nome': 'Space Song',
    'artista': 'Beach House',
    'musica': '../KaSong/musicas/spaceSong.mp3',
    'tempo': '5:21'
}
const young = {
    'capa': '../KaSong/imgs/young.jpg',
    'nome': 'Young',
    'artista': 'Vacations',
    'musica': '../KaSong/musicas/young.mp3',
    'tempo': '3:10'
}
const money = {
    'capa': '../KaSong/imgs/money.jpg',
    'nome': 'Money',
    'artista': 'The Drums',
    'musica': '../KaSong/musicas/money.mp3',
    'tempo': '3:54'
}
 // playlist (com todas as variaveis com as informações das) e indice
const playlist = [asItWas, beggin, bones, m505, chlorine, heathens, 
    spaceSong, young, money]
let index = 0 // indice da música
musica.volume = .6
let tocando = false
let porcentagem // para a barra de tempo

function configurarMusica() {
    capaMusica.src = playlist[index].capa
    nomeMusica.innerText = playlist[index].nome
    bandaNome.innerText = playlist[index].artista
    musica.src = playlist[index].musica
    //tempoMusica.innerText = playlist[index].tempo
    musica.ontimeupdate = barraTempo
    barraProgresso.onclick = definirTempo
}

configurarMusica()

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
function barraTempo() {
    porcentagem = musica.currentTime*100 / musica.duration
    porcentagem = porcentagem.toFixed(2) + '%'
    progressoMusica.style.width = porcentagem
    if (musica.currentTime == musica.duration) {
        proximaFunc()
    }
}
function definirTempo(e) {
    musica.currentTime = (e.offsetX/barraProgresso.offsetWidth) * musica.duration
}

function aleatorioFunc() {
    let numero = Math.floor(Math.random() * playlist.length)
    if (numero != index) {
        index = numero
    } else {
        aleatorioFunc()
    }
    configurarMusica()
    tocarMusica()
}
function anteriorFunc() {
    if (index > 0) {
        index --
    }else if (index == 0){
        index = playlist.length - 1
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
    if (index < (playlist.length - 1)) {
        index ++
    }else if (index == (playlist.length -1)){
        index = 0
    }
    configurarMusica()
    tocarMusica()
}

 // monitora e responde os eventos dos botões
aleatorio.addEventListener('click', aleatorioFunc)
anterior.addEventListener('click', anteriorFunc)
play.addEventListener('click', botaoPlay)
proxima.addEventListener('click', proximaFunc)
