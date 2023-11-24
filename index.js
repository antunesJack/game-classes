class hero {
    constructor(nome, idade, tipo, ataque){
        this.name = nome
        this.age = idade
        this.type = tipo
        this.attack = ataque
    }
    
    atacar(){
    	console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`);
    }
}

let heroi1 = new hero ("Gandalf", 150, "mago", "magia");
let heroi2 = new hero ("Conan", 40, "guerreiro", "espada");
let heroi3 = new hero ("Dalai", 100, "monge", "artes marciais");
let heroi4 = new hero ("Hattori", 20, "ninja", "shuriken");


heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
