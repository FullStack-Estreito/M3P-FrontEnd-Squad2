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
import { EnderecoComponent } from 'src/app/shared/components/endereco/endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EditComponent } from 'src/app/shared/components/edit/edit.component';

@NgModule({
  declarations: [
    PrivateComponent,
    MenuComponent,
    ToolbarComponent,
    EmpresaComponent,
    UsuarioComponent,
    FormCriarUsuarioComponent,
    FormEditarUsuarioComponent,
    EnderecoComponent,
    EditComponent
  ],
  providers: [provideNgxMask()],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    PrivateRoutingModule, NgxMaskDirective, NgxMaskPipe,
    RouterModule
  ]
})
export class PrivateModule { }
