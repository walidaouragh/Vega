import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { VehicleService } from './_services/vehicle-service';
import { AccordionModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import { PhonePipe } from './_pipes/phonePipe';

@NgModule({
    declarations: [AppComponent, HomeComponent, DetailComponent, EditComponent, PhonePipe],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToasterModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        AlertModule.forRoot()
    ],
    providers: [VehicleService, ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {}
