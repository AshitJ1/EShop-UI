import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  country(){
    return[
      {
        cid: 1,
        name:"India"
      },
      {
        cid: 2,
        name:"America"
      },
      {
        cid: 3,
        name:"United-Kingdom"
      }
    ]
  }

  state(){
    return[
      {
        cid:1,
        sid: 1,
        name: "Maharashtra"
      },
      {
        cid:1,
        sid: 2,
        name: "Delhi"
      },
      {
      cid:2,
      sid:3,
      name: "Georgia"
    },
    {
      cid: 3,
      sid:4,
      name:"England"
    }
    ]
  }
  city(){
    return[
      {
        sid: 1,
        name: "Mumbai"
      }, 
      {
        sid: 1,
        name: "Pune"
      },
      {
        sid: 2,
        name: "New-Delhi"
      }, 
      {
        sid: 2,
        name: "NCR"
      },
      {
        sid: 3,
        name:"Atlanta"
      },
      {
        sid: 4,
        name:"London"
      }

    ]
  }
}
