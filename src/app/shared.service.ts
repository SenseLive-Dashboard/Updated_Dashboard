import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  invoketableFunction = new EventEmitter(); 
  sendCompanyName:any;
  sendLoginArray:any;
  subsVar!: Subscription;
  subsVar1!: Subscription;

  onGridClick(meterid:string) {    
    this.invoketableFunction.emit(meterid);    
  } 
  onBtnClick(company:string){
    this.invoketableFunction.emit(company);
  }
  // onLogin(data1:string){
  //   this.sendCompanyName = data1;
  //   return this.sendCompanyName;
  // }
  onLoginArray(data:[]){
    this.sendLoginArray = data;
    return this.sendLoginArray;
  }
  

}
