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
  @Input() endData: IEndereco | null = null;

  registerEndereco!: FormGroup;
  enderecos: Array<IEnderecoInput> = [];
  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  end!: IEndereco;
  usuarios: Array<IUsuario> = [];
  cepBool = false;

  token!: any
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
  }

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
    });

    this.frontService.getAll('ListarEndereco', this.frontService.enderecos).subscribe((item) => {
      this.enderecos = item;
    });
  }


  salvarUserEnd() {
    this.token = sessionStorage.getItem('token');
    this.frontService.add(this.registerForm.value, this.usuarios, "CriarUsuario", this.token).subscribe((user => {
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
  EditUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.frontService.edit(this.registerForm.value, this.frontService.idDetail).subscribe(pac => {
        this.frontService.usuarios.push(pac);
      });
      this.frontService.boolEditar = false;
      this.Buscar();
      alert('editado');
      this.router.navigate(['/private/home']);
    }
  }

  ExcluirUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.frontService.del(this.frontService.idDetail).subscribe(user => {
        this.usuarios.push(user);
        console.log("deletado " + user);
      });
      alert("deletado");
      this.Buscar();
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [0],
      nome: [this.usuarioData ? this.usuarioData.nome : ''],
      email: [this.usuarioData ? this.usuarioData.email : '12345@gmail.com'],
      cpf: [this.usuarioData ? this.usuarioData.cpf : ''],
      telefone: [this.usuarioData ? this.usuarioData.telefone : '', [Validators.required]],
      genero: [this.usuarioData ? this.usuarioData.genero : ''],
      tipo: [this.usuarioData ? this.usuarioData.tipo : ''],
      status_sistema: [true],
      senha: [this.usuarioData ? this.usuarioData.senha : "12345676"],
      matricula_Aluno: [this.usuarioData ? this.usuarioData.matricula_Aluno : "12345"],
      codigo_Registro_Professor: [this.usuarioData ? this.usuarioData.matricula_Aluno : 1],
      empresa_Id: [1],
      endereco_Id: [this.usuarioData ? this.usuarioData.endereco_Id : 0],
      Endereco: this.formBuilder.group({
        id: [0],
        cep: [this.endData ? this.endData.cep : '', [Validators.required]],
        localidade: [this.endData ? this.endData.localidade : '', [Validators.required]],
        logradouro: [this.endData ? this.endData.logradouro : '', [Validators.required]],
        bairro: [this.endData ? this.endData.bairro : ''],
        uf: [this.endData ? this.endData.uf : ''],
        numero: [this.endData ? this.endData.numero : ''],
        complemento: [this.endData ? this.endData.complemento : '']
      })
    });
  }

  get cepGet() {
    return this.registerForm.get('Endereco.cep')
  }

  // this.registerForm = this.formBuilder.group({
  //   id: [0],
  //   nome: [''],
  //   email: ['12345@gmail.com'],
  //   cpf: [''],
  //   telefone: ['', [Validators.required]],
  //   genero: [''],
  //   tipo: [''],
  //   status_sistema: [true],
  //   senha: ["12345676"],
  //   matricula_Aluno: ["12345"],
  //   codigo_Registro_Professor: [1],
  //   empresa_Id: [1],
  //   Endereco: this.formBuilder.group({
  //     id: [0],
  //     cep: ['', [Validators.required]],
  //     localidade: ['', [Validators.required]],
  //     logradouro: ['', [Validators.required]],
  //     bairro: [''],
  //     uf: [''],
  //     numero: [''],
  //     complemento: ['']
  //   })
  // });



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



