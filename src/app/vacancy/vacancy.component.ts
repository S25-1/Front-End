import { Component, Inject, OnInit } from '@angular/core';
import { VacancyService } from './vacancy.service';
import { map } from 'rxjs/operators';
// import { VACANCYLIST } from './vacancyList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vacancy',
  providers:[VacancyService],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss'],
  template: `
  <h2>Vacatures</h2>
  <ul *ngFor="let vacancy of vacancies">
    <li> {{ vacancy.Name }}</li>
    <li> {{ vacancy.Description }}</li>
  </ul>
`
})
export class VacancyComponent implements OnInit{
  // vacancylist = VACANCYLIST;
  public vacancies = [];

  constructor(public dialog: MatDialog, private vacancyService: VacancyService) { }

  ngOnInit() {
    this.vacancyService.getVacancy()
      .subscribe(resVacancies => this.vacancies = resVacancies);
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
  templateUrl: 'vacancy-dialog-employee.html',
  styleUrls: ['vacancy-dialog-employee.scss'],
})
export class VacancyDialog {
  constructor(
    public dialogRef: MatDialogRef<VacancyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}
