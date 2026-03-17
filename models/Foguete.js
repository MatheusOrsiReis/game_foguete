class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenhar(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }

    // Usado para as estrelas ou aliens se quiser
    des_quad(){
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }
}

class Foguete extends Obj{
    dir = 0
    vida = 3 // Conforme você pediu
    pontos = 0
    frame = 1
    tempo = 0

    movimentar(){
        this.y += this.dir
        // Limites para o foguete não sumir da tela
        if(this.y < 0) this.y = 0
        if(this.y > 650) this.y = 650
    }

    colisao(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }
        return false
    }

    // Se o inimigo passar pelo foguete, ganha ponto
    passou(objeto){
        if(objeto.x <= -100){
            return true
        }
        return false
    }

    animar(nomeBase){
        this.tempo += 1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame += 1
        }
        if(this.frame > 4) this.frame = 1
        
        // Monta o nome: ./img/ + nomeBase + numero + _bg.png
        this.a = "./img/" + nomeBase + this.frame + "_bg.png" 
    }
}

class Meteoro extends Obj{
    vel = 2
    recomecar(){
        this.x = 1300
        this.y = Math.floor(Math.random() * (650 - 50) + 50)
    }

    movimentar(){
        this.x -= this.vel
        if(this.x <= -200) this.recomecar()
    }
}

class Texto{
    desenhar(valor, x, y, cor, fonte){
        des.fillStyle = cor
        des.font = fonte
        des.fillText(valor, x, y)
    }
}

class Estrelas extends Obj {
    vel = Math.floor(Math.random() * (6 - 2) + 2) // Começa com uma velocidade aleatória

    recomecar() {
        this.x = 1300 
        this.y = Math.floor(Math.random() * (650 - 50) + 50) 
        // Toda vez que ela renascer, ela ganha uma velocidade nova entre 2 e 8
        this.vel = Math.floor(Math.random() * (8 - 2) + 2) 
    }

    mov_est() {
        this.x -= this.vel
        if (this.x <= -100) {
            this.recomecar()
        }
    }
}