"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(cliente, agencia, numero, saldo) {
        this.cliente = cliente;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        var sacou = false;
        if (this.saldo >= valor) {
            this.saldo -= valor;
            sacou = true;
        }
        return sacou;
    };
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    Conta.prototype.transferir = function (valor, contaDestino) {
        var transferiu = false;
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            transferiu = true;
        }
        return transferiu;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
exports.Conta = Conta;
