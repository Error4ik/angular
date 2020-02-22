import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AboutRoutingModule} from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AboutRoutingModule
  ],
  exports: [RouterModule]
})
export class AboutPageModule {

}
