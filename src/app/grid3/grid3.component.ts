import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';
import { Emp } from '../table';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component implements OnInit {
  customClass: string = 'customClass';
  data: Emp[] = [];
  data1: Emp[] = [];
  data2: Emp[] = [];
  data3: Emp[] = [];
  data4: Emp[] = [];
  data5: Emp[] = [];

  constructor(private powerService: PowerService) {
    this.powerService.getPowerFactor().subscribe((response) => {

      this.data = response;
      return this.data;
    });
    this.powerService.getCurrent().subscribe((response) => {

      this.data1 = response;
      return this.data1;
    });
    this.powerService.getVoltage().subscribe((response) => {

      this.data2 = response;
      return this.data2;
    });
    this.powerService.getActivePower().subscribe((response) => {

      this.data3 = response;
      return this.data3;
    });
    this.powerService.getReactivePower().subscribe((response) => {

      this.data4 = response;
      return this.data4;
    });
    this.powerService.getApparentPower().subscribe((response) => {

      this.data5 = response;
      return this.data5;
    });
  }
  ngOnInit(): void {
  }

}
