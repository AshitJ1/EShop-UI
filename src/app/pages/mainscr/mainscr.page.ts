import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SetLocationComponent } from './set-location/set-location.component';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-mainscr',
  templateUrl: './mainscr.page.html',
  styleUrls: ['./mainscr.page.scss'],
})
export class MainscrPage implements OnInit {
  
  expandedfeat: boolean;
  message = 'Turn on GPS to get Location';
  private qtyNumber = 0;
  productList: Product[] = []
  productItem: Product

  constructor(private modalCtrl: ModalController, private productService: ProductService) { }

  option = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 8,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }

  async setLocation(){
    const modal = await this.modalCtrl.create({
      component: SetLocationComponent
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Your Location, ${data}`;
    }
  }

  ngOnInit() {
    this.productList = this.productService.getProducts()
  }

  expandFeat() {
    this.expandedfeat = !this.expandedfeat;
  }

  private increment () {
    this.qtyNumber++;
  }
  
  private decrement () {
    this.qtyNumber--;
  }


}
