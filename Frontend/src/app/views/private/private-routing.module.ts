import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from 'src/app/shared/components/empresa/empresa.component';
import { UsuarioComponent } from 'src/app/shared/components/usuario/usuario.component';
import { EnderecoComponent } from 'src/app/shared/components/endereco/endereco.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'endereco', component: EnderecoComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
