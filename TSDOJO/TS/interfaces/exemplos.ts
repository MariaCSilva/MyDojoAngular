interface Pessoa{
    nome: string;
}

class Aluno implements Pessoa{
    nome: string;
    constructor(nome:string){
        this.nome = nome;
    }
}


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
