import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemperatureComponent } from './temperature/temperature.component';
import { DistanceComponent } from './distance/distance.component';
import { WeightComponent } from './weight/weight.component';

const routes: Routes = [
  { path: 'temperature-component', component: TemperatureComponent },
  { path: 'distance-component', component: DistanceComponent },
  { path: 'weight-component', component: WeightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }