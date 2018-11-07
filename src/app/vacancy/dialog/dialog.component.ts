import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

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

    console.log(JSON.stringify(req));

    // this.http.post(
    //   'https://cgi-group1.azurewebsites.net/api/vacancy/addaccepteduser',
    //   JSON.stringify(fValue),
    //   );
  }
}

interface VacancyApplication {
  userID: string;
  vacancyID: string;
  Accepted: string;
}
