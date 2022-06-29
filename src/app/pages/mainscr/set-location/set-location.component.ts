import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.component.html',
  styleUrls: ['./set-location.component.scss'],
})
export class SetLocationComponent implements OnInit {
  name: string;
  map: any;
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private modalCtrl: ModalController) { }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(28.644800, 77.216721);
      const options= {
          center: location,
          zoom: 15
      }
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {}

}
