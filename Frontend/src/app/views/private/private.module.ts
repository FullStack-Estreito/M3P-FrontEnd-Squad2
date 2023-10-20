import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { PrivateRoutingModule } from './private-routing.module';
import { RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EmpresaComponent } from '../../shared/components/empresa/empresa.component';
import { UsuarioComponent } from '../../shared/components/usuario/usuario.component'
import { FormCriarUsuarioComponent } from '../../shared/components/form-criar-usuario/form-criar-usuario.component';
import { FormEditarUsuarioComponent } from '../../shared/components/form-editar-usuario/form-editar-usuario.component';

@NgModule({
  declarations: [
    PrivateComponent,
    MenuComponent,
    ToolbarComponent,
    EmpresaComponent,
    UsuarioComponent,
    FormCriarUsuarioComponent,
    FormEditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    RouterModule
  ]
})
export class PrivateModule { }
