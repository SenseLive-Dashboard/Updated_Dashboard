import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './table';
import * as common from './baseurl'
@Injectable({
  providedIn: 'root'
})
export class PowerService {
  // baseUrlp: string = "http://mayurdafare.ml/APIs/powerf.php";
  // baseUrlc: string = "http://mayurdafare.ml/APIs/current.php";
  // baseUrlv: string = "http://mayurdafare.ml/APIs/voltage.php";
  // baseUrlap: string = "http://mayurdafare.ml/APIs/activepow.php";
  // baseUrlrp: string = "http://mayurdafare.ml/APIs/reactivepow.php";
  // baseUrlapp: string = "http://mayurdafare.ml/APIs/apparentpow.php";
  ///endpoint:string="http://localhost:3080/accordion_parameter";

  constructor(private httpClient: HttpClient) { }
  getPowerFactor() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/powerf.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/powerf');
  }
  getCurrent() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/current.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/current');

  }
  getVoltage() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/voltage.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/voltage');

  }
  getActivePower() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/activepow.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/active_power');

  }
  getReactivePower() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/reactivepow.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/reactive_power');

  }
  getApparentPower() {
    // return this.httpClient.get<Emp[]>(common.baseURL+'/apparentpow.php');
    return this.httpClient.get<Emp[]>(common.endpoint+'/accordion_parameter/apparent_power');

  }
}
