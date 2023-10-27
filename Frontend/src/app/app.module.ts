import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HomeComponent } from './shared/components/home/home.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PublicModule } from './views/public/public.module';
import { PrivateModule } from './views/private/private.module';
import { AtendimentosComponent } from './shared/components/atendimentos/atendimentos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    PublicModule,
    PrivateModule
  ],

  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
