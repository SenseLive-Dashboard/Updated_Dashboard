import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meter } from '../meterreg';
import { MeterregService } from '../meterreg.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DialogboxService } from '../dialogbox.service';


@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component implements OnInit {
meter: Meter[]=[];
faTimes=faTimes;
  showModal: boolean|any;
  registerForm: FormGroup|any;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private meterreg: MeterregService,private dialogboxService:DialogboxService) { }
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
    this.registerForm = this.formBuilder.group({
        id:[''],
        meterName: ['', Validators.required],
        meterId: ['', Validators.required],
        section: ['', Validators.required]
    });
    this.meterreg.addMeter().subscribe((response) => {
      this.meter = response;
      console.log("Meter Name:",this.meter)
      return this.meter;
    }); 
}




// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
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
   
    
    
  });
  alert("Meter Registered");
  this.ngOnInit();
  this.registerForm.reset();
  this.submitted=false;
 }

 
}

deleteMeter(id:number) {
  this.dialogboxService.confirmThis("Are you sure to delete?",  () => {  
    this.meterreg.deleteMeter(id).subscribe((meterDetails: Meter)=>{
      console.log("Meter Deleted ", meterDetails);
      this.ngOnInit();
    }); 
  }, function () {  
    console.log("Cancel Meter Deletion") 
  })  
}

}


