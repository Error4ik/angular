import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Pipes';

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('resolved!');
    }, 3000);
  });

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date = new Date();

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date = date;
    });
  }
}
