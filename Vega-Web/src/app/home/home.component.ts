import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../_services/vehicle-service';
import { ToasterService } from 'angular2-toaster';
import { IVehicle } from '../_types/IVehicle';
import {
    HorizontalAlignment,
    IgxDialogComponent,
    PositionSettings,
    slideInTop,
    slideOutBottom,
    VerticalAlignment
} from 'igniteui-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { useAnimation } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private vehicleService: VehicleService, private toaster: ToasterService) {}

    public vehicles: IVehicle[];
    public isLoading: boolean;
    public newPositionSettings: PositionSettings = {
        openAnimation: useAnimation(slideInTop, { params: { duration: '500ms' } }),
        closeAnimation: useAnimation(slideOutBottom, {
            params: { duration: '500ms' }
        }),
        horizontalDirection: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalStartPoint: VerticalAlignment.Middle,
        minSize: { height: 200, width: 600 }
    };

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
