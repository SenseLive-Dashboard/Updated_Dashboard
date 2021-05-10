import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meter } from './meterreg';

@Injectable({
  providedIn: 'root'
})
export class MeterregService {

  constructor(private httpClient: HttpClient) {}
  meterRegistration(meterDetails: Meter): Observable<Meter> {
    return this.httpClient.post<Meter>(`http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/meter_reg.php`, meterDetails);
  }
  
  addMeter() {
    return this.httpClient.get<Meter[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/addMeter.php");
  }
  deleteMeter(id: number){
    return this.httpClient.delete<Meter>(`http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/delete_meter.php/?id=${id}`);
  }
}
