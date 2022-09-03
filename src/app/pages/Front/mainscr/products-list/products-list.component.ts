import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  
  @Input() productItem: Product;
  saved: boolean;

  constructor() { }

  ngOnInit() {}

  save() {
    this.saved = !this.saved;
  }

}
