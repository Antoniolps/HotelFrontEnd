import { Guid } from "guid-typescript";

export interface Contato{
    id: Guid;
    telefone: string;
    email: string;
    customerId: Guid;
}