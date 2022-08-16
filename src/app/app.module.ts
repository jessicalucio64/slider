import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/main/app.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TeminosComponent } from './components/pages/teminos/teminos.component';
import { PoliticasComponent } from './components/pages/politicas/politicas.component';
import { AppRoutingModule } from './components/main/app-routing.module';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    TeminosComponent,
    PoliticasComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
