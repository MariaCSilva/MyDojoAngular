import { ICliente } from './../interfaces/ICliente';
import { IConta } from './../interfaces/IConta';
export class Conta implements IConta {
    cliente: ICliente;
    agencia: string;
    numero: string;
    saldo: number;
    constructor
        (
            cliente: ICliente,
            agencia: string,
            numero: string,
            saldo:number

        ) 
        
        {
            this.cliente = cliente;
            this.agencia = agencia;
            this.numero = numero;
            this.saldo = saldo;
        }

    sacar(valor: number): boolean {
        let sacou: boolean = false;
        if(this.saldo>=valor){
            this.saldo-=valor;
            sacou = true;
        }
        return sacou;
    }
    depositar(valor: number): void {
        if(valor>0){
           this.saldo+=valor; 
        }
    }
    transferir(valor: number, contaDestino: IConta): boolean {
        let transferiu = false;
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            transferiu = true;
        }
        return transferiu;
    }
    getSaldo(): number {
        return this.saldo;
    }

}