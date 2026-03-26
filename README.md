SPACE ADVENTURE

Um jogo de corrida espacial infinita desenvolvido com HTML5 Canvas e JavaScript. O foco é a competição local entre dois jogadores para ver quem sobrevive mais tempo e coleta mais estrelas enquanto desvia de meteoros.

🚀 Funcionalidades
Modo Local para 2 Jogadores: Competam simultaneamente no mesmo teclado.

Sistema de Fases: O jogo aumenta a dificuldade e muda o cenário de fundo automaticamente ao atingir certas pontuações (10 e 200 pontos).

Elementos Interativos:

Estrelas: Coletar uma estrela garante +5 pontos.

Meteoros: Colidir com um meteoro remove 1 vida.

Efeitos Sonoros: Trilhas sonoras em loop, sons de motor, explosões e coleta de itens.

Condição de Vitória: Vence quem atingir 300 pontos primeiro ou se o oponente perder todas as vidas.

🎮 Controles
Jogador 1 (Foguete 1)
Seta para Cima: Mover para cima.

Seta para Baixo: Mover para baixo.

Jogador 2 (Foguete 2)
Tecla W: Mover para cima.

Tecla S: Mover para baixo.

🛠️ Estrutura do Código
O projeto segue uma estrutura baseada em loops de renderização e atualização:

main(): O coração do jogo, utiliza requestAnimationFrame para manter 60 FPS.

desenha(): Gerencia a renderização do fundo, dos personagens, obstáculos e da interface (HUD).

atualiza(): Processa as colisões, movimentação, troca de fases e verificação de Game Over.

ver_fase(): Monitora a pontuação para realizar a troca dinâmica do src da imagem de fundo e aumentar a velocidade dos obstáculos.

📂 Pré-requisitos de Arquivos
Para que o jogo funcione corretamente, a estrutura de pastas deve conter:

Plaintext
/
├── index.html
├── script.js (este código)
├── img/
│   ├── galaxiaanimada.gif
│   ├── galaxia.png
│   ├── fundofinalinicial.jpg
│   ├── meteoro.png
│   ├── estrela.png.png
│   ├── rocket_001_bg.png
│   └── jogador2_001_bg.png
└── audios/
    ├── coleta_estrelas.mp3
    ├── colisao_meteoro.mp3
    ├── motor_foguete.mp3
    └── trilha_jogo.mp3
