import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-mininav',
  templateUrl: './mininav.component.html',
  styleUrls: ['./mininav.component.css']
})
export class MininavComponent implements OnInit {
value:any;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');

  }

}
