# 🚀 Space Race 2P - Desafio Estelar

**Desenvolvedor:** Matheus Orsi Reis  
**Product Owner:** Carlos Roberto da Silva Filho

---

## 📖 1. Visão Geral do Sistema

### Descrição
O **Space Race 2P** é um software de entretenimento do tipo game desenvolvido para navegadores modernos. Utilizando a tecnologia **HTML5 Canvas**, o jogo oferece uma experiência de corrida e sobrevivência com física de colisão em tempo real e suporte a dois jogadores simultâneos.

### Objetivo e Tema
O tema escolhido é a **Exploração Espacial**. O objetivo principal do jogador é pilotar um foguete em uma zona de asteroides, desviando de obstáculos (Meteoros) e coletando recursos (Estrelas). O jogo possui progressão de dificuldade automática conforme a pontuação aumenta.

### 🎮 Instruções de Jogabilidade (Manual)
* **Jogador 1 (Esquerda):** Teclas **W** (Subir) e **S** (Descer).
* **Jogador 2 (Direita):** Setas do teclado **UP** (Subir) e **DOWN** (Descer).
* **Coletáveis (Estrela):** Soma **5 pontos** ao placar.
* **Obstáculos (Meteoro):** Reduz **1 vida** ao colidir.

---

## ⚙️ 2. Especificações Técnicas e Regras de Negócio

### A. Requisitos Funcionais (RF)
* **RF01 - Movimentação:** Controle dos foguetes no eixo Y (Vertical) via teclado, capturado por eventos de 'keydown'.
* **RF02 - Sistema de Vidas:** Jogadores iniciam com 3 vidas; a detecção de colisão decrementa este valor na classe Foguete.
* **RF03 - Pontuação:** Placar dinâmico que contabiliza estrelas (+5) e sobrevivência a meteoros (+1).
* **RF04 - Coletáveis:** Classe 'Estrela' gera itens aleatórios que bonificam o jogador ao contato.
* **RF05 - Progressão de Fases:** Transição automática entre 3 níveis baseada na pontuação (100, 200 e 300 pontos).
* **RF06 - Interface (Telas):** Implementação de Menu Inicial, HUD de Jogo, Tela "Sobre" e Telas de Vitória/Derrota.

### B. Regras de Negócio (RN)
* **RN01 - Dificuldade Progressiva:** A cada fase, a velocidade dos meteoros aumenta (vel: 8, 10 e 12) via função 'ver_fase()'.
* **RN02 - Troca de Cenário:** O background do jogo é alterado dinamicamente para indicar a progressão entre as 3 fases.
* **RN03 - Condição de Vitória:** O jogador vence ao atingir 300 pontos com pelo menos 1 vida restante.
* **RN04 - Manual de Instruções:** Instruções de comando, sistema de vidas e pontuação exibidas na tela de menu.

### C. Requisitos Não Funcionais (RNF)
* **RNF01 - Tecnologia:** Desenvolvido em JavaScript puro (ES6+), sem frameworks externos.
* **RNF02 - Portabilidade:** Execução direta no navegador através da API HTML5 Canvas.
* **RNF03 - Usabilidade:** Layout fixo otimizado para a resolução de 1920 x 1080 px.
* **RNF04 - Desempenho:** Taxa de atualização estável de 60 FPS garantida pelo método 'requestAnimationFrame'.

---

## 💻 3. Instruções de Instalação e Execução

1. **Clonagem do Repositório:**
   ```bash
   git clone [https://github.com/MatheusOrsiReis/game_foguete.git](https://github.com/MatheusOrsiReis/game_foguete.git)

O Gemini disse
Aqui está o conteúdo completo e definitivo para o seu arquivo README.md, formatado apenas como texto simples dentro do bloco de código para facilitar a sua cópia.

Basta copiar tudo o que está abaixo:

Markdown
# 🚀 Space Race 2P - Desafio Estelar

**Desenvolvedor:** Matheus Orsi Reis  
**Product Owner:** [Insira o Nome do Seu Professor Aqui]

---

## 📖 1. Visão Geral do Sistema

### Descrição
O **Space Race 2P** é um software de entretenimento do tipo game desenvolvido para navegadores modernos. Utilizando a tecnologia **HTML5 Canvas**, o jogo oferece uma experiência de corrida e sobrevivência com física de colisão em tempo real e suporte a dois jogadores simultâneos.

### Objetivo e Tema
O tema escolhido é a **Exploração Espacial**. O objetivo principal do jogador é pilotar um foguete em uma zona de asteroides, desviando de obstáculos (Meteoros) e coletando recursos (Estrelas). O jogo possui progressão de dificuldade automática conforme a pontuação aumenta.

### 🎮 Instruções de Jogabilidade (Manual)
* **Jogador 1 (Esquerda):** Teclas **W** (Subir) e **S** (Descer).
* **Jogador 2 (Direita):** Setas do teclado **UP** (Subir) e **DOWN** (Descer).
* **Coletáveis (Estrela):** Soma **5 pontos** ao placar.
* **Obstáculos (Meteoro):** Reduz **1 vida** ao colidir.

---

## ⚙️ 2. Especificações Técnicas e Regras de Negócio

### A. Requisitos Funcionais (RF)
* **RF01 - Movimentação:** Controle dos foguetes no eixo Y (Vertical) via teclado, capturado por eventos de 'keydown'.
* **RF02 - Sistema de Vidas:** Jogadores iniciam com 3 vidas; a detecção de colisão decrementa este valor na classe Foguete.
* **RF03 - Pontuação:** Placar dinâmico que contabiliza estrelas (+5) e sobrevivência a meteoros (+1).
* **RF04 - Coletáveis:** Classe 'Estrela' gera itens aleatórios que bonificam o jogador ao contato.
* **RF05 - Progressão de Fases:** Transição automática entre 3 níveis baseada na pontuação (0, 100 e 200 pontos).
* **RF06 - Interface (Telas):** Implementação de Menu Inicial, HUD de Jogo, Tela "Sobre" e Telas de Vitória/Derrota.

### B. Regras de Negócio (RN)
* **RN01 - Dificuldade Progressiva:** A cada fase, a velocidade dos meteoros aumenta (vel: 8, 10 e 12) via função 'ver_fase()'.
* **RN02 - Troca de Cenário:** O background do jogo é alterado dinamicamente para indicar a progressão entre as 3 fases.
* **RN03 - Condição de Vitória:** O jogador vence ao atingir 300 pontos com pelo menos 1 vida restante.
* **RN04 - Manual de Instruções:** Instruções de comando, sistema de vidas e pontuação exibidas na tela de menu.

### C. Requisitos Não Funcionais (RNF)
* **RNF01 - Tecnologia:** Desenvolvido em JavaScript puro (ES6+), sem frameworks externos.
* **RNF02 - Portabilidade:** Execução direta no navegador através da API HTML5 Canvas.
* **RNF03 - Usabilidade:** Layout fixo otimizado para a resolução de 1920 x 1080 px.
* **RNF04 - Desempenho:** Taxa de atualização estável de 60 FPS garantida pelo método 'requestAnimationFrame'.

---

## 💻 3. Instruções de Instalação e Execução

1. **Clonagem do Repositório:**
   ```bash
   git clone [https://github.com/MatheusOrsiReis/game_foguete.git](https://github.com/MatheusOrsiReis/game_foguete.git)
   
Execução:
Abra o arquivo index.html diretamente em seu navegador ou utilize a extensão Live Server no VS Code.

📊 4. Modelagem e Documentação UML
O projeto segue a modelagem orientada a objetos com a seguinte documentação inclusa:

Diagrama de Casos de Uso: Representação das interações do Ator (Jogador) com as interfaces.

Diagrama de Classes: Estrutura de herança com a classe pai 'Obj' e classes filhas 'Foguete', 'Meteoro' e 'Estrela'.

Diagrama de Sequência: Fluxo temporal de detecção de colisão, resposta sonora e redução de vida.

🔗 Link de Produção (Vercel)
https://game-foguete.vercel.app/index.html

