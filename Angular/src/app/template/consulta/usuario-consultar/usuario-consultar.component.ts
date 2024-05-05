import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../interface/usuario";
import { UsuarioService } from "../../../service/usuario.service";

@Component({
    selector: 'app-usuario-consultar',
    templateUrl: "./usuario-consultar.component.html",
    styleUrls: ["./usuario-consultar.component.sass"]
})
export class UsuarioConsultarComponent implements OnInit {
    listUsuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit() {
        this.usuarioService.getAllUsuario().subscribe({
            next: (res) => {
                this.listUsuarios = res;
            },
            error: (err) => {
                alert("Falha ao obter usuários.");
            }
        });
    }

    deleteUsuario(id: string) {
        this.usuarioService.deleteUsuario(id).subscribe({
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
