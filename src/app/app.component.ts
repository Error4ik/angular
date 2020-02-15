import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from './app.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Forms';
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.email,
          Validators.required,
          AppValidators.restrictedEmails],
        [AppValidators.uniqueEmail]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  send() {
    if (this.form.valid) {
      console.log('Form:', this.form);
      const formData = {...this.form.value};
      console.log('FormData:', formData);
    }

    this.form.reset();
  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      us: 'Washington'
    };

    const city = cityMap[this.form.get('address').get('country').value];
    this.form.patchValue({address: {city}});
  }

  addSkill() {
    const skillControl = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(skillControl);
  }
}
