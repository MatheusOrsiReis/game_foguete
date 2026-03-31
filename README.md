# 🚀 Space Race 2P - Desafio Estelar

**Desenvolvedor:** Matheus Orsi Reis  
**Product Owner:** [Insira o Nome do Seu Professor Aqui]

![Banner do Jogo](https://game-foguete.vercel.app/img/fundo1.png)

---

## 📖 1. Visão Geral do Sistema

### Descrição
O **Space Race 2P** é um software de entretenimento do tipo game desenvolvido para navegadores modernos. Utilizando a tecnologia **HTML5 Canvas**, o jogo oferece uma experiência de corrida e sobrevivência com física de colisão em tempo real e suporte a dois jogadores.

### Objetivo e Tema
O tema escolhido é a **Exploração Espacial**. O objetivo principal do jogador é pilotar um foguete em uma zona de asteroides, desviando de obstáculos (Meteoros) e coletando recursos (Estrelas). O jogo possui progressão de dificuldade automática conforme a pontuação aumenta.

### 🎮 Instruções de Jogabilidade (Manual)
O jogo é controlado inteiramente pelo teclado:
* **Jogador 1 (Esquerda):** Teclas **W** (Subir) e **S** (Descer).
* **Jogador 2 (Direita):** Setas do teclado **UP** (Subir) e **DOWN** (Descer).

**Elementos do Jogo:**
* ⭐ **Estrela:** Item coletável que soma **5 pontos** ao placar individual.
* ☄️ **Meteoro:** Obstáculo hostil. A colisão resulta na perda de **1 vida**.
* 🚀 **Sobrevivência:** Cada meteoro que atravessa a tela sem atingir o jogador soma **1 ponto** de bônus.

### ⚙️ Especificações Técnicas (Regras de Negócio)
* **Sistema de Vidas (RF02):** Cada jogador inicia com 3 vidas. O jogo termina se as vidas chegarem a 0.
* **Progressão de Fases (RF05/RN01):**
    * **Fase 1 (Cinturão de Órion):** Velocidade base dos meteoros (0 a 10 pontos).
    * **Fase 2 (Nebulosa de Andrômeda):** Velocidade aumentada para 10 (10 a 200 pontos).
    * **Fase 3 (Buraco Negro):** Velocidade máxima 12 + Mudança visual de cenário (200 a 300 pontos).
* **Vitória (RN03):** O jogador vence ao atingir a meta de **300 pontos** com pelo menos 1 vida restante.

### 👨‍💻 Créditos e "Sobre" (RF06)
* **Desenvolvedor:** Matheus Orsi Reis
* **Product Owner (Orientador):** [Nome do Professor]
* **Tecnologias:** JavaScript ES6+, HTML5 Canvas.

### 🔗 Link de Produção
[Acesse o jogo aqui: game-foguete.vercel.app](https://game-foguete.vercel.app/index.html)

---

## 💻 2. Instruções de Instalação e Execução

Para rodar o projeto localmente em sua máquina, siga os passos abaixo:

### 1. Clonagem do Repositório
```bash

git clone [https://github.com/MatheusOrsiReis/game_foguete.git](https://github.com/MatheusOrsiReis/game_foguete.git)

2. Instalação de Dependências
Este projeto foi desenvolvido utilizando JavaScript Vanilla (ES6+), portanto não possui dependências externas. Ele roda nativamente em qualquer navegador moderno.

3. Execução do Projeto
Navegue até a pasta do projeto.

Abra o arquivo index.html diretamente em seu navegador.

Recomendação: Utilize a extensão Live Server no VS Code.

🛠️ Requisitos Não Funcionais (RNF)
RNF01 (Tecnologia): Desenvolvido em JavaScript puro (sem transpilação).

RNF02 (Portabilidade): Execução direta via Browser (HTML5).

RNF03 (Usabilidade): Interface projetada para resolução 1920x1080 px.

RNF04 (Desempenho): Taxa de atualização estável em 60 FPS via requestAnimationFrame.

📊 Modelagem do Sistema (Documentação UML)
O projeto segue a modelagem orientada a objetos conforme os diagramas abaixo:

Diagrama de Casos de Uso: Representa as interações do jogador com o menu e gameplay.

Diagrama de Classes: Estrutura de herança a partir da classe base Obj.

Diagrama de Sequência: Demonstra o ciclo de atualização e detecção de colisão.
