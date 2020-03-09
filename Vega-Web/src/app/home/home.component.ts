import { Component, OnInit, TemplateRef } from "@angular/core";
import { VehicleService } from "../_services/vehicle-service";
import { ToasterService } from "angular2-toaster";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { IVehicle } from "../_types/IVehicle";
import { HttpErrorResponse } from "@angular/common/http";


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
    public modalRef: BsModalRef;
    public form: FormGroup;
    public errorMessage: string;
    public isSubmitted: boolean = false;
    public isOpen = false;

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
        this.isSubmitted = false;
        this.errorMessage = '';
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }

    public createVehicle(form: any): void {
        this.isSubmitted = true;
        this.vehicleService.createVehicle(form.value).subscribe(
            () => {
                this.getVehicles();
                this.modalRef.hide();
                this.toaster.pop('success', 'Success', 'Vehicle added');
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
            })
        });
    }

    public openDeleteModal(deleteTemplate: any): void {
        this.modalRef = this.modalService.show(deleteTemplate, { class: 'modal-lg modal-dialog-centered' });
    }

    public confirm(vehicleId: number): void {
        this.vehicleService.DeleteVehicle(vehicleId).subscribe(() => {
            this.toaster.pop('success', 'Success', 'Vehicle deleted');
            this.getVehicles();
            this.modalRef.hide();
        });
    }

    public decline(): void {
        this.modalRef.hide();
    }

    public openAccordion(openAccordion: boolean) {
        this.isOpen = openAccordion;
    }
}
