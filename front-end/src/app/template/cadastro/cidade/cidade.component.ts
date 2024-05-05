import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {CidadeService} from "../../../service/cidade.service";

@Component({
    selector: 'app-cidade',
    templateUrl: "./cidade.component.html",
    styleUrl: "./cidade.component.sass"
})
export class CidadeComponent implements OnInit {
    // @ts-ignore
    cidadeForm: FormGroup;

    constructor(private fb: FormBuilder, private cidadeService: CidadeService) {
    }

    ngOnInit() {
        this.cidadeForm = this.fb.group({
            namecity: ['', [Validators.required, Validators.minLength(2)]],
            numbercity: ['', [Validators.required]],
        });
    }

    onSubmit() {
        if (this.cidadeForm.valid) {
            this.cidadeService.salvarCidade(this.cidadeForm.value).subscribe(
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
