import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: AboutComponent, children: [
      {path: 'extra', component: AboutExtraComponent}]
  }])
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {

}
