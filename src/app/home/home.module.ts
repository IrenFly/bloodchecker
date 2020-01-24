import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { EntryscreenPage } from '../entryscreen/entryscreen.page';
import { DetailscreenPage } from '../detailscreen/detailscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, EntryscreenPage, DetailscreenPage],
  entryComponents: [ EntryscreenPage, DetailscreenPage ]
})
export class HomePageModule {}
