import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent {

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
