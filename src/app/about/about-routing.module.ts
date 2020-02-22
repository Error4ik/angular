import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';

const routers: Routes = [{
  path: '', component: AboutComponent, children: [
    {path: 'extra', component: AboutExtraComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {

}
