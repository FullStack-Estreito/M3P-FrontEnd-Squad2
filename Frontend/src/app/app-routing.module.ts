import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { EditComponent } from './component/edit/edit.component';
import { EnderecoComponent } from './component/endereco/endereco.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


const routes: Routes = [

  {path: 'usuario', component: UsuarioComponent},
  {path: 'endereco', component: EnderecoComponent},
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
