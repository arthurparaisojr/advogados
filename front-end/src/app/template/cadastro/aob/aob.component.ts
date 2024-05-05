import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AobService} from "../../../service/aob.service";

@Component({
    selector: 'app-aob',
    templateUrl: "./aob.component.html",
    styleUrl: "./aob.component.sass"
})
export class AobComponent implements OnInit {
    // @ts-ignore
    lawyerForm: FormGroup;

    constructor(private fb: FormBuilder, private lawyerService: AobService) {
    }

    ngOnInit() {
        this.lawyerForm = this.fb.group({
            oabNumber: ['', [Validators.required]],
            name: ['', [Validators.required, Validators.minLength(2)]],
            cityId: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.lawyerForm.valid) {
        }
    }
}
