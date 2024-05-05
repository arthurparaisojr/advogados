import {Component, OnInit} from '@angular/core';
import {AobService} from "../../../service/aob.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-aob-editar',
    templateUrl: "./aob-editar.component.html",
    styleUrl: "./aob-editar.component.sass"
})
export class AobEditarComponent implements OnInit {
// @ts-ignore
    advogadoForm: FormGroup;
    advogadoId: string = "";

    constructor(private fb: FormBuilder, private aobService: AobService) {
    }

    ngOnInit() {
        this.aobService.getAdvogadoById(this.advogadoId).subscribe({
            next: (res) => {
                this.advogadoForm = this.fb.group({
                    id: [res.id, [Validators.required]],
                    nome: [res.nome, [Validators.required, Validators.minLength(2)]],
                    numeroOAB: [res.numeroOAB, [Validators.required]],
                    cidade: [res.cidade, [Validators.required]]
                });
            },
            error: (err) => alert("Cidade solicitada não foi encontrada")
        });
    }

    onSubmit() {
        if (this.advogadoForm.valid) {
            this.aobService.atualizarAdvogado(this.advogadoForm.value).subscribe(
                response => {
                    console.log('Atualizado com sucesso!', response);
                },
                error => {
                    console.error('Falha ao atualizar', error);
                }
            );
        }
    }
}
