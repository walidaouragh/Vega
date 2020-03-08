import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    constructor(private http: HttpClient) {}

    public getVehicles(): Observable<any> {
        return this.http.get('http://localhost:5000/api/vehicle');
    }

    public getVehicle(vehicleId: number): Observable<any> {
        return this.http.get(`http://localhost:5000/api/vehicle/${vehicleId}`);
    }

    public createVehicle(payload: any): Observable<any> {
        return this.http.post('http://localhost:5000/api/vehicle', payload);
    }

    public updateVehicle(vehicleId: number, payload: any): Observable<any> {
        return this.http.put(`http://localhost:5000/api/vehicle/${vehicleId}`, payload);
    }

    public DeleteVehicle(vehicleId: number): Observable<any> {
        return this.http.delete(`http://localhost:5000/api/vehicle/${vehicleId}`);
    }

    public getFeatures(): Observable<any> {
        return this.http.get('http://localhost:5000/api/vehicle/features');
    }
}
