import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiginComponent } from '../sigin/sigin.component';


@NgModule({
  declarations: [
    PublicComponent,
    SiginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule, ReactiveFormsModule, FormsModule
  ]
})
export class PublicModule { }
