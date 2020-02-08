import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular Services';

  constructor(private appCounterService: AppCounterService) {
  }

  ngOnInit(): void {
  }
}
