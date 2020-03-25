import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../_services/vehicle-service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { IVehicle } from '../_types/IVehicle';
import { IgxGridComponent } from 'igniteui-angular';
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
    public modalRef: BsModalRef;
    public isLoading: boolean;
    @ViewChild('grid1', { read: IgxGridComponent, static: true }) public grid1: IgxGridComponent;

    ngOnInit(): void {
        this.getVehicles();
    }

    public getVehicles(): void {
        this.isLoading = true;
        // Added setTimeout just to check loading
        setTimeout(() => {
            this.vehicleService.getVehicles().subscribe(
                (vehicles: IVehicle[]) => {
                    this.vehicles = vehicles;
                    this.isLoading = false;
                },
                (error: HttpErrorResponse) => {
                    console.log(error);
                }
            );
        }, 500);
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
}
