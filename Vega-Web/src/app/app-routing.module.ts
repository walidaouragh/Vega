import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'detail/:vehicleId',
        component: DetailComponent
    },
    {
        path: 'edit/:vehicleId',
        component: EditComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
