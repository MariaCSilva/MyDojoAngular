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

interface Potencia{
    (numero:number, potencia:number):number;
}

let potencia: Potencia;
potencia = function(numero:number, potencia:number){
    let resultado  = Math.pow(numero,potencia);
    return resultado;
}

let resultado =  potencia(2,4);
console.log(resultado); //16