import { Component } from '@angular/core';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent {

  showFormularioRegistro: boolean = false;
  showFormularioEditar: boolean = false;

  formularioRegistro() {
    this.showFormularioRegistro = !this.showFormularioRegistro;
    if (this.showFormularioEditar === true) {
      this.showFormularioEditar = false;
    }
  }

  formularioEditar() {
    this.showFormularioEditar = !this.showFormularioEditar;
    if (this.showFormularioRegistro === true) {
      this.showFormularioRegistro = false;
    }
  }


}
