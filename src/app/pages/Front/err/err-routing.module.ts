import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrPage } from './err.page';

const routes: Routes = [
  {
    path: '',
    component: ErrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrPageRoutingModule {}
