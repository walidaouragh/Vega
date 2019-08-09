import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public makes: any;

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get('http://localhost:5000/api/vehicle/makes');
  }

  getFeatures() {
    return this.http.get('http://localhost:5000/api/vehicle/features');
  }
}
