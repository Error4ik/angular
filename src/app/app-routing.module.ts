import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AboutExtraComponent} from './about/about-extra/about-extra.component';

@NgModule({
  imports: [RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'about', component: AboutComponent, children: [
          {path: 'extra', component: AboutExtraComponent}]
      }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
