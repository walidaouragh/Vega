import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFeature } from '../_types/IFeature';
import { VehicleService } from '../_services/vehicle-service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    constructor(
        private vehicleService: VehicleService,
        private toaster: ToasterService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    public form: FormGroup;
    public errorMessage: string;
    public isSubmitted: boolean = false;
    public isOpen = false;
    public features: IFeature[];

    ngOnInit() {
        this.getFeatures();
        this.createForm();
    }

    public createVehicle(form: any): void {
        this.isSubmitted = true;
        this.vehicleService.createVehicle(form.value).subscribe(
            () => {
                this.toaster.pop('success', 'Success', 'Vehicle added');
                this.router.navigate(['/']);
            },
            (error: HttpErrorResponse) => {
                this.errorMessage = error.error;
                this.toaster.pop('error', 'Error', this.errorMessage);
            }
        );
    }

    public createForm(): void {
        this.form = this.fb.group({
            brand: ['', Validators.required],
            model: ['', Validators.required],
            year: ['', Validators.required],
            price: ['', Validators.required],
            photo: [''],
            contact: this.fb.group({
                contactName: ['', Validators.required],
                contactEmail: ['', Validators.required],
                contactPhone: ['', Validators.required]
            }),
            VehicleFeature: ['']
        });
    }
    public openAccordion(openAccordion: boolean) {
        this.isOpen = openAccordion;
    }

    public getFeatures(): void {
        this.vehicleService.getFeatures().subscribe((features: IFeature[]) => {
            this.features = features;
        });
    }
}
