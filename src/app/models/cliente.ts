import { Guid } from "guid-typescript";

export interface Cliente {
    id: Guid;
    nome: string;
    cpf: string;
    rg: string;
}
