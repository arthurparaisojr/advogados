import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsuarioService} from "../../../service/usuario.service";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-usuario',
    templateUrl: "./usuario.component.html",
    styleUrl: "./usuario.component.sass"
})
export class UsuarioComponent implements OnInit {
    // @ts-ignore
    usuarioForm: FormGroup;

    constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    }

    ngOnInit() {
        this.usuarioForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {validator: this.passwordMatchValidator});
    }

    passwordMatchValidator(form: FormGroup) {
        return form.get('password')!.value === form.get('confirmPassword')!.value ? null : {'mismatch': true};
    }

    onSubmit() {
        if (this.usuarioForm.valid) {
            this.usuarioService.salvarUsuario(this.usuarioForm.value).subscribe(
                response => {
                    console.log('User registered', response);
                },
                error => {
                    console.error('Registration failed', error);
                }
            );
        }
    }
}
