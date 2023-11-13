class hero{
    constructor(name, type){
        this.name = name
        this.type = type
    }

    attack(){
        if(this.type === "Guerreiro" || this.type === "guerreiro"){
            console.log(`O herói ${this.name} do tipo ${this.type}, atacou usando espada`)
        }else if(this.type === "Mago" || this.type === "mago"){
            console.log(`O herói ${this.name} do tipo ${this.type}, atacou usando magia`)
        }else if(this.type === "Monge" || this.type === "monge"){
            console.log(`O herói ${this.name} do tipo ${this.type}, atacou usando artes marciais`)
        }else if(this.type === "Ninja" || this.type === "ninja"){
            console.log(`O herói ${this.name} do tipo ${this.type}, atacou usando shuriken`)
        }else{
            console.log("Insira um tipo de habilidade válida e tente novamente")
        }
    }
}

let liuKang = new hero("Liu Kang", "ninja")
liuKang.attack()