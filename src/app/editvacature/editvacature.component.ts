import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppComponent } from 'src/app/app.component';

import { EDITVACATURELIST } from './editvacatureList';

@Component({
  selector: 'app-Vacature',
  templateUrl: './editvacature.component.html',
  styleUrls: ['./editvacature.component.scss'],
})
export class EditvacatureComponent {
  navlist = EDITVACATURELIST;

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
