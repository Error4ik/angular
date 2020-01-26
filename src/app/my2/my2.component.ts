import {Component} from '@angular/core';

@Component({
  selector: 'app-my2',
  templateUrl: './my2.component.html',
  styleUrls: ['./my2.component.css']
})
export class My2Component {
  backgroundToggle = false;

  toggle: any = false;

  array = [1, 1, 2, 3, 5, 8, 13, 21];

  object = [
    {title: 'heads'},
    {title: 'legs'},
    {title: 'arms'}
  ];
}
