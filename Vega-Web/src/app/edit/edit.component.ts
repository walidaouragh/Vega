import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "../_services/vehicle-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToasterService } from "angular2-toaster";
import { IVehicle } from "../_types/IVehicle";
import { HttpErrorResponse } from "@angular/common/http";

// @ts-ignore
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private vService: VehicleService,
        private fb: FormBuilder,
        private router: Router,
        private toaster: ToasterService
    ) {}
    public vehicleId: number;
    public vehicle: IVehicle;
    public form: FormGroup;
    public errorMessage: string;
    public isSubmitted: boolean = false;
    public isOpen = false;

    ngOnInit() {
        this.vehicleId = +this.route.snapshot.paramMap.get('vehicleId');
        this.vService.getVehicle(this.vehicleId).subscribe((vehicle: IVehicle) => {
            this.vehicle = vehicle;

            this.form = this.fb.group({
                brand: [this.vehicle.brand ? this.vehicle.brand : null, Validators.required],
                model: [this.vehicle.model ? this.vehicle.model : null, Validators.required],
                year: [this.vehicle.year ? this.vehicle.year : null, Validators.required],
                price: [this.vehicle.price ? this.vehicle.price : null, Validators.required],
                photo: [this.vehicle.photo ? this.vehicle.photo : null],
                contact: this.fb.group({
                    contactName: [
                        this.vehicle.contact.contactName ? this.vehicle.contact.contactName : null,
                        Validators.required
                    ],
                    contactEmail: [
                        this.vehicle.contact.contactEmail ? this.vehicle.contact.contactEmail : null,
                        Validators.required
                    ],
                    contactPhone: [
                        this.vehicle.contact.contactPhone ? this.vehicle.contact.contactPhone : null,
                        Validators.required
                    ]
                })
            });
        });
    }

    public updateVehicle(form: FormGroup): void {
        this.isSubmitted = true;
        this.vService.updateVehicle(this.vehicleId, form.value).subscribe(
            () => {
                this.router.navigate(['/']);
                this.toaster.pop('success', 'Success', 'Vehicle updated');
            },
            (error: HttpErrorResponse) => {
                this.errorMessage = error.error;
            }
        );
    }

    public openAccordion(openAccordion: boolean) {
        this.isOpen = openAccordion;
    }
}
