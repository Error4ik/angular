import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Pipes';
  object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4,
          h: 5
        }
      }
    }
  };

  ngOnInit(): void {
  }
}
