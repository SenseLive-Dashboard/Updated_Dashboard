import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meter } from '../meterreg';
import { MeterregService } from '../meterreg.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DialogboxService } from '../dialogbox.service';
import {SharedService} from '../shared.service';
import { Sensor } from '../sensorData';
import { UserService } from '../user.service';
import { UniqueMeternameValidator } from '../unique-metername-validator.directive';


@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component implements OnInit {
meter: Meter[]=[];
value:any;
Cname:string []=[];
faTimes=faTimes;
  showModal: boolean|any;
  registerForm: FormGroup|any;
  submitted = false;
  delRecord:any;
  sensor:Sensor[]=[];
  constructor(private formBuilder: FormBuilder,private meterreg: MeterregService,private shared: SharedService,private userService:UserService, private dialogboxService:DialogboxService) { }
 show()
  {
    this.showModal = true; // Show-Hide Modal Check   
  }
  //Bootstrap Modal Close event
  hide()
  {
     this.showModal = false;
    this.registerForm.reset();
    }
  ngOnInit() {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');
    
    this.Cname=this.shared.sendLoginArray;
    

    this.registerForm = this.formBuilder.group({
        id:[''],
        meterName: ['', Validators.required, UniqueMeternameValidator(this.meterreg)],
        meterid: ['', Validators.required],
        company:[''],
        location: ['', Validators.required]
    });
    this.meterreg.addMeter(this.value).subscribe((response) => {
      this.meter = response;
      console.log("Meter Name:",this.meter)
      return this.meter;
    }); 
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
  this.registerForm.controls['company'].setValue(this.value[0]);
  this.submitted = true;
 // stop here if form is invalid
 if (this.registerForm.invalid) {
    return;
}
if(this.submitted)
{
  this.meterreg.meterRegistration(this.registerForm.value).subscribe((meterDetails: Meter)=>{
    console.log("Meter Registered", meterDetails);
    this.showModal = false;
    alert("Meter Registered");  
  },
   (error) => {
    this.showModal = false;
     alert("Meter Already Registered");
  });
  
  this.ngOnInit();
  this.registerForm.reset();
  this.submitted=false;
  console.log(this.delRecord);
 }
}
deleteMeter(id:number) {
  this.dialogboxService.confirmThis("Are you sure to delete?",  () => {  
    this.meterreg.deleteMeter(id).subscribe((meterDetails: Meter)=>{
      console.log("Meter Deleted ", meterDetails);
      this.ngOnInit();
    });
    this.userService.delTableRecord(this.delRecord).subscribe((sensor: Sensor) => {
      console.log("Record Deleted",this.delRecord);
    }); 
  }, function () {  
    console.log("Cancel Meter Deletion") 
  })  
}
data: Sensor []=[];
displaydataMeter(meterid:string){
  this.userService.insertdata(meterid).subscribe((response)=>{
    this.data=response;
    return this.data;
  }); 
  this.shared.onGridClick(meterid);
  this.delRecord=meterid;

}
allMeterData(){
  //this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');
    this.shared.onBtnClick(this.value);
}

}


