class Animal {
    private nome: string;
    public constructor(nome: string){
        this.nome = nome;
    }
    public dizerNome(){
        alert(`Meu nome é ${this.nome}!`);
    }
}

//new Animal("Floquinho").nome;//Erro - nome é privado
new Animal("Floquinho").dizerNome();