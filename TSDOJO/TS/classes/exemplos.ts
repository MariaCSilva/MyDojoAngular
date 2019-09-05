class Aluno{
    private nome: string;
    constructor(nome:string){
        this.nome = nome;
    }
    public getNome():string{
        return this.nome;
    }
}

let aluno: Aluno = new Aluno("Pedro Oliveira");
console.log(aluno.getNome()); // Pedro Oliveira