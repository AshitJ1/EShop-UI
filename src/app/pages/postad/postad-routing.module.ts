import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostadPage } from './postad.page';

const routes: Routes = [
  {
    path: '',
    component: PostadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostadPageRoutingModule {}
