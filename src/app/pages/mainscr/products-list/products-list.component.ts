import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  
  saved: boolean;

  constructor() { }

  ngOnInit() {}

  save() {
    this.saved = !this.saved;
  }

}
