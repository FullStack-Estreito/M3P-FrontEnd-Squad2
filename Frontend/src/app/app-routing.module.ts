import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';



const routes: Routes = [ 
  {path: '', loadChildren: () => import('../app/views/public/public.module').then(m => m.PublicModule)},
  {path: 'private', loadChildren: () => import('../app/views/private/private.module').then(m => m.PrivateModule)},
  { path: '**', component: NotFoundComponent }
]

// { path: 'usuario', component: UsuarioComponent },
// { path: 'endereco', component: EnderecoComponent },
//   { path: '', component: HomeComponent },
//   { path: 'edit/:id', component: EditComponent },
//   { path: '**', component: NotFoundComponent }



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
