import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './table';
import * as common from './baseurl'
import { Observable } from 'rxjs';
import { Sensor } from './sensorData';
import { Parameter } from './parameter';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  // baseUrl: string = "http://mayurdafare.ml/APIs/card.php";
  // baseUrl1: string = "http://mayurdafare.ml/APIs/card1.php";
  // baseUrl2: string = "http://mayurdafare.ml/APIs/card2.php";
  // baseUrl3: string = "http://mayurdafare.ml/APIs/card3.php";
  // baseUrl4: string = "http://mayurdafare.ml/APIs/card4.php";
  // baseUrl5: string = "http://mayurdafare.ml/APIs/card5.php";
  

  constructor(private httpClient: HttpClient) { }
  get_current_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/current_avg');

  }
  get_voltage_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card1.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/voltage_avg');

  }
  get_powerfactor_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card2.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/power_avg');

  }
  get_activepower_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card3.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/active_power_avg');

  }
  get_reactivepower_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card4.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/reactive_power_avg');

  }
  get_apparentpower_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card5.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/metercard/apparent_power_avg');

  }
  get_kwh_data() {
    return this.httpClient.get<Sensor[]>( "http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/kwh.php");

  }
  get_kvarh_data() {
    return this.httpClient.get<Sensor[]>( "http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/kvarh.php");

  }
  get_kvah_data() {
    return this.httpClient.get<Sensor[]>( "http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/kvah.php");

  }
add_parameter(parameterdata:Parameter): Observable<Parameter> {
  
  return this.httpClient.post<Parameter>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/addParameter.php", parameterdata);
}
add_card(){
  return this.httpClient.get<Parameter[]>( "http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/addCard.php");

}
update_parameter(data_type:Parameter): Observable<Parameter>{
  return this.httpClient.post<Parameter>( "http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/updateParameterData.php",data_type);

}
deleteCard(id: number){
  return this.httpClient.delete<Parameter>(`http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/delete_card.php/?id=${id}`);
}
  
}
