import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { IVehicle } from '../_types/IVehicle';
import { VehicleService } from '../_services/vehicle-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        private vehicleService: VehicleService,
        private toaster: ToasterService,
        private router: Router,
        private fb: FormBuilder,
        private modalService: BsModalService
    ) {}

    public vehicles: IVehicle[];
    public modalRef: any;
    public form: FormGroup;
    public errorMessage: string;
    public isSubmitted: boolean = false;

    ngOnInit(): void {
        this.getVehicles();
        this.createForm();
    }

    public getVehicles(): void {
        this.vehicleService.getVehicles().subscribe((vehicles: IVehicle[]) => {
            this.vehicles = vehicles;
        });
    }

    public openCreateModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }

    public createVehicle(form: any): void {
        this.isSubmitted = true;
        this.vehicleService.createVehicle(form.value).subscribe(
            () => {
                this.getVehicles();
                this.modalRef.hide();
            },
            (error: HttpErrorResponse) => {
                this.errorMessage = error.error;
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
            })
        });
    }

    public openDeleteModal(deleteTemplate: any): void {
        this.modalRef = this.modalService.show(deleteTemplate, { class: 'modal-lg modal-dialog-centered' });
    }

    public confirm(vehicleId: number): void {
        this.vehicleService.DeleteVehicle(vehicleId).subscribe(() => {
            this.getVehicles();
            this.modalRef.hide();
        });
    }

    public decline(): void {
        this.modalRef.hide();
        this.form.reset();
    }
}
