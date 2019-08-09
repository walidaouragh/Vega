import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleFormComponent} from "./vehicle-form/vehicle-form.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vehicule',
    component: VehicleFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
