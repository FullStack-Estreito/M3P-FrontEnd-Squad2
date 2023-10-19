import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { PrivateRoutingModule } from './private-routing.module';
import { RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';


@NgModule({
  declarations: [
    PrivateComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    RouterModule
  ]
})
export class PrivateModule { }
