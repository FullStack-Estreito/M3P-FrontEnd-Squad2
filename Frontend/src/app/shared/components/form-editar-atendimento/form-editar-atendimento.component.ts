import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';
import { IAtendimento } from '../../interfaces/IAtendimento';
import { serviceAtendimento } from 'src/app/shared/services/serviceAtendimento';

@Component({
  selector: 'app-form-editar-atendimento',
  templateUrl: './form-editar-atendimento.component.html',
  styleUrls: ['./form-editar-atendimento.component.css']
})
export class FormEditarAtendimentoComponent implements OnInit {

  modoEdicao = false;
  atendimentoEdicao?: IAtendimento;
  atendimentoData: IAtendimento[] = [];
  editarAtendimentoForm: FormGroup;
  serviceAtedimento: any;
  route: any;
  serviceAtendimento: any;


  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
    this.editarAtendimentoForm = new FormGroup({
      'id': new FormGroup('', [Validators.required]),
      'descricao': new FormControl('', [Validators.required]),
      'data': new FormControl('', [Validators.required]),
      'aluno_id': new FormControl('', [Validators.required]),
      'pedagogo_id': new FormControl('', [Validators.required]),
    });
  }

  // Validador personalizado para permitir que o campo "finalizado" seja opcional
  private requiredTrueOrNull(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value === true || value === false || value === null) {
        return null; // Válido quando for true, false ou null (opcional)
      }
      return { 'required': { value } }; // Inválido quando diferente de true, false ou null
    };
  }

  async ngOnInit() {
    this.atendimentoEdicao = await this.serviceAtendimento.obterAtendimentoPorId();
    this._preencherCamposFormularioEdicao();
  }

  private _preencherCamposFormularioEdicao() {
    this.editarAtendimentoForm.get('id')?.setValue(this.atendimentoEdicao?.id);
    this.editarAtendimentoForm.get('id_Aluno')?.setValue(this.atendimentoEdicao?.aluno_id);
    this.editarAtendimentoForm.get('descricao')?.setValue(this.atendimentoEdicao?.descricao);
    this.editarAtendimentoForm.get('data')?.setValue(this.atendimentoEdicao?.data);
    this.editarAtendimentoForm.get('id_Pedagogo')?.setValue(this.atendimentoEdicao?.pedagogo_id);
  }

  // async onSubmit() {
  //   const atendimento: IAtendimento = {
  //     id: this.editarAtendimentoForm.get('id')?.value,
  //     aluno_id: this.editarAtendimentoForm.get('id_Aluno')?.value,
  //     descricao: this.editarAtendimentoForm.get('descricao')?.value,
  //     data: this.editarAtendimentoForm.get('data')?.value,
  //     pedagogo_id: this.editarAtendimentoForm.get('id_Pedagogo')?.value,
  //   };

  // if (this.modoEdicao) {
  //    atendimento.id = this.atendimentoEdicao?.id;
  //    await this.serviceAtendimento.editar(atendimento);
  //  }
  //  else {
  //    await this.serviceAtendimento.cadastrar(atendimento);
  //  }
  //  this.router.navigate(['/privado/pedagogicos']);/
  //}


//  validarMensagemDeErro(field: string) {
//    return this.editarAtendimentoForm.get(field)?.invalid && this.editarAtendimentoForm.get(field)?.touched;
  }
