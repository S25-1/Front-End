import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  apiUri: string = 'https://cgi-group1.azurewebsites.net/api';

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  userID: string = '2';
  vacancyID: string;

  ngOnInit() {
    console.log(this.data);
    this.vacancyID = this.data.VacancyID;
  }

  submitApplication(accepted: boolean) {
    console.log(this.data);

    // All values are sent as a string
    let req: VacancyApplication = {
      userID: `${this.userID}`,
      vacancyID: `${this.vacancyID}`,
      Accepted: `${accepted}`,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    this.http.post(
      `${this.apiUri}/vacancy/addaccepteduser`, JSON.stringify(req), httpOptions)
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
  Accepted: string;
}
