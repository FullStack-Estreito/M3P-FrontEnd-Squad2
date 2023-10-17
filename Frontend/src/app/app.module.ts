import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgChartsModule } from 'ng2-charts';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';
import { EnderecoComponent } from './component/endereco/endereco.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MenuComponent,
    HomeComponent,
    EditComponent,
    EnderecoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, ReactiveFormsModule, FormsModule, HttpClientModule, NgxMaskDirective,
    NgxMaskPipe, NgChartsModule, ChartModule, HighchartsChartModule
],

  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
