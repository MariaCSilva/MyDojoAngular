interface Pessoa{
    nome: string;
    idade: number;
}

let pessoa: Pessoa;
pessoa.nome =  "Majo";
//Erro de checagem de tipo
//pessoa.idade = "Silva";