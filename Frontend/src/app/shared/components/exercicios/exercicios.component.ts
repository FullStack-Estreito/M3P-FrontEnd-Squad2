import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  
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
