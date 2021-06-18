import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as common from './baseurl'
import { Observable } from 'rxjs';
import { Sensor } from './sensorData';
import { Parameter } from './parameter';
@Injectable({
  providedIn: 'root'
})
export class CardService {
 
constructor(private httpClient: HttpClient) { }
get_meterCardData(value:string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card.php');
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/meterCardData.php?value='+value);
}
  
// add_parameter(parameterdata:Parameter): Observable<Parameter> {
//     return this.httpClient.post<Parameter>(common.endpoint1+'/addParameter.php', parameterdata);
// }
// add_card(){
//   return this.httpClient.get<Parameter[]>(common.endpoint1+'/addCard.php');
// }
// update_parameter(data_type:Parameter): Observable<Parameter>{
//   return this.httpClient.post<Parameter>( common.endpoint1+'/updateParameterData.php',data_type);
// }
// deleteCard(id: number){
//   return this.httpClient.delete<Parameter>(common.endpoint1+'/delete_card.php/?id='+id);
// }
}
