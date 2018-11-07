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

  userID: string;
  vacancyID: string;

  ngOnInit() {
    console.log(this.data);
  }

  submitApplication(accepted: boolean) {
    // console.log(this.data);

    // this.http.post(
    //   'https://cgi-group1.azurewebsites.net/api/vacancy/addaccepteduser',
    //   JSON.stringify(fValue),
    //   );
  }
}
