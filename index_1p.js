

let des = document.getElementById('des').getContext('2d')
 
// --- OBJETOS ---
let fundo = new Image()
fundo.src = './img/galaxiaanimada.gif'
 
let meteoro1 = new Meteoro(1200, 325, 80, 50, './img/meteoro.png')
let meteoro2 = new Meteoro(1500, 125, 80, 50, './img/meteoro.png')
let meteoro3 = new Meteoro(1700, 400, 80, 50, './img/meteoro.png')
let meteoro4 = new Meteoro(1600, 250, 80, 50, './img/meteoro.png')
 
let estrela1 = new Estrelas(1400, 100, 40, 40, './img/estrela.png.png')
let estrela2 = new Estrelas(1700, 300, 40, 40, './img/estrela.png.png')
let estrela3 = new Estrelas(2000, 500, 40, 40, './img/estrela.png.png')
 

let meuFoguete = new Foguete(100, 325, 80, 50, './img/rocket_001_bg.png')
 
// Som
const somColeta = new Audio('./audios/coleta_estrelas.mp3');
const somExplosao = new Audio('./audios/colisao_meteoro.mp3');
 
const somMotor = new Audio('./audios/motor_foguete.mp3'); 
somMotor.loop = true;
somMotor.volume = 1.0;  
 
const trilhaSonora = new Audio('./audios/trilha_jogo.mp3');
trilhaSonora.loop = true;
trilhaSonora.volume = 0.6;
 
let t1 = new Texto()
let t2 = new Texto()    
let fase_txt = new Texto()
let resultado_txt = new Texto()
 
let jogar = true
let fase = 1
let vitoria = false // true = venceu, false = perdeu
 
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        meuFoguete.dir = -10
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        meuFoguete.dir = 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || 
        e.key === 'w' || e.key === 'W' || e.key === 's' || e.key === 'S') {
        meuFoguete.dir = 0
    }
})
 
function game_over() {
    // Venceu ao atingir 300 pontos
    if (meuFoguete.pontos >= 300) {
        jogar = false
        vitoria = true
    }
 
    // Perdeu ao zerar as vidas
    if (meuFoguete.vida <= 0) {
        jogar = false
        vitoria = false
    }
}
 
function ver_fase() { 
    if (meuFoguete.pontos > 100 && fase === 1) {
        fase = 2
        fundo.src = './img/fundofase2.gif'
        meteoro1.vel = 10
        meteoro2.vel = 10
        meteoro3.vel = 10
        meteoro4.vel = 10
    } else if (meuFoguete.pontos > 200 && fase === 2) {
        fase = 3
        fundo.src = './img/fundofinalinicial.jpg'
        meteoro1.vel = 12
        meteoro2.vel = 12
        meteoro3.vel = 12
        meteoro4.vel = 12
    }
}
 
function colisao() {
    // Colisão com os Meteoros
    if (meuFoguete.colisao(meteoro1) || meuFoguete.colisao(meteoro2) || 
        meuFoguete.colisao(meteoro3) || meuFoguete.colisao(meteoro4)) {
        
        somExplosao.currentTime = 0
        somExplosao.play().catch(() => {})
        
        if (meuFoguete.colisao(meteoro1)) meteoro1.recomecar()
        if (meuFoguete.colisao(meteoro2)) meteoro2.recomecar()
        if (meuFoguete.colisao(meteoro3)) meteoro3.recomecar()
        if (meuFoguete.colisao(meteoro4)) meteoro4.recomecar()
        
        meuFoguete.vida -= 1
    }
    
    // Colisão com as Estrelas
    if (meuFoguete.colisao(estrela1) || meuFoguete.colisao(estrela2) || meuFoguete.colisao(estrela3)) {
        somColeta.currentTime = 0
        somColeta.play().catch(() => {})
        
        if (meuFoguete.colisao(estrela1)) estrela1.recomecar()
        if (meuFoguete.colisao(estrela2)) estrela2.recomecar()
        if (meuFoguete.colisao(estrela3)) estrela3.recomecar()
        
        meuFoguete.pontos += 5
    }
}
 
function pontuacao() {
    if (meuFoguete.passou(meteoro1)) {
        meuFoguete.pontos += 1
        meteoro1.recomecar()
    }
    if (meuFoguete.passou(meteoro2)) {
        meuFoguete.pontos += 1
        meteoro2.recomecar()
    }
    if (meuFoguete.passou(meteoro3)) {
        meuFoguete.pontos += 1
        meteoro3.recomecar()
    }
    if (meuFoguete.passou(meteoro4)) {
        meuFoguete.pontos += 1
        meteoro4.recomecar()
    }
}
 
function desenha() {
    des.setTransform(1, 0, 0, 1, 0, 0) // reseta qualquer transformação do canvas
    des.drawImage(fundo, 0, 0, 1200, 700)
 
    if (jogar) {
        estrela1.desenhar()
        estrela2.desenhar()
        estrela3.desenhar()
        meteoro1.desenhar()
        meteoro2.desenhar()
        meteoro3.desenhar()
        meteoro4.desenhar()
        meuFoguete.desenhar()
        
        // HUD
        t1.desenhar('Pontos: ' + meuFoguete.pontos, 950, 40, 'yellow', '18px "Press Start 2P"')
        t2.desenhar('Vidas: ' + meuFoguete.vida, 40, 40, 'red', '18px "Press Start 2P"')
        fase_txt.desenhar('Fase: ' + fase, 550, 40, 'white', '18px "Press Start 2P"')
 
    } else {
        // Tela de fim de jogo
        if (vitoria) {
            t1.desenhar('VOCE VENCEU!', 320, 280, '#00ff00', '50px "Press Start 2P"')
            resultado_txt.desenhar('PARABENS, PILOTO!', 380, 360, 'yellow', '22px "Press Start 2P"')
        } else {
            t1.desenhar('GAME OVER', 350, 280, 'red', '55px "Press Start 2P"')
            resultado_txt.desenhar('SEUS FOGUETES ACABARAM!', 250, 360, 'orange', '18px "Press Start 2P"')
        }
 
        t2.desenhar('Pontuacao: ' + meuFoguete.pontos + ' pts', 420, 440, 'white', '20px "Press Start 2P"')
        fase_txt.desenhar('PRESSIONE F5 PARA REINICIAR', 220, 570, 'white', '15px "Press Start 2P"')
    }
}
 
function atualiza() {
    if (jogar) {
        if (somMotor.paused) somMotor.play().catch(() => {})
        if (trilhaSonora.paused) trilhaSonora.play().catch(() => {})
 
        meuFoguete.movimentar()
        meuFoguete.animar('rocket_00')
 
        meteoro1.movimentar()
        meteoro2.movimentar()
        meteoro3.movimentar()
        meteoro4.movimentar()
        
        estrela1.mov_est()
        estrela2.mov_est()
        estrela3.mov_est()
        
        colisao()
        pontuacao()
        ver_fase()
        game_over()
 
    } else {
        somMotor.pause()
        somMotor.currentTime = 0
        
        trilhaSonora.pause()
        trilhaSonora.currentTime = 0
    }
}
 
function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}
 
main()