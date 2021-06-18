import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import * as common from './baseurl'
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  constructor(private httpClient: HttpClient) {  }
  getCompanyData(){
    return this.httpClient.get<Company[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/companyRegData.php").pipe(
      map( Company => {
        const newCompany = [];
        for(let company of Company){
          const CompanyName = company.CompanyName;
          const Email = company.Email;
          newCompany.push({CompanyName: CompanyName, Email: Email});
        }
        return newCompany;
      }),
      tap(Company => console.log(Company))
    );
  }
  getDataByCompanyname(CompanyName:string){
    return this.httpClient.get<Company[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/uniqueCompanyName.php?CompanyName="+CompanyName);

  }
  getDataByEmail(Email:string){
    return this.httpClient.get<Company[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/uniqueEmail.php?Email="+Email);

  }

  registerCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.endpoint1 + '/company_register.php', company);
  }
  sendOTP(Email:string){
    return this.httpClient.get<any[]>("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/sendOTP.php?Email="+Email);
  }
  resetpassword(set: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/resetpassword.php', set);
  }
  changePassword(email: any) {
    return this.httpClient.post(common.baseURL + '/forgotpassword.php', email);
  }
}
