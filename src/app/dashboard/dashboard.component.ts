import { Component, OnInit } from '@angular/core';
import { NAVITEMS } from '../app-routing.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // Set as property so it can be used in html file
  navItems = NAVITEMS;
  public userrole : string;

  constructor() { }

  ngOnInit() {
    this.userrole = localStorage.getItem('role');
    console.log(this.userrole);
  }

}
