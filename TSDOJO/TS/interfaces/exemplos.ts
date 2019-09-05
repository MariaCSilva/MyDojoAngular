interface Pessoa{
    nome: string;
}

interface Aluno extends Pessoa{
    registro: number;
}

let aluno = <Aluno>{} // ou let aluno: Aluno;

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
