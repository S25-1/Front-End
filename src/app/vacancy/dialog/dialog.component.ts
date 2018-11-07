import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  userId = new FormControl('');
  vacancyId = new FormControl('1');

  dialogForm: FormGroup = this.formBuilder.group({
    userId: this.userId,
    vacancyId: this.vacancyId,
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    // this.dialogForm = this.formBuilder.group(this.dialogGroup);
  }

  submitApplication() {
    let fValue = this.dialogForm.value;
    fValue = this.dialogForm.value;

    console.log(this.dialogForm.value);

    // this.http.post(
    //   'https://cgi-group1.azurewebsites.net/api/vacancy/addaccepteduser',
    //   JSON.stringify(fValue),
    //   );
  }
}
