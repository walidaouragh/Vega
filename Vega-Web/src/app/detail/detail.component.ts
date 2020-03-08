import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from '../_types/IVehicle';
import { VehicleService } from '../_services/vehicle-service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, private vService: VehicleService) {}

    public vehicleId: number;
    public vehicle: IVehicle;

    ngOnInit() {
        this.vehicleId = +this.route.snapshot.paramMap.get('vehicleId');
        this.getVehicle(this.vehicleId);
    }

    public getVehicle(vehicleId: number): void {
        this.vService.getVehicle(vehicleId).subscribe((vehicle: IVehicle) => {
            this.vehicle = vehicle;
        });
    }
}
