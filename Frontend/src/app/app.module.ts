import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// import { UsuarioComponent } from './shared/components/usuario/usuario.component'
import { HomeComponent } from './shared/components/home/home.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PrivateComponent } from './views/private/private.component';
import { PublicModule } from './views/public/public.module';
import { PrivateModule } from './views/private/private.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
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
