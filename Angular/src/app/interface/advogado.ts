import {Cidade} from "./cidade";

export interface Advogado {
    id: number;
    numeroOAB: number;
    nome: string;
    cidade: Cidade;
}
