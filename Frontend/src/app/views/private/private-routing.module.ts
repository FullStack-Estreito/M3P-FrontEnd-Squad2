import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from 'src/app/shared/components/empresa/empresa.component';
import { UsuarioComponent } from 'src/app/shared/components/usuarios/usuario.component';
import { EnderecoComponent } from 'src/app/shared/components/endereco/endereco.component';
import { AtendimentosComponent } from 'src/app/shared/components/atendimentos/atendimentos.component';
import { ExerciciosComponent } from 'src/app/shared/components/exercicios/exercicios.component';
import { AvaliacoesComponent } from 'src/app/shared/components/avaliacoes/avaliacoes.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'atendimentos', component: AtendimentosComponent },
      { path: 'exercicios', component: ExerciciosComponent },
      { path: 'avaliacoes', component: AvaliacoesComponent }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
