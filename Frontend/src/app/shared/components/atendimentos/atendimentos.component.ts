import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { IAtendimento } from 'src/app/shared/interfaces/IAtendimento';
import { FrontService } from 'src/app/shared/services/front.service';
import { IUsuarioInput } from '../../interfaces/IUsuarioInput';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {
  @Input() atendimentoData: IAtendimento | null = null;

//  atendimento: Array<IAtendimento> = [];
//  submitted = false;
//  disBotao = this.frontService.atvBotao;
//  registerForm!: FormGroup;
//  endId = 0;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {

  }
  showFormularioEditarAtendimento: boolean = true;

  formularioEditarAtendimento() {
    this.showFormularioEditarAtendimento = this.showFormularioEditarAtendimento;
    if (this.showFormularioEditarAtendimento === true) {
      this.showFormularioEditarAtendimento = false;
    }
  }

  editar() {
//    this.submitted = true;
//    if (this.registerForm.invalid) {
//      return;
//    } else
//      this.frontService.edit(this.registerForm.value, this.frontService.idDelete).subscribe(atendimento => {
//        this.atendimento.push(atendimentos);
//      });
//    this.frontService.boolEditar = false;
    this.router.navigate(['form-editar-atendimento']);
  }

  ngOnInit(): void {

  }
}
