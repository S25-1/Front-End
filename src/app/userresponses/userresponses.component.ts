import { Component, OnInit } from '@angular/core';
import { UserresponsesService } from './userresponses.service';

@Component({
  selector: 'app-vacancyresponses',
  templateUrl: './userresponses.component.html',
  styleUrls: ['./userresponses.component.scss'],
})
export class UserresponsesComponent implements OnInit {

  public acceptedusers = [];
  constructor(private userresponsesService: UserresponsesService) {}

  ngOnInit() {
    this.userresponsesService.getAcceptedUser()
      .subscribe((data) => {
        this.acceptedusers = data;
        console.log(data);
      });
  }

}
