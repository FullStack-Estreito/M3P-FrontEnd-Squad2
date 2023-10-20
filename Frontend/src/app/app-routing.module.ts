import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsuarioComponent } from './shared/components/usuario/usuario.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { EnderecoComponent } from './shared/components/endereco/endereco.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [

  { path: 'usuario', component: UsuarioComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: NotFoundComponent }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
