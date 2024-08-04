import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    this.registerForm = new FormGroup(
      {
        userType: new FormControl('CLIENT', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        location: new FormControl(''),
        country: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        landmark: new FormControl(''),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(
    group: AbstractControl
  ): { [key: string]: any } | null {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  async showTerms() {
    const registerValues = this.registerForm.value;
    console.log(registerValues, 'form before alert');
    const agreeTerms = await this.alertCtrl.create({
      header: 'Do you want to Continue ?',
      message:
        'By Clicking Register you are Agreeing to our Terms and Conditions',
      buttons: [
        {
          text: 'Disagree',
          role: 'Cancel',
        },
        {
          text: 'Agree',
          handler: () => {
            console.log(registerValues, 'form after agree');
          },
        },
      ],
    });
    await agreeTerms.present();
  }

  get userType(): AbstractControl {
    return this.registerForm.get('userType') as AbstractControl;
  }
  get name(): AbstractControl {
    return this.registerForm.get('name') as AbstractControl;
  }
  get email(): AbstractControl {
    return this.registerForm.get('email') as AbstractControl;
  }
  get password(): AbstractControl {
    return this.registerForm.get('password') as AbstractControl;
  }
  get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword') as AbstractControl;
  }
  get phone(): AbstractControl {
    return this.registerForm.get('phone') as AbstractControl;
  }
  get location(): AbstractControl {
    return this.registerForm.get('location') as AbstractControl;
  }
  get countryControl(): AbstractControl {
    return this.registerForm.get('country') as AbstractControl;
  }
  get stateControl(): AbstractControl {
    return this.registerForm.get('state') as AbstractControl;
  }
  get cityControl(): AbstractControl {
    return this.registerForm.get('city') as AbstractControl;
  }
  get landmark(): AbstractControl {
    return this.registerForm.get('landmark') as AbstractControl;
  }
  get zipCode(): AbstractControl {
    return this.registerForm.get('zipCode') as AbstractControl;
  }

  ngOnInit() {
    this.country = this.list.country();
  }
  country: any[];
  state: any[];
  city: any[];

  onSelectCountry(country) {
    this.state = this.list
      .state()
      .filter((fc) => fc.cid == country.target.value);
  }
  onSelectState(state) {
    this.city = this.list.city().filter((fs) => fs.sid == state.target.value);
  }
  enforceMaxLength(event: any, maxLength: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
}
