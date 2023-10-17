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
import { UsuarioComponent } from './shared/components/usuario/usuario.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './shared/components/home/home.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { EnderecoComponent } from './shared/components/endereco/endereco.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MenuComponent,
    HomeComponent,
    EditComponent,
    EnderecoComponent,
    NotFoundComponent,
    LoginComponen,
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
