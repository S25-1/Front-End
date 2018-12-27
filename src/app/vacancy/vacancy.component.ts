import { Component, Inject, OnInit } from '@angular/core';
import { VacancyService } from './vacancy.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'vacancy',
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
  constructor(public dialog: MatDialog, private vacancyService: VacancyService) {}

  ngOnInit() {
    this.vacancyService.getVacancy()
      .subscribe(resVacancies => this.vacancies = resVacancies);
  }

  openDialog(name, startdate, experience, enddate, vacancyid, skilllist): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      data: { Name: name, StartDate: startdate, Experience: experience,
        EndDate: enddate, VacancyID: vacancyid, SkillList: skilllist },
      autoFocus: false,
    });
  }
}
