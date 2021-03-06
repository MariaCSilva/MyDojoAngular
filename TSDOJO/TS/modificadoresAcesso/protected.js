var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, setor) {
        var _this = _super.call(this, nome) || this;
        _this.setor = setor;
        return _this;
    }
    Funcionario.prototype.apresentacao = function () {
        return "Ol\u00E1! Meu nome \u00E9 " + this.nome + " e eu trabalho no setor " + this.setor + ".";
    };
    return Funcionario;
}(Pessoa));
var func = new Funcionario("Jose", "Vendas");
console.log(func.apresentacao());
//console.log(jose.nome);//error
