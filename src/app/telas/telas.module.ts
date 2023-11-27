import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { InfoComponent } from './info/info.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';



@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    CompartilhadoModule
  ]
})
export class TelasModule { }
