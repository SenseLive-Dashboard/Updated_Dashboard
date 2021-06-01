import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import * as common from './baseurl'
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class NameService {
  private apiUrl = `${environment.apiUrl}/company_registration`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  

  constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandlerService ) { 
    this.handleError = this.httpErrorHandler.createHandleError('NameService')

  }

  registerCompany(company: Company): Observable<Company> {
    //return this.httpClient.post<Company>(common.baseURL + '/company_register.php', company);
     return this.httpClient.post<Company>(`${this.apiUrl}/register`,company,this.httpOptions)
     .pipe(
      catchError<Company, Observable<any>>(this.handleError('register', null))
    );
    

  }
  sendOTP(Email: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/sendOTP.php', Email);
  }
  resetpassword(set: Company): Observable<Company> {
    return this.httpClient.post<Company>(common.baseURL + '/resetpassword.php', set);
  }
  changePassword(email: any) {
    return this.httpClient.post(common.baseURL + '/forgotpassword.php', email);
    // return this.httpClient.post<Company>(`${this.apiUrl}/forgot-password`,req,this.httpOptions)
    //  .pipe(
    //   catchError<Company, Observable<any>>(this.handleError('forgot-password', null))
    // );
  }



}
