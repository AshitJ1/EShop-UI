import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainscrPageRoutingModule } from './mainscr-routing.module';

import { MainscrPage } from './mainscr.page';
import { SetLocationComponent } from './set-location/set-location.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainscrPageRoutingModule
  ],
  declarations: [MainscrPage, SetLocationComponent, ProductsListComponent],
  entryComponents: [SetLocationComponent]
})
export class MainscrPageModule {}
