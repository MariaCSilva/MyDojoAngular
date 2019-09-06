class Pessoa{
    protected nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
}

class Funcionario extends Pessoa{
    private setor: string;

    constructor(nome: string, setor: string){
        super(nome);
        this.setor = setor;
    }

    public apresentacao(){
        return `Olá! Meu nome é ${this.nome} e eu trabalho no setor ${this.setor}.`;
    }
}

let func = new Funcionario("Jose", "Vendas");
console.log(func.apresentacao());
//console.log(jose.nome);//error
;