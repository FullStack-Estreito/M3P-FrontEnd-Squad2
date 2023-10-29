import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from 'src/app/shared/components/empresa/empresa.component';
import { UsuarioComponent } from 'src/app/shared/components/usuarios/usuario.component';
import { EnderecoComponent } from 'src/app/shared/components/endereco/endereco.component';
import { AtendimentosComponent } from 'src/app/shared/components/atendimentos/atendimentos.component';
import { ExerciciosComponent } from 'src/app/shared/components/exercicios/exercicios.component';
import { DashboardComponent } from 'src/app/shared/components/dashboard/dashboard.component';
import { DetalhamentoAlunoComponent } from 'src/app/shared/components/detalhamento-aluno/detalhamento-aluno.component';
import { FormEditarAtendimentoComponent } from 'src/app/shared/components/form-editar-atendimento/form-editar-atendimento.component';
import { FormCriarAtendimentoComponent } from 'src/app/shared/components/form-criar-atendimento/form-criar-atendimento.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'editar-atendimento/:id', component: FormEditarAtendimentoComponent},
      { path: 'criar-atendimento', component: FormCriarAtendimentoComponent},
      { path: 'atendimentos', component: AtendimentosComponent },
      { path: 'exercicios', component: ExerciciosComponent },
      { path: 'detalhamento-aluno', component: DetalhamentoAlunoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
