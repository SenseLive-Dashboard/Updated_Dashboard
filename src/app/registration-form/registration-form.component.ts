import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {Company} from '../company';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  invalidRegistration : boolean = false;
  otp=0;
  registerForm = new FormGroup({
    TempID: new FormControl(''),
    CompanyName: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    MobileNo: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ColdStorage: new FormControl(''),
    Energy: new FormControl(''),
    Password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required)
  });
 
  constructor(private nameService: NameService,private router: Router) { }

  ngOnInit(): void {}

 
  //send form details to backend and move to otp component
  registerCompany(){
    console.warn(this.registerForm.value);
      this.nameService.registerCompany(this.registerForm.value).subscribe(result=>{
        if(!result.error){

        
        this.router.navigateByUrl('otp');

        this.invalidRegistration = true;}
      });
    }
    get f() { return this.registerForm.controls }
    //send otp on mail not in use at this position
    sendOTP(){
      this.nameService.sendOTP(this.registerForm.value.Email).subscribe((Email: Company)=>{
        console.log(Email);
        
      });
    }
    getotp(){
      return this.otp;
  }
}