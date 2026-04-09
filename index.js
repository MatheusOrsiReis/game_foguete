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
let meuFoguete2 = new Foguete(100, 450, 80, 50, './img/jogador2_001_bg.png')
 
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
let t1_p2 = new Texto()
let t2_p2 = new Texto()
 
let vencedor = "";
 
let jogar = true
let fase = 1
 
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        meuFoguete.dir = -10
    } else if (e.key === 'ArrowDown') {
        meuFoguete.dir = 10
    }
 
    if (e.key === 'w' || e.key === 'W') {
        meuFoguete2.dir = -10
    } else if (e.key === 's' || e.key === 'S') {
        meuFoguete2.dir = 10
    }
})
 
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        meuFoguete.dir = 0
    }
    if (e.key === 'w' || e.key === 'W' || e.key === 's' || e.key === 'S') {
        meuFoguete2.dir = 0
    }
})
 
function game_over() {
    if (meuFoguete.pontos >= 300 || meuFoguete2.vida <= 0) {
        jogar = false;
        vencedor = "JOGADOR 1 VENCEU!";
    }
    if (meuFoguete2.pontos >= 300 || meuFoguete.vida <= 0) {
        jogar = false;
        vencedor = "JOGADOR 2 VENCEU!";
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
    // --- JOGADOR 1 ---
    if (meuFoguete.colisao(meteoro1) || meuFoguete.colisao(meteoro2) || 
        meuFoguete.colisao(meteoro3) || meuFoguete.colisao(meteoro4)) {
        
        somExplosao.currentTime = 0;
        somExplosao.play().catch(() => {});
        
        if (meuFoguete.colisao(meteoro1)) meteoro1.recomecar();
        if (meuFoguete.colisao(meteoro2)) meteoro2.recomecar();
        if (meuFoguete.colisao(meteoro3)) meteoro3.recomecar();
        if (meuFoguete.colisao(meteoro4)) meteoro4.recomecar();
        
        meuFoguete.vida -= 1;
    }
    
    if (meuFoguete.colisao(estrela1) || meuFoguete.colisao(estrela2) || meuFoguete.colisao(estrela3)) {
        somColeta.currentTime = 0;
        somColeta.play().catch(() => {});
        
        if (meuFoguete.colisao(estrela1)) estrela1.recomecar();
        if (meuFoguete.colisao(estrela2)) estrela2.recomecar();
        if (meuFoguete.colisao(estrela3)) estrela3.recomecar();
        
        meuFoguete.pontos += 5;
    }
 
    // --- JOGADOR 2 ---
    if (meuFoguete2.colisao(meteoro1) || meuFoguete2.colisao(meteoro2) || 
        meuFoguete2.colisao(meteoro3) || meuFoguete2.colisao(meteoro4)) {
        
        somExplosao.currentTime = 0;
        somExplosao.play().catch(() => {});
        
        if (meuFoguete2.colisao(meteoro1)) meteoro1.recomecar();
        if (meuFoguete2.colisao(meteoro2)) meteoro2.recomecar();
        if (meuFoguete2.colisao(meteoro3)) meteoro3.recomecar();
        if (meuFoguete2.colisao(meteoro4)) meteoro4.recomecar();
        
        meuFoguete2.vida -= 1;
    }
 
    if (meuFoguete2.colisao(estrela1) || meuFoguete2.colisao(estrela2) || meuFoguete2.colisao(estrela3)) {
        somColeta.currentTime = 0;
        somColeta.play().catch(() => {});
        
        if (meuFoguete2.colisao(estrela1)) estrela1.recomecar();
        if (meuFoguete2.colisao(estrela2)) estrela2.recomecar();
        if (meuFoguete2.colisao(estrela3)) estrela3.recomecar();
        
        meuFoguete2.pontos += 5;
    }
}
 
function pontuacao() {
    if (meuFoguete.passou(meteoro1)) {
        meuFoguete.pontos += 1
        meuFoguete2.pontos += 1
        meteoro1.recomecar()
    }
    if (meuFoguete.passou(meteoro2)) {
        meuFoguete.pontos += 1
        meuFoguete2.pontos += 1
        meteoro2.recomecar()
    }
    if (meuFoguete.passou(meteoro3)) {
        meuFoguete.pontos += 1
        meuFoguete2.pontos += 1
        meteoro3.recomecar()
    }
    if (meuFoguete.passou(meteoro4)) {
        meuFoguete.pontos += 1
        meuFoguete2.pontos += 1
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
        meuFoguete2.desenhar()
        
        // HUD JOGADOR 1 (Topo)
        t1.desenhar('Pontos P1: ' + meuFoguete.pontos, 950, 40, 'yellow', '18px "Press Start 2P"');
        t2.desenhar('Vidas P1: ' + meuFoguete.vida, 40, 40, 'red', '18px "Press Start 2P"');
        fase_txt.desenhar('Fase: ' + fase, 550, 40, 'white', '18px "Press Start 2P"');
 
        // HUD JOGADOR 2 (Embaixo)
        t1_p2.desenhar('Pontos P2: ' + meuFoguete2.pontos, 950, 670, 'lightblue', '18px "Press Start 2P"');
        t2_p2.desenhar('Vidas P2: ' + meuFoguete2.vida, 40, 670, 'orange', '18px "Press Start 2P"');
 
    } else {
        
        t1.desenhar('FIM DE JOGO', 350, 300, 'yellow', '50px "Press Start 2P"');
        t2.desenhar(vencedor, 330, 400, 'white', '25px "Press Start 2P"');
        t1_p2.desenhar('P1: ' + meuFoguete.pontos + ' pts', 480, 460, 'yellow', '16px "Press Start 2P"');
        t2_p2.desenhar('P2: ' + meuFoguete2.pontos + ' pts', 480, 490, 'lightblue', '16px "Press Start 2P"');
        fase_txt.desenhar('PRESSIONE F5 PARA REINICIAR', 320, 580, 'white', '15px "Press Start 2P"');
    }
}
 
function atualiza() {
    if (jogar) {
        if (somMotor.paused) somMotor.play().catch(() => {});
        if (trilhaSonora.paused) trilhaSonora.play().catch(() => {});
 
        meuFoguete.movimentar();
        meuFoguete2.movimentar();
        meuFoguete.animar('rocket_00');
        meuFoguete2.animar('jogador2_00');
 
        meteoro1.movimentar();
        meteoro2.movimentar();
        meteoro3.movimentar();
        meteoro4.movimentar();
        
        estrela1.mov_est();
        estrela2.mov_est();
        estrela3.mov_est();
        
        colisao();
        pontuacao();
        ver_fase();
        game_over();
 
    } else {
        somMotor.pause();
        somMotor.currentTime = 0;
        trilhaSonora.pause();
        trilhaSonora.currentTime = 0;
    }
}
 
function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}
 
main()