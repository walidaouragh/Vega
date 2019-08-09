import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../services/vehicule-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  public makes: any;
  public models: any;
  public features: any;
  public vehicule: any = {};
  public navigate: any;
  constructor(private  vehiculeService: VehicleService, private router: Router){}


  ngOnInit(): void {
    this.vehiculeService.getMakes().subscribe(makes => this.makes = makes);
    this.vehiculeService.getFeatures().subscribe(features => this.features = features);
  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicule.make);
      this.models = selectedMake ? this.models = selectedMake.models : [];
  }

  toNavigate() {
    this.navigate = this.router.navigateByUrl('');
  }


}
