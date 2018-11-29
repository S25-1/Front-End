import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  // apiUri: string = 'https://cgi-group1.azurewebsites.net/api';

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  userID: string = '2';
  vacancyID: string;
  statusID: string = '1';

  dateIcon: string = 'date_range';

  startDate;
  endDate;
  dateString: string = '';

  optionsDayMonthYear = { year: 'numeric', month: 'long', day: 'numeric' };
  optionsMonthYear = { year: 'numeric', month: 'long' };
  optionsDayMonth = { month: 'long', day: 'numeric' };
  optionsDay = { day: 'numeric' };

  ngOnInit() {
    console.log(this.data);
    this.vacancyID = this.data.VacancyID;
    this.startDate = new Date(this.data.StartDate);
    this.endDate = new Date(this.data.EndDate);
    this.getDateSpan();
  }

  getDateSpan() {
    if (this.startDate.getFullYear() === this.endDate.getFullYear()) {
      if (this.startDate.getMonth() === this.endDate.getMonth()) {
        if (this.startDate.getDay() === this.endDate.getDay()) {
          this.dateString += this.startDate.toLocaleDateString('en-NL', this.optionsDayMonthYear);
          this.dateIcon = 'today';
        } else {
          this.dateString += `${this.startDate.toLocaleDateString('en-NL', this.optionsDay)} -
           ${this.endDate.toLocaleDateString('en-NL', this.optionsDayMonthYear)}`;
        }
      } else {
        this.dateString += `${this.startDate.toLocaleDateString('en-NL', this.optionsDayMonth)} -
         ${this.endDate.toLocaleDateString('en-NL', this.optionsDayMonthYear)}`;
      }
    } else {
      this.dateString = `${this.startDate.toLocaleDateString('en-NL', this.optionsDayMonthYear)} -
       ${this.endDate.toLocaleDateString('en-NL', this.optionsDayMonthYear)}`;
    }
  }

  submitApplication(accepted: boolean) {
    // All values are sent as a string
    let req: VacancyApplication = {
      userID: `${this.userID}`,
      vacancyID: `${this.vacancyID}`,
      statusID: `${this.statusID}`,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    this.http.post(
      `${environment.apiUri}/vacancy/addaccepteduser`, JSON.stringify(req), httpOptions)
        .subscribe(
          (data) => {
            console.log('POST Request is successful ', data);
          },
          (error) => {
            console.log('Error', error);
          },
        );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

interface VacancyApplication {
  userID: string;
  vacancyID: string;
  statusID: string;
}
