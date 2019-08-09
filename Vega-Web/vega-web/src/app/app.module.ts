import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import {FormsModule} from "@angular/forms";
import {VehicleService} from "./services/vehicule-service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
