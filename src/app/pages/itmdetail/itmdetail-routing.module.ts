import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItmdetailPage } from './itmdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ItmdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItmdetailPageRoutingModule {}
