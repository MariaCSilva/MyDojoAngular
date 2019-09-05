interface Pessoa{
    nome: string;
    idade?: number;
}

let pessoa: Pessoa;
pessoa.nome =  "Majo";

interface Coordenadas{
    readonly x: number;
    readonly y: number;
}

let ponto1 : Coordenadas = {x:10,y:20};