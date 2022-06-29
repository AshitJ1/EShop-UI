import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItmdetailPageRoutingModule } from './itmdetail-routing.module';

import { ItmdetailPage } from './itmdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItmdetailPageRoutingModule
  ],
  declarations: [ItmdetailPage]
})
export class ItmdetailPageModule {}
