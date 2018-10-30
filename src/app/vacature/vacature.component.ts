import { Component } from '@angular/core';

import { VACATURELIST } from './vacatureList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-vacature',
  templateUrl: './vacature.component.html',
  styleUrls: ['./vacature.component.scss'],
})

export class VacatureComponent {
  navlist = VACATURELIST;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
