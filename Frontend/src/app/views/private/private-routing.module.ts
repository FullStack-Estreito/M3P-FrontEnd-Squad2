import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from 'src/app/shared/components/empresa/empresa.component';


const routes: Routes = [
  {path: '', component: PrivateComponent, 
  children: [
    {path: '', redirectTo: 'empresa', pathMatch: 'full'},
    {path: 'empresa', component: EmpresaComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
