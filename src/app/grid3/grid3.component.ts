import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Sensor } from '../sensorData';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component implements OnInit {
  customClass: string = 'customClass';
  data: Sensor[] = [];
  value:any;
  
  constructor(private cardService: CardService,private shared: SharedService) {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');


    this.cardService.get_meterCardData(this.value).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }
  ngOnInit(): void {
  }

}
