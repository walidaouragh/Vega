import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { IVehicle } from '../_types/IVehicle';
import { VehicleService } from '../_services/vehicle-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private vehicleService: VehicleService, private toaster: ToasterService) {}

    public vehicle: IVehicle[];

    ngOnInit(): void {
        this.vehicleService.getVehicles().subscribe((vehicles: IVehicle[]) => {
            this.vehicle = vehicles;
        });
    }
}
