import { Component, Inject } from '@angular/core';

import { VACANCYLIST } from './vacancyList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss'],
})

export class VacancyComponent {
  vacancylist = VACANCYLIST;

  constructor(public dialog: MatDialog) {}

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
  templateUrl: 'vacancy-dialog-employee.html',
  styleUrls: ['vacancy-dialog-employee.scss'],
})
export class VacancyDialog {
  constructor(
    public dialogRef: MatDialogRef<VacancyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
