import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { IAtendimento } from 'src/app/shared/interfaces/IAtendimento';
import { FrontService } from 'src/app/shared/services/front.service';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {
  @Input() atendimentoData: IAtendimento | null = null;

  atendimento: Array<IAtendimento> = [];
  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  endId = 0;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {

  }

  showFormularioBuscarAluno: boolean = false;
  showFormularioEditarAtendimento: boolean = false;

  formularioBuscarAluno() {
    this.showFormularioBuscarAluno = this.showFormularioBuscarAluno;
    if (this.showFormularioEditarAtendimento === true) {
      this.showFormularioEditarAtendimento = false;
    }
  }

  editar() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else
      this.frontService.edit(this.registerForm.value, this.frontService.idDelete).subscribe(user => {
        this.usuarios.push(user);
      });
    this.frontService.boolEditar = false;
    this.router.navigate(['/']);
  }

  excluir() {
    this.frontService.del(this.frontService.idDelete).subscribe(user => {
      this.usuarios.push(user);
      alert("deletado");
      this.Buscar();
    });
  }

  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.salvar();
      this.router.navigate(['/'])
    }
  }

  EditarUsuario() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else
      this.frontService.edit(this.registerForm.value, this.frontService.idDetail).subscribe(user => {
        this.frontService.usuarios.push(user);
      });
    this.frontService.boolEditar = false;
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    // this.BuscarEnderecos();
    // this.registerForm = this.formBuilder.group({
    //   id: [0],
    //   nome: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   cpf: ['', [Validators.required]],

    //   cep: ['', [Validators.required]],

    //   telefone: ["2222222211"],
    //   genero: ["male"],
    //   tipo: ["admin"],
    //   status_sistema: [true],
    //   senha: ["12345676"],
    //   matricula_Aluno: ["12345"],
    //   codigo_Registro_Professor: [1],
    //   endereco_Id: [this.registerForm.get('idEnd')?.value],
    //   empresa_Id: [1],

    //   idEnd: [0],
    //   localidade: [''],
    //   logradouro: [''],
    //   bairro: [''],
    //   uf: [''],
    //   numero: [''],
    //   complemento: ['']
    // });
  }


}

