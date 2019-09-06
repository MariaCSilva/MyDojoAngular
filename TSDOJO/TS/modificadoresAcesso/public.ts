class Animal{
    public nome: string;
    public constructor(nome: string){
        this.nome =nome;
    }
    public dizerNome(){
        alert(`Meu nome é ${this.nome}!`);
    }
}