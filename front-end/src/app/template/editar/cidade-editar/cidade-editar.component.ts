import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {CidadeService} from "../../../service/cidade.service";

@Component({
    selector: 'app-cidade-editar',
    templateUrl: "./cidade-editar.component.html",
    styleUrl: "./cidade-editar.component.sass"
})
export class CidadeEditarComponent implements OnInit {
    // @ts-ignore
    cidadeForm: FormGroup;
    cidadeId: string = "";

    constructor(private fb: FormBuilder, private cidadeService: CidadeService) {
    }

    ngOnInit() {


        this.cidadeService.getCidadeById(this.cidadeId).subscribe({
            next: (res) => {
                this.cidadeForm = this.fb.group({
                    namecity: [res.nomeCidade, [Validators.required, Validators.minLength(2)]],
                    numbercity: [res.numero, [Validators.required]],
                });
            },
            error: (err) => alert("Cidade solicitada não foi encontrada")
        });
    }

    onSubmit() {
        if (this.cidadeForm.valid) {
            this.cidadeService.atualizarCidade(this.cidadeForm.value).subscribe(
                response => {
                    console.log('Cidade registrada com sucesso!', response);
                },
                error => {
                    console.error('Falha ao registrar', error);
                }
            );
        }
    }
}
