import { Component, Inject, OnInit } from '@angular/core';
import { VacancyService } from './vacancy.service';
import { Observable } from 'rxjs';
// import { VACANCYLIST } from './vacancyList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss'],
})
export class VacancyComponent implements OnInit{
  // vacancylist = VACANCYLIST;
  public vacancies = [];

  constructor(public dialog: MatDialog, private vacancyService: VacancyService) {}

  ngOnInit() {
    this.vacancyService.getVacancy()
      .subscribe(data => this.vacancies = data);
  }

  openDialog(job, date, experience): void {
    const dialogRef = this.dialog.open(VacancyDialog, {
      height: '400px',
      width: '600px',
      data: { Job: job, Date: date, Experience: experience },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

// Dialog Component

@Component({
  selector: 'vacancy-dialog-employee',
  templateUrl: './dialog/dialog.component.html',
  styleUrls: ['./dialog/dialog.component.scss'],
})
export class VacancyDialog {
  constructor(
    public dialogRef: MatDialogRef<VacancyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}
