import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AboutExtraComponent} from './about/about-extra/about-extra.component';
import {AppRoutingModule} from './app-routing.module';
import {ColorDirective} from './shared/color.directive';
import {PageNamePipe} from './shared/page-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutExtraComponent,
    ColorDirective,
    PageNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
