import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SetLocationComponent } from './set-location/set-location.component';

@Component({
  selector: 'app-mainscr',
  templateUrl: './mainscr.page.html',
  styleUrls: ['./mainscr.page.scss'],
})
export class MainscrPage implements OnInit {
  saved: boolean;
  expandedfeat: boolean;
  message = 'Turn on GPS to get Location';
  private qtyNumber = 0;

  constructor(private modalCtrl: ModalController) { }

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
  }

  save() {
    this.saved = !this.saved;
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
