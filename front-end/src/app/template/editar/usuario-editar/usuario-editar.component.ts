import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsuarioService} from "../../../service/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MockService} from "../../../mock/mock.service";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-usuario-editar',
    templateUrl: "./usuario-editar.component.html",
    styleUrl: "./usuario-editar.component.sass"
})
export class UsuarioEditarComponent implements OnInit {
// @ts-ignore
    usuarioForm: FormGroup;
    usuarioId: string = "";

    constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private router: Router, public mockService: MockService) {
    }

    ngOnInit() {


        this.usuarioService.getUsuarioById(this.usuarioId).subscribe({
            next: (res) => {
                this.usuarioForm = this.fb.group({
                    name: [res.name, [Validators.required, Validators.minLength(2)]],
                    email: [res.email, [Validators.required, Validators.email]],
                    currentPassword: [res.password, [Validators.required]],
                    password: ['', [Validators.required, Validators.minLength(6)]],
                    confirmPassword: ['', Validators.required]
                }, {validator: this.passwordMatchValidator});
            },
            error: (err) => alert("Falha ao obter usuario a ser editado.")
        });
    }

    passwordMatchValidator(form: FormGroup) {
        return (form.get('password')!.value == form.get('confirmPassword')!.value) && form.get('password')!.value != form.get('currentPassword')!.value ? null : {'mismatch': true};
    }

    onSubmit() {
        if (this.usuarioForm.valid) {
            this.usuarioService.atualizarUsuario(this.usuarioForm.value).subscribe(
                response => {
                    console.log('Usuario registrado', response);
                },
                error => {
                    console.error('Falha no registro', error);
                }
            );
        }
    }
}
