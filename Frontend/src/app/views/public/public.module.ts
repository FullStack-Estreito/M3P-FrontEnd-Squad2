import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PublicModule { }
