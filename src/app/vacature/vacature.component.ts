import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppComponent } from 'src/app/app.component';

import { VACATURELIST } from './vacatureList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vacature',
  templateUrl: './vacature.component.html',
  styleUrls: ['./vacature.component.scss'],
})
export class VacatureComponent {
  navlist = VACATURELIST;

  // Import global vars
  newAppComponent: AppComponent = new AppComponent();

  // Navigation JS stuff
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }
}

export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDialog, {
      width: '250px',
    });
  }
}

@Component({
  selector: 'dialog.component',
  templateUrl: './dialog/dialog.component.html',
  styleUrls: ['./dialog/dialog.component.scss'],
})
export class DialogComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogComponentDialog>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
