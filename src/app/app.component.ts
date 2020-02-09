import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Forms';
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  send() {
    console.log('Form submitted', this.form);
  }
}
