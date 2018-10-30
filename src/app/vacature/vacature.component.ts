import { Component, Inject } from '@angular/core';

import { VACATURELIST } from './vacatureList';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vacature',
  templateUrl: './vacature.component.html',
  styleUrls: ['./vacature.component.scss'],
})

export class VacatureComponent {
  navlist = VACATURELIST;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(VacatureDialog, {
      height: '400px',
      width: '600px',
      data: { name: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

// Dialog Component

@Component({
  selector: 'vacature-dialog',
  templateUrl: 'vacature-dialog.html',
})
export class VacatureDialog {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
