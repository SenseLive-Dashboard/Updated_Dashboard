import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logoutbtn: boolean;
  constructor(private apiService: ApiService) {
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
  }

  ngOnInit(): void {
  }

}
