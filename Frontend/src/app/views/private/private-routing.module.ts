import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from 'src/app/shared/components/empresa/empresa.component';
import { UsuarioComponent } from 'src/app/shared/components/usuario/usuario.component';
import { EnderecoComponent } from 'src/app/shared/components/endereco/endereco.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { EditComponent } from 'src/app/shared/components/edit/edit.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'home', component: HomeComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
