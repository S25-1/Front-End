import { Component, Inject, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountService],
})
export class AccountComponent implements OnInit {

  public accountInfo = [];
  public userId: string;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    this.accountService.getAccountInfo(this.userId)
    .subscribe(data => this.accountInfo = data,
               err => console.log('HTTP Error', err));
    console.log(this.accountInfo);
  }
}
