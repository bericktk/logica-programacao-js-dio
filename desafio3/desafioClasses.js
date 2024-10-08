class hero{
    constructor(nome, idade, tipo){
        this.nome= nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo == 'mago'){
            console.log(`O ${this.tipo} atacou usando magia`);
        }else if(this.tipo == 'guerreiro'){
            console.log(`O ${this.tipo} atacou usando espada`);
        }else if(this.tipo == 'monge'){
            console.log(`O ${this.tipo} atacou usando artes marciais`);
        }else if(this.tipo == 'ninja'){
            console.log(`O ${this.tipo} atacou usando shuriken`);
        }else{
            console.log( "O tipo de heróis inserido é inválido!");
            }
        
    }
}

let heroi = new hero('Bruno', 25, 'guerrero')
let heroi2 = new hero('Erick', 25, 'monge')
let heroi3 = new hero('Ferreira', 25, 'ninja')
heroi.atacar()
heroi2.atacar()
heroi3.atacar()
