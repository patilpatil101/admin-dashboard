import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-dashboard';
  state: string = 'Logout';

  constructor(public router: Router, private location: Location) {
  }

  ngOnInit() {
    if (this.location.path().includes('/login')) {
      this.state = 'Login';
    } else {
      this.state = 'Logout';
    }
  }

  logout() {
    this.router.navigateByUrl('login');
    this.state = 'Login';
  }

}
