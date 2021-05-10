import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import * as common from './baseurl'
@Injectable({
  providedIn: 'root'
})
export class NameService {
  endpoint:string="http://localhost:3080";
  registerCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/company_register.php', company);
    // return this.httpClient.post<Company>(this.endpoint+'/registerForm',company);

  }
  sendOTP(Email: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/sendOTP.php', Email);
  }
  resetpassword(set: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/resetpassword.php', set);
  }
  changePassword(email: any) {
    return this.httpClient.post(common.baseURL + '/forgotpassword.php', email);
  }


  constructor(private httpClient: HttpClient) { }

}
