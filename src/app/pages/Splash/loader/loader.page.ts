import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 1500);
  }


  ngOnInit() {
  }

}
