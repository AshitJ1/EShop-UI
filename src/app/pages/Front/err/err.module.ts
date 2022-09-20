import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrPageRoutingModule } from './err-routing.module';

import { ErrPage } from './err.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrPageRoutingModule
  ],
  declarations: [ErrPage]
})
export class ErrPageModule {}
