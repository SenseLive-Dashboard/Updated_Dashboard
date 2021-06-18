import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Meter } from '../meterreg';
import { MeterregService } from '../meterreg.service';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  variable: boolean=true;
  logoutbtn: boolean;
  meter:Meter[]=[];
  value:any;
  constructor(private apiService: ApiService,private shared: SharedService,private formBuilder: FormBuilder,private meterreg: MeterregService) {
    apiService.getLoggedInName.subscribe((name: any) => this.changeName(name));
    if (this.apiService.isLoggedIn()) {
      console.log("loggedin");
      this.logoutbtn = true
    }
    else {

      this.logoutbtn = false
    }
  }
  private changeName(name: boolean): void {
    this.logoutbtn = name;

  }
  logout() {
    this.apiService.deleteToken();
    window.location.href = "http://localhost:4200";
    window.sessionStorage.clear();
  }

  // onNavigate(){
  //   window.open("http://senselive.in/","_blank");
  // }

  ngOnInit(): void {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');
    this.meterDetailsform = this.formBuilder.group({
      id:[''],
      meterName: [''],
      meterid: [''],
      company:[''],
      location: ['']
  });

    this.meterreg.addMeter(this.value).subscribe((response) => {
      this.meter = response;
      console.log(this.meter);
      return this.meter;
    });

  }
  showModal: boolean|any;
  show()
  {
   
    this.showModal = true; // Show-Hide Modal Check
    
        
  }
  meterDetailsform: FormGroup|any;
  hide()
  {
    this.ngOnInit();
    this.variable = false;
    this.meterDetailsform.reset();
    this.variable = true;
    this.showModal = false;
    // this.registerForm.reset();
    

  }
  submitted = false;
  onSubmit() {
    this.meterDetailsform.controls['id'].setValue(this.id);
    this.meterDetailsform.controls['meterid'].setValue(this.metid[0]);
    this.meterDetailsform.controls['company'].setValue(this.comp[0]);
    this.submitted = true;
  
     // stop here if form is invalid
     
  
  if(this.submitted)
  {
    console.log(this.meterDetailsform.value);
    this.meterreg.meterUpdate(this.meterDetailsform.value).subscribe((meterupdateDetails: Meter)=>{
      console.log("Meter Registered", meterupdateDetails);
    });
    alert("Meter Details Update Successful");
    this.ngOnInit();
    this.variable=false;
    this.meterDetailsform.reset();
    this.variable=true;
    this.showModal = false;
    this.submitted=false;
   }
  
   
  }
 

  id:any;
  name:any;
  metid:any;
  comp:any;
  locate:any;
  meterdetails:Meter[]=[];
  getmeterId(event : any){
    this.id= event.target.value;
    console.log(this.id);
    this.meterreg.get_meterData(this.id).subscribe((response)=>{
      this.meterdetails = response;
      console.log(this.meterdetails);
      // return this.meterdetails;
      this.name = this.meterdetails.map((t: { meterName: any; })=>t.meterName);
      this.metid = this.meterdetails.map((t: { meterid: any; })=>t.meterid);
      this.comp = this.meterdetails.map((t: { company: any; })=>t.company);
      this.locate = this.meterdetails.map((t: { location: any; })=>t.location);
    }); 
  }

  url:any = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        window.sessionStorage.setItem('profileImg',JSON.stringify(event.target?.result));
        console.log("Image",event.target?.result);
        this.url = JSON.parse(window.sessionStorage.getItem('profileImg') || '{}');
        console.log(this.url);

      }
    }
  }
  public delete(){
    this.url = null;
  }
}
