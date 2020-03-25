import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { PhonePipe } from './_pipes/phonePipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AccordionModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import { VehicleService } from './_services/vehicle-service';
import { AddComponent } from './add/add.component';
import { MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IgxAvatarModule, IgxGridModule, IgxIconModule, IgxSwitchModule, IgxTooltipModule } from 'igniteui-angular';

@NgModule({
    declarations: [AppComponent, HomeComponent, DetailComponent, EditComponent, PhonePipe, AddComponent],
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
        AlertModule.forRoot(),
        MatSelectModule,
        MatFormFieldModule,
        IgxGridModule,
        IgxIconModule,
        IgxTooltipModule,
        IgxAvatarModule,
        IgxSwitchModule
    ],
    providers: [VehicleService, ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {}
