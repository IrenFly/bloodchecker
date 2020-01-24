import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailscreenPage } from './detailscreen.page';

const routes: Routes = [
  {
    path: '',
    component: DetailscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailscreenPageRoutingModule {}
