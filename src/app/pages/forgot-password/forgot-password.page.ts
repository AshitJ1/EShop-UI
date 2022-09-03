import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  ForgotForm: FormGroup;

  constructor() {
    this.ForgotForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email])
      });
   }

   get email(): AbstractControl{
    return this.ForgotForm.get('email') as AbstractControl;
  }


  ngOnInit() {
  }
  login(){
    console.log(this.ForgotForm.value)
  }

}
