# 🚀 Space Adventure 2P - Desafio Estelar

**Desenvolvedor:** Matheus Orsi Reis  
**Product Owner:** Carlos Roberto da Silva Filho

---

## 📖 1. Visão Geral do Sistema

### Descrição
O **Space Race 2P** é um software de entretenimento do tipo game desenvolvido para navegadores modernos. Utilizando a tecnologia **HTML5 Canvas**, o jogo oferece uma experiência de corrida e sobrevivência com física de colisão em tempo real e suporte a dois jogadores simultâneos.

### Objetivo e Tema
O tema escolhido é a **Exploração Espacial**. O objetivo principal do jogador é pilotar um foguete em uma zona de asteroides, desviando de obstáculos (Meteoros) e coletando recursos (Estrelas). O jogo possui progressão de dificuldade automática conforme a pontuação aumenta.

### 🎮 Instruções de Jogabilidade (Manual)
* **Jogador 2 (Esquerda):** Teclas **W** (Subir) e **S** (Descer).
* **Jogador 1 (Direita):** Setas do teclado **UP** (Subir) e **DOWN** (Descer).
* **Coletáveis (Estrela):** Soma **5 pontos** ao placar.
* **Obstáculos (Meteoro):** Reduz **1 vida** ao colidir.

---

## ⚙️ 2. Especificações Técnicas e Regras de Negócio

### A. Requisitos Funcionais (Funcoes do Sistema)

* **RF01 - Iniciar Jogo:** Inicia o ciclo de vida do game via funcao **main()**.
* **RF02 - Movimentacao:** Processa comandos de teclado via funcoes **movimentar()** e **mov_est()**.
* **RF03 - Deteccao de Colisao:** Verifica interseccao de objetos via funcao **colisao()**.
* **RF04 - Renderizacao:** Desenha componentes graficos via funcoes **desenha()** e **desenha_menu()**.
* **RF05 - Controle de Fases:** Gerencia a transicao de niveis via funcao **ver_fase()**.
* **RF06 - Sistema de Coletaveis:** Gera e gerencia itens de pontuacao via classe **Estrela**.
* **RF07 - Interface de Creditos:** Exibe dados do desenvolvedor e PO via tela **Sobre**.
* **RF08 - Finalizacao:** Processa o fim do jogo e telas de resultado via funcao **game_over()**.

### B. Regras de Negocio (Logica e Condicoes)

* **RN01 - Pontuacao:** Estrelas valem 5 pontos e sobrevivencia a meteoros vale 1 ponto.
* **RN02 - Sistema de Vidas:** Colisao com obstaculo remove 1 vida do jogador (Propriedade **this.vida**).
* **RN03 - Dificuldade Progressiva:** Aumento de velocidade obrigatorio nos marcos de 100 e 200 pontos (Variavel **vel_meteoro**).
* **RN04 - Troca de Cenario:** Alteracao obrigatoria do background a cada fase alcancada.
* **RN05 - Condicao de Vitoria:** Necessario atingir 300 pontos com pelo menos 1 vida restante.
* **RN06 - Condicao de Derrota:** Ocorre automaticamente ao zerar o contador de vidas, chamando a tela de Game Over.

### C. Requisitos Nao Funcionais (Desempenho e Tecnologia)

* **RNF01 - Taxa de Atualizacao:** Execucao estavel em 60 FPS via **requestAnimationFrame**.
* **RNF02 - Tecnologia Padrao:** Uso exclusivo de JavaScript ES6+ e HTML5 Canvas (Sem bibliotecas).
* **RNF03 - Resolucao:** Interface travada em 1920x1080 pixels (Resolucao Full HD).
* **RNF04 - Portabilidade:** O sistema deve rodar diretamente no navegador (Web-based).

---

## 💻 3. Instruções de Instalação e Execução

1. **Clonagem do Repositório:**
   ```bash
   git clone https://github.com/MatheusOrsiReis/game_foguete.git
