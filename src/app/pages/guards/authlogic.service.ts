import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthlogicService {

  constructor() { }

  isLogin() {
    //Logic for checking access will return true/false accordingly
    // *eg to be implemented => [
    // check LoginPage for loginvalues
    // if (loginvalue.length != 0){
    //   return true;
    // }
    // else{
    //   return false;
    // }
    // ]    
    return false; //set false by default => guard will protect the pages
  }
}
