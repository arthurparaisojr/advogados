import {Component} from '@angular/core';
import {Usuario} from "../../../interface/usuario";
import {UsuarioService} from "../../../service/usuario.service";
import {CidadeService} from "../../../service/cidade.service";
import {Cidade} from "../../../interface/cidade";

@Component({
    selector: 'app-cidade-consultar',
    templateUrl: "./cidade-consultar.component.html",
    styleUrl: "./cidade-consultar.component.sass"
})
export class CidadeConsultarComponent {
    listCidades: Cidade[] = [];

    constructor(private usuarioService: CidadeService) {}

    ngOnInit() {
        this.usuarioService.getAllCidade().subscribe({
            next: (res) => {
                this.listCidades = res;
            },
            error: (err) => {
                alert("Falha ao obter usuários.");
            }
        });
    }

    deleteUsuario(id: string) {
        this.usuarioService.deleteCidade(id).subscribe({
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
