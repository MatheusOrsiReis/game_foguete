let des = document.getElementById('des').getContext('2d')

// --- OBJETOS ---
let meteoro1 = new Meteoro(1300, 325, 80, 50, './img/meteoro.png')
let meteoro2 = new Meteoro(1500, 125, 80, 50, './img/meteoro.png')
let meteoro3 = new Meteoro(1700, 400, 80, 50, './img/meteoro.png')

// Substitua as linhas das 'estrada' ou 'estrela1, 2, 3' por esta:
let estrela1 = new Estrelas(1400, 100, 40, 40, './img/estrela.png.png')
let estrela2 = new Estrelas(1700, 300, 40, 40, './img/estrela.png.png')
let estrela3 = new Estrelas(2000, 500, 40, 40, './img/estrela.png.png')

let meuFoguete = new Foguete(100, 325, 80, 50, './img/rocket_001_bg.png')

let t1 = new Texto()
let t2 = new Texto()
let fase_txt = new Texto()

// Sons removidos para evitar erros de 404
let jogar = true
let fase = 1

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        meuFoguete.dir -= 10
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        meuFoguete.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp' || e.key === 's' || e.key === 'ArrowDown') {
        meuFoguete.dir = 0
    }
})

function game_over() {
    if (meuFoguete.vida <= 0) {
        jogar = false
    }
}

function ver_fase() { 
    if (meuFoguete.pontos > 100 && fase === 1) {
        fase = 2
        meteoro1.vel = 6
        meteoro2.vel = 6
        meteoro3.vel = 6
    } else if (meuFoguete.pontos > 200 && fase === 2) {
        fase = 3
        meteoro1.vel = 8
        meteoro2.vel = 8
        meteoro3.vel = 8
    }
}

function colisao() {
    // Colisão com os Meteoros (perde vida)
    if (meuFoguete.colisao(meteoro1)) {
        meteoro1.recomecar()
        meuFoguete.vida -= 1
    }
    if (meuFoguete.colisao(meteoro2)) {
        meteoro2.recomecar()
        meuFoguete.vida -= 1
    }
    if (meuFoguete.colisao(meteoro3)) {
        meteoro3.recomecar()
        meuFoguete.vida -= 1
    }

    if (meuFoguete.colisao(estrela1)) {
        meuFoguete.pontos += 5
        estrela1.recomecar()
    }
    if (meuFoguete.colisao(estrela2)) {
        meuFoguete.pontos += 5
        estrela2.recomecar()
    }
    if (meuFoguete.colisao(estrela3)) {
        meuFoguete.pontos += 5
        estrela3.recomecar()
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
}

function desenha() {
    if (jogar) {
        estrela1.desenhar()
        estrela2.desenhar()
        estrela3.desenhar()
        meteoro1.desenhar()
        meteoro2.desenhar()
        meteoro3.desenhar()
        meuFoguete.desenhar()
        
        t1.desenhar('Pontos: ' + meuFoguete.pontos, 1000, 40, 'yellow', '18px "Press Start 2P"'); //essa fonte vem de fora, por isso o import la no css
        t2.desenhar('Vidas: ' + meuFoguete.vida, 40, 40, 'red', '18px "Press Start 2P"');
        fase_txt.desenhar('Fase: ' + fase, 550, 40, 'white', '18px "Press Start 2P"');
    } else {
        t1.desenhar('GAME OVER', 450, 350, 'yellow', '40px "Press Start 2P"');
        t2.desenhar('Pontuação Final: ' + meuFoguete.pontos, 480, 400, 'white', '16px "Press Start 2P"');
    }
 }


function atualiza() {
    if (jogar) {
        meuFoguete.movimentar()
        meuFoguete.animar('rocket_00')
        meteoro1.movimentar()
        meteoro2.movimentar()
        meteoro3.movimentar()
        estrela1.mov_est()
        estrela2.mov_est()
        estrela3.mov_est()
        
        colisao()
        pontuacao()
        ver_fase()
        game_over()
    }
}

function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()