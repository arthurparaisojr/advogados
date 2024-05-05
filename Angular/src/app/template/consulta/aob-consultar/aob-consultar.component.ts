import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../interface/usuario";
import {UsuarioService} from "../../../service/usuario.service";
import {Advogado} from "../../../interface/advogado";
import {AobService} from "../../../service/aob.service";

@Component({
    selector: 'app-aob-consultar',
    templateUrl: "aob-consultar.component.html",
    styleUrl: "aob-consultar.component.sass"
})
export class AobConsultarComponent implements OnInit {
    listaAdvogados: Advogado[] = [];

    constructor(private aobService: AobService) {}

    ngOnInit() {
        this.aobService.getAllAdvogado().subscribe({
            next: (res) => {
                this.listaAdvogados = res;
            },
            error: (err) => {
                alert("Falha ao obter usuários.");
            }
        });
    }

    deleteUsuario(id: string) {
        this.aobService.deleteAdvogado(id).subscribe({
            next: (res) => {
                alert("Usuário excluído com sucesso!");
            },
            error: (err) => {
                alert("Falha ao deletar usuário.");
                console.error(err);
            }
        });
    }
}
