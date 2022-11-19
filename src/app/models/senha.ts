import { Guid } from "guid-typescript";

export interface Senha {
    id: Guid;
    senha: string;
    CustomerId: Guid;
}
