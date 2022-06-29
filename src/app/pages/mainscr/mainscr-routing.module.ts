import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainscrPage } from './mainscr.page';

const routes: Routes = [
  {
    path: '',
    component: MainscrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainscrPageRoutingModule {}
