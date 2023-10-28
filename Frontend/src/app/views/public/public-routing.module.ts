import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { SiginComponent } from '../sigin/sigin.component';


const routes: Routes = [
  {path: '', component: PublicComponent,
  children: [
    {path: '', redirectTo: 'sigin', pathMatch: 'full'},
    {path: 'sigin', component: SiginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
