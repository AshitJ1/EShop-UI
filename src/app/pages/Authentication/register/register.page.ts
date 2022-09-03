import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ListService } from './list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private list: ListService, private alertCtrl: AlertController) { 
    this.registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])

    });
  }

  async showTerms(){
    await this.alertCtrl.create({
      header: 'Do you want to Continue ?',
      message: 'By Clicking Register you are Agreeing to our Terms and Conditions',
      buttons: ['Disagree', 'Agree'],
    }).then(res=>res.present());
  }

  get name(): AbstractControl{
    return this.registerForm.get('name') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.registerForm.get('email') as AbstractControl;
  }

  get password(): AbstractControl{
    return this.registerForm.get('password') as AbstractControl;
  }
  
  get phone(): AbstractControl{
    return this.registerForm.get('phone') as AbstractControl;
  }

  ngOnInit() {
    this.country = this.list.country();
  }
  country: any[];
 state: any[];
  city: any[];

  onSelectCountry(country){
    this.state= this.list.state().filter(fc=>fc.cid==country.target.value);
  }
  onSelectState(state){
    this.city = this.list.city().filter(fs=> fs.sid == state.target.value );
  }
}
