import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
   }

  get email(): AbstractControl{
    return this.loginForm.get('email') as AbstractControl;
  }

  get password(): AbstractControl{
    return this.loginForm.get('password') as AbstractControl;
  }

  ngOnInit() {
  }
  login(){
    console.log(this.loginForm.value)
  }

}
