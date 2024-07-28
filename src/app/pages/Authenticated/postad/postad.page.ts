import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-postad',
  templateUrl: './postad.page.html',
  styleUrls: ['./postad.page.scss'],
})
export class PostadPage implements OnInit {
  private currentNumber = 0;
  map: any;
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() { }

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

  ngOnInit() {
  }

  private increment () {
    this.currentNumber++;
  }
  
  private decrement () {
    this.currentNumber--;
  }

}
