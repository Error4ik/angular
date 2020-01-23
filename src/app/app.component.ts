import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  inputValue = '';

  constructor() {
  }

  onInput = (event) => {
    this.inputValue = event.target.value;
  };

  onCLick = () => {
    console.log('Click');
  };

  onInput2 = (event: KeyboardEvent) => {
    this.inputValue = (event.target as HTMLInputElement).value;
  };

  onBlur = (str: string) => {
    this.inputValue = str;
  };
}
