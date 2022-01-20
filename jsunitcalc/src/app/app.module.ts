import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightComponent } from './weight/weight.component';
import { DistanceComponent } from './distance/distance.component';
import { LiquidComponent } from './liquid/liquid.component';
import { TemperatureComponent } from './temperature/temperature.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    DistanceComponent,
    LiquidComponent,
    TemperatureComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
