import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss'],
})
export class UploadPictureComponent implements OnInit {
  @Input() id: string;

  imageSrc: string = 'assets/app-employee-picture-template.png';
  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  submitUpload(event) {
    // Stop form submit
    // event.preventDefault();
    // document.querySelector('#' + this.id).click();
  }
  constructor() { }

  ngOnInit() {}

}
