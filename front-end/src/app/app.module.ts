import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioConsultarComponent} from "./template/consulta/usuario-consultar/usuario-consultar.component";
import {UsuarioEditarComponent} from "./template/editar/usuario-editar/usuario-editar.component";
import {UsuarioComponent} from "./template/cadastro/usuario/usuario.component";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {CidadeComponent} from "./template/cadastro/cidade/cidade.component";
import {CidadeEditarComponent} from "./template/editar/cidade-editar/cidade-editar.component";
import {CidadeConsultarComponent} from "./template/consulta/cidade-consultar/cidade-consultar.component";
import {AobComponent} from "./template/cadastro/aob/aob.component";
import {AobEditarComponent} from "./template/editar/aob-editar/aob-editar.component";
import {AobConsultarComponent} from "./template/consulta/aob-consultar/aob-consultar.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";



@NgModule({
  declarations: [
      UsuarioConsultarComponent,
      UsuarioEditarComponent,
      UsuarioComponent,

      CidadeComponent,
      CidadeEditarComponent,
      CidadeConsultarComponent,

      AobComponent,
      AobEditarComponent,
      AobConsultarComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        MatButton,
        MatPaginator,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormField,
        MatFormField,
        MatFormField,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatInput,
        MatInput,
        MatInput,
    ]
})
export class AppModule { }
