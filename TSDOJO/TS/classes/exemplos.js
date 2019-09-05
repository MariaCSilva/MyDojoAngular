var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    return Aluno;
}());
var aluno = new Aluno("Pedro Oliveira");
console.log(aluno.getNome()); // Pedro Oliveira
