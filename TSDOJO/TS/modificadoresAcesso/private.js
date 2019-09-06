var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.dizerNome = function () {
        alert("Meu nome \u00E9 " + this.nome + "!");
    };
    return Animal;
}());
//new Animal("Floquinho").nome;//Erro - nome é privado
new Animal("Floquinho").dizerNome();
