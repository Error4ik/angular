import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'about', loadChildren: './about/about-page.module#AboutPageModule'}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
