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

  startDate;
  endDate;
  dateString: string = '';

  options = { year: 'numeric', month: 'long', day: 'numeric' };

  ngOnInit() {
    console.log(this.data);
    this.vacancyID = this.data.VacancyID;
    this.startDate = new Date(this.data.StartDate);
    this.endDate = new Date(this.data.EndDate);
    console.log(this.startDate.toLocaleDateString());
    console.log(this.endDate.toLocaleDateString());
    this.getDateSpan();
  }

  getDateSpan() {
    console.log(this.startDate.getFullYear());
    console.log(this.endDate.getFullYear());

    if (this.startDate.getFullYear() === this.endDate.getFullYear()) {
      if (this.startDate.getMonth() === this.endDate.getMonth()) {
        this.dateString += `${this.getMonthName(this.startDate.getMonth())} `;
      }
      this.dateString += `${this.startDate.getFullYear().toString()} `;
    } else {
      this.dateString = `${this.startDate.toLocaleDateString('en-US', this.options)} -
       ${this.endDate.toLocaleDateString('en-US', this.options)}`;
    }
  }

  getMonthName(monthNumber) {
    var month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    return month[monthNumber];
  }

  submitApplication(accepted: boolean) {
    // console.log(this.data);

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
}

interface VacancyApplication {
  userID: string;
  vacancyID: string;
  statusID: string;
}
