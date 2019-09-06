import { ICliente } from './../interfaces/ICliente';
export class Cliente implements ICliente{
    nome: string;    
    cpf: string;
    email: string;
}