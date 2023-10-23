import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';
import { IUsuarioInput } from '../../interfaces/IUsuarioInput';
import { IEnderecoInput } from '../../interfaces/IEnderecoInput';

@Component({
  selector: 'app-form-criar-usuario',
  templateUrl: './form-criar-usuario.component.html',
  styleUrls: ['./form-criar-usuario.component.css']
})
export class FormCriarUsuarioComponent {

  @Input() usuarioData: IUsuario | null = null;

  registerEndereco!: FormGroup;
  enderecos: Array<IEnderecoInput> = [];
  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  end!: IEndereco;
  usuarios: Array<IUsuarioInput> = [];
  cepBool = false;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {}

  showFormularioRegistro: boolean = false;
  showFormularioEditar: boolean = false;

  BuscaCep() {
    this.frontService.getCep(this.cepGet?.value).subscribe((ceps => {
      this.end = ceps;
      this.cepBool = true;
    }));
  }


  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }

  salvarUserEnd() {
    this.frontService.add(this.registerForm.value, this.usuarios, "CriarUsuario").subscribe((user => {
      this.usuarios.push(user);
    }));
  }


  OnSubmitUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return
    } else {
      this.salvarUserEnd();
      alert("user salvo");
    }
  }



  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     id: [0],
      nome: [''],
      email: ['123@g.com'],
      cpf: [''],
      telefone: ['', [Validators.required]],
      genero: [''],
      tipo: [''],
      status_sistema: [true],
      senha: ["12345676"],
      matricula_Aluno: ["12345"],
      codigo_Registro_Professor: [1],
      empresa_Id: [1],
      Endereco: this.formBuilder.group({
        id: [0],
        cep: ['', [Validators.required]],
        localidade: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        bairro: [''],
        uf: [''],
        numero: [''],
        complemento: ['']
      })
    });
  }

  get cepGet() {
    return this.registerForm.get('Endereco.cep')
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



