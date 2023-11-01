import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
