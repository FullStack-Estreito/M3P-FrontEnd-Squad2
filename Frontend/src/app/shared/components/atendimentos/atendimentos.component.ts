import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { IAtendimento } from 'src/app/shared/interfaces/IAtendimento';
import { FrontService } from 'src/app/shared/services/front.service';
import { serviceAtendimento } from '../../services/serviceAtendimento';
import { IUsuarioInput } from '../../interfaces/IUsuarioInput';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) { }
  atendimentoData: IAtendimento [] = [];
  async ngOnInit() {
//    this.atendimentoData = await this.serviceAtendimento.obterAtendimento();
}
  editar() {
    this.router.navigate(['form-editar-atendimento']);
  }
}
