import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from '../login/LoginComponent';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule, ReactiveFormsModule, FormsModule
  ]
})
export class PublicModule { }
