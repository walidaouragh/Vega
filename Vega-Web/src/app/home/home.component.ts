import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../_services/vehicle-service';
import { ToasterService } from 'angular2-toaster';
import { IVehicle } from '../_types/IVehicle';
import { IgxDialogComponent } from 'igniteui-angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private vehicleService: VehicleService, private toaster: ToasterService) {}

    public vehicles: IVehicle[];
    public isLoading: boolean;

    @ViewChild('dialog', { static: false }) deleteDialog: IgxDialogComponent;

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
    public confirm(vehicleId: number): void {
        this.vehicleService.DeleteVehicle(vehicleId).subscribe(() => {
            this.toaster.pop('success', 'Success', 'Vehicle deleted');
            this.getVehicles();
            this.deleteDialog.close();
        });
    }
}
