import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {Company} from '../company';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validators';
import { UniqueCompanynameValidator } from '../unique-companyname-validator.directive';
import { UniqueEmailValidator, UniqueEmailValidatorDirective } from '../unique-email-validator.directive';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  invalidRegistration : boolean = false;
  show:boolean= false;
  otp=0;
  registerForm = new FormGroup({
    TempID: new FormControl(''),
    CompanyName: new FormControl('', Validators.required,UniqueCompanynameValidator(this.nameService)),
    Name: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email],UniqueEmailValidator(this.nameService)),
    MobileNo: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ColdStorage: new FormControl(''),
    Energy: new FormControl(''),
    Password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required),
    OTP: new FormControl('', Validators.required)
  });
 
  constructor(private nameService: NameService,private router: Router) { }

  ngOnInit(): void {}

  validators(){
    ConfirmedValidator(this.registerForm.controls.Password.value, this.registerForm.controls.ConfirmPassword.value);
   }
  //send form details to backend and move to otp component
  registerCompany(){
    this.nameService.registerCompany(this.registerForm.value).subscribe((response)=>{
    
      this.invalidRegistration = true;
      if(this.registerForm.controls.Password.value==this.registerForm.controls.ConfirmPassword.value){
        this.router.navigateByUrl('otp');
        }else{
          alert('password does not match');
        }
     
    },
    (error)=>{
      alert('Invalid OTP');
    }
    );
    }
    get f() { return this.registerForm.controls }

     sendOTP(){
      this.show=true;
      console.log(this.registerForm.value.Email);

      this.nameService.sendOTP(this.registerForm.value.Email).subscribe((response)=>{
        console.log(response);
        alert("OTP sent successfully");
      });
    }

   
    //send otp on mail not in use at this position
    // sendOTP(){
    //   this.nameService.sendOTP(this.registerForm.value.Email).subscribe((Email: Company)=>{
    //     console.log(Email);
    //   });
    // }
  //   getotp(){
  //     return this.otp;
  // }
}