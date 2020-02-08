import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCounterService} from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit {
  name = 'Angular Services';

  constructor(private appCounterService: AppCounterService, private localCounterService: LocalCounterService) {
  }

  ngOnInit(): void {
  }
}
