import { Guid } from "guid-typescript";

export interface Endereco{
    id: Guid;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    idCliente: Guid;
}