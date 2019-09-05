class Pessoa{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
}

class Aluno extends Pessoa{
    registro:number;
    constructor(nome: string, registro:number){
        super(nome);
        this.registro=registro;
    }
}