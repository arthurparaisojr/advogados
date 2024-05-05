import {Injectable} from '@angular/core';
import {Usuario} from "../interface/usuario";
import {Cidade} from "../interface/cidade";

@Injectable({
    providedIn: 'root'
})
export class MockService {
    listaUsuarios: Usuario[] = []
    listaCidade: Cidade[] = []

    constructor() {
    }
}
