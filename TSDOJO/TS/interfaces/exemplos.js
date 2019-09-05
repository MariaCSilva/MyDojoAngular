var aluno = {}; // ou let aluno: Aluno;
var ponto1 = { x: 10, y: 20 };
var potencia;
potencia = function (numero, potencia) {
    var resultado = Math.pow(numero, potencia);
    return resultado;
};
var resultado = potencia(2, 4);
console.log(resultado); //16
