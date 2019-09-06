import { Conta } from './classes/Conta';
import { Cliente } from './classes/Cliente';



let cliente = new Cliente();
    cliente.nome = "Majo Silva";
    cliente.cpf = "123.123.123.23";
    cliente.email = "meu.email@gmail.com";
let conta1 =  new Conta(cliente,"254","5667",0 );
let conta2 =  new Conta(cliente,"333","5678",0 );

console.log(conta1.getSaldo());
console.log(conta2.getSaldo());


conta1.depositar(10000);
console.log(conta1.getSaldo());
conta1.sacar(100);
console.log(conta1.getSaldo());

conta1.transferir(200, conta2);
console.log(conta1.getSaldo());
console.log(conta2.getSaldo());

