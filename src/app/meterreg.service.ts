import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Meter } from './meterreg';

@Injectable({
  providedIn: 'root'
})
export class MeterregService {

  constructor(private httpClient: HttpClient) {}
  getMeters(){
    return this.httpClient.get<Meter[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/getMeter.php").pipe(
      map( Meter => {
        const newMeter = [];
        for(let meter of Meter){
          const meterName = meter.meterName;
          newMeter.push({meterName: meterName});
        }
        return newMeter;
      }),
      tap(Meter => console.log(Meter))
    );
  }

  getMeterByMetername(meterName:string){
    return this.httpClient.get<Meter[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/uniqueMeterName.php?meterName="+meterName);

  }
  meterRegistration(meterDetails: Meter): Observable<Meter> {
    return this.httpClient.post<Meter>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/meter_reg.php", meterDetails);
  }
  addMeter(value:string) {
    return this.httpClient.get<Meter[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/addMeter.php?value="+value);
  }
  deleteMeter(id: number){
    return this.httpClient.delete<Meter>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/delete_meter.php/?id="+id);
  }

  get_meterData(id:number) {
    return this.httpClient.get<Meter[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/meterDetailsShow.php?id="+id);
  }
  meterUpdate(meterupdateDetails:Meter): Observable<Meter>{
    return this.httpClient.post<Meter>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/meterDetailsUpdate.php", meterupdateDetails);
  }
}
