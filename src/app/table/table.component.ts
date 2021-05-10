import { Component, OnInit } from '@angular/core';
import { faFilter, faDownload, faSort } from '@fortawesome/free-solid-svg-icons';
import { Emp } from '../table';
import { UserService } from '../user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Emp[] = [];
  company: any; //searching variable filter
  meter_name: any; //searching variable filter
  data_type: any; //searching variable filter
  time_stamp: any;
  p: number = 1; //pagination variable
  faFilter = faFilter;
  faDownload = faDownload;
  faSort = faSort;
  fileName = "ExcelSheet.xlsx"; //download file 
  data1: Emp[] = [];
  data2: Emp[] = [];
  data3: Emp[] = [];
  data4: Emp[] = [];
  datepicker: boolean = false;
  constructor(private userService: UserService) {
    this.userService.get_companyDrpdwn_data().subscribe((response) => {
      this.data1 = response;
      return this.data1;
    });

    this.userService.get_meterDrpdwn_data().subscribe((response) => {
      this.data2 = response;
      return this.data2;
    });

    this.userService.get_datatypeDrpdwn_data().subscribe((response) => {
      this.data3 = response;
      return this.data3;
    });


  }
  ngOnInit() {
    this.userService.get_tableData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
    this.userService.get_tableData().subscribe((response) => {
      this.data4 = response;

    });


  }


  /*-------------timestamp sort-----------*/
  live() {  // code for sorting live
    this.userService.get_liveData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  minute() {  // code for sorting according to minute
    this.userService.get_minuteData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  hour() {  // code for sorting according to hour
    this.userService.get_hourData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  day() {  // code for sorting according to day
    this.userService.get_dayData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  week() {  // code for sorting according to week
    this.userService.get_weekData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  month() {  // code for sorting according to month
    this.userService.get_monthData().subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends



  public filters = <any>{
    "to": '',
    "from": '',
  };
  public getByDate(event: any) {
    this.data = this.data4;
    this.filters['from'] = event[0];
    this.filters['to'] = event[1];


    console.log(this.filters['from'], '===', this.filters['to']);
    this.data = this.data.filter(o => { return new Date(o.time_stamp) >= new Date(this.filters['from']) && new Date(o.time_stamp) <= new Date(this.filters['to']) });



  }

  /*------search filter code------*/
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  Search1() { //code for filter in company column
    if (this.company == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.company.toLocaleLowerCase().match(this.company.toLocaleLowerCase());
      })
    }
  }//ends
  Search2() { //code for filter in metername column
    if (this.meter_name == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.meter_name.toLocaleLowerCase().match(this.meter_name.toLocaleLowerCase());
      })
    }
  }//ends
  Search3() { //code for filter in datatype column
    if (this.data_type == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.data_type.toLocaleLowerCase().match(this.data_type.toLocaleLowerCase());
      })
    }
  }//ends
  /*---------end---*/

  /*------sorting code start---------*/
  key: string = ''; //sorting variable
  reverse: boolean = false; //sorting variable
  sort1(key: any) { //sort function asc/desc
    this.key = 'company';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sort2(key: any) { //sort function asc/desc
    this.key = 'meter_name';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sort3(key: any) { //sort function asc/desc
    this.key = 'meter_id';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sort4(key: any) { //sort function asc/desc
    this.key = 'data_type';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  /*---------end------*/

  exportexcel(): void { //download function
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }//ends

  check: boolean = true;
  check1: boolean = true;
  check2: boolean = true;
  check3: boolean = true;
  showhide() {
    this.check = !this.check;
  }
  showhide1() {
    this.check1 = !this.check1;
  }
  showhide2() {
    this.check2 = !this.check2;
  }
  showhide3() {
    this.check3 = !this.check3;
  }




}

