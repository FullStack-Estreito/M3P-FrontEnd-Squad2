import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
// import { UsuarioComponent } from './shared/components/usuario/usuario.component'
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './shared/components/home/home.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { PrivateComponent } from './views/private/private.component';
import { PublicComponent } from './views/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EditComponent,
    NotFoundComponent,
    LoginComponent,
    ToolbarComponent,
    PrivateComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule, 
    NgxMaskDirective,
    NgxMaskPipe
  ],

  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
