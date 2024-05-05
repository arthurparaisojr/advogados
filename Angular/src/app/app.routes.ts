import {Routes} from '@angular/router';
import {AobComponent} from "./template/cadastro/aob/aob.component";
import {UsuarioComponent} from "./template/cadastro/usuario/usuario.component";
import {UsuarioEditarComponent} from "./template/editar/usuario-editar/usuario-editar.component";
import {UsuarioConsultarComponent} from "./template/consulta/usuario-consultar/usuario-consultar.component";
import {CidadeConsultarComponent} from "./template/consulta/cidade-consultar/cidade-consultar.component";
import {AobConsultarComponent} from "./template/consulta/aob-consultar/aob-consultar.component";
import {AobEditarComponent} from "./template/editar/aob-editar/aob-editar.component";
import {CidadeEditarComponent} from "./template/editar/cidade-editar/cidade-editar.component";

export const routes: Routes = [
    {
        path: "cadastro", children: [
            {path: 'usuario', component: UsuarioComponent},
            {path: 'aob', component: AobComponent},
            {path: 'cidade', component: UsuarioComponent},
        ]
    },
    {
        path: "editar", children: [
            {path: 'usuario/:id', component: UsuarioEditarComponent},
            {path: 'aob/:id', component: AobEditarComponent},
            {path: 'cidade/:id', component: CidadeEditarComponent},
        ]
    },
    {
        path: "lista", children: [
            {path: 'usuario', component: UsuarioConsultarComponent},
            {path: 'aob', component: AobConsultarComponent},
            {path: 'cidade', component: CidadeConsultarComponent},
        ]
    },
];
