import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { EditComponent } from './component/edit/edit.component';


const routes: Routes = [

  {path: 'usuario', component: UsuarioComponent},
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
