import { NgModule } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import {TeminosComponent } from '../pages/teminos/teminos.component'

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PoliticasComponent } from '../pages/politicas/politicas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'terminos', component: TeminosComponent},
      { path: 'politicas', component: PoliticasComponent},


      { path: '**', redirectTo: '' },
    ]
  }
];


@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', initialNavigation: 'enabledNonBlocking'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
