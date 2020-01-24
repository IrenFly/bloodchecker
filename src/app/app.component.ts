import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { DatastorageService } from './services/datastorage.service';

const { SplashScreen, StatusBar } = Plugins;



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private dataStroage: DatastorageService) {
    this.dataStroage.load();

    SplashScreen.hide().catch((err) => {
      console.warn(err);
    });

    StatusBar.hide().catch((err) => {
      console.warn(err);
    });
  }
}
