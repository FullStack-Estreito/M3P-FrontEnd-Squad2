import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EditComponent } from './shared/components/edit/edit.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PublicModule } from './views/public/public.module';
import { PrivateModule } from './views/private/private.module';
import { FormCriarAvaliacaoComponent } from './shared/components/form-criar-avaliacao/form-criar-avaliacao/form-criar-avaliacao.component';
import { AvaliacaoComponent } from './shared/components/avaliacao/avaliacao/avaliacao.component';
import { FormEditarAvaliacaoComponent } from './shared/components/form-editar-avaliacao/form-editar-avaliacao/form-editar-avaliacao.component';



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NotFoundComponent,
    FormCriarAvaliacaoComponent,
    AvaliacaoComponent,
    FormEditarAvaliacaoComponent
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
