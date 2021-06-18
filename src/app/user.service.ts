import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as common from './baseurl'
import { Sensor } from './sensorData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl: string = "http://mayurdafare.ml/APIs/table.php"; //table url
  // baseUrl1: string = "http://mayurdafare.ml/APIs/tslive.php"; //live sorting url
  // baseUrl2: string = "http://mayurdafare.ml/APIs/tsminute.php"; //minute sorting url
  // baseUrl3: string = "http://mayurdafare.ml/APIs/tshour.php"; //hour sorting url
  // baseUrl4: string = "http://mayurdafare.ml/APIs/tsday.php"; //day sorting url
  // baseUrl5: string = "http://mayurdafare.ml/APIs/tsweek.php"; //week sorting url
  // baseUrl6: string = "http://mayurdafare.ml/APIs/tsmonth.php"; //month sorting url
  // baseUrl7: string = "http://mayurdafare.ml/APIs/compdrpdwn.php";
  // baseUrl8: string = "http://mayurdafare.ml/APIs/meterndrpdwn.php";
  // baseUrl9: string = "http://mayurdafare.ml/APIs/datatypedrpdwn.php";

  constructor(private httpClient: HttpClient) { }
  // get_tableData() {
  //   // return this.httpClient.get<Emp[]>(common.baseURL + "/table.php");
  //   return this.httpClient.get<Sensor[]>(common.endpoint1+'/table.php');
  // }
  sendidMeter(m_id: string){
    console.log(m_id);
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/table.php?m_id='+m_id);
  }
  insertdata(m_id: string){
    console.log(m_id);
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/InsertDatafirs.php?m_id='+m_id);
  }

  displayAllMeterData(companyName:string){
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/meterDataTable.php?companyName='+companyName);
  }
  delTableRecord(m_id:string){
    return this.httpClient.delete<Sensor>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/deleteSensorDataRecord.php/?m_id="+m_id);

  }
  get_liveData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tslive.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tslive.php?m_id='+m_id);
  }
  get_minuteData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tsminute.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tsminute.php?m_id='+m_id);
  }
  get_hourData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tshour.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tshour.php?m_id='+m_id);
  }
  get_dayData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tsday.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tsday.php?m_id='+m_id);
  }
  get_weekData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tsweek.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tsweek.php?m_id='+m_id);
  }
  get_monthData(m_id: string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/tsmonth.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/tsmonth.php?m_id='+m_id);
  }
  get_companyDrpdwn_data() {
    // return this.httpClient.get<Emp[]>(common.baseURL + "/compdrpdwn.php");
    return this.httpClient.get<Sensor[]>(common.endpoint1+'/compdrpdwn.php');
  }
}
