import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  @Input() usuarioData: IUsuario | null = null;

  enderecos: Array<IEndereco> = [];
  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  usuarios: Array<IUsuario> = [];
  tipoUsuario = sessionStorage.getItem('user');
  disableBotao = true;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
    // this.NP()

  }

  showFormularioRegistro: boolean = false;
  showFormularioEditar: boolean = false;

  NP() {
    if (this.tipoUsuario !== 'aluno')
      this.disableBotao = false
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

  // BuscarEnderecos() {
  //   this.frontService.getAll("ListarEndereco", this.enderecos).subscribe(user => {
  //     this.enderecos = user;
  //     console.log(this.frontService.id_Endereco);
  //     console.log(user.length);
  //     for (let i = 0; i < this.enderecos.length; i++) {
  //       if (this.enderecos[i].id > this.endId) {
  //         this.endId = this.enderecos[i].id;
  //       }
  //     }
  //   });
  // }

  // Buscar() {
  //   this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
  //     this.usuarios = user;
  //     console.log(user);
  //   })
  // }


  // salvar() {
  //   this.frontService.add(this.registerForm.value, this.usuarios, "CriarUsuario").subscribe((user => {
  //     this.usuarios.push(user);
  //     // this.Buscar();
  //   }));
  // }
  // editar() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   } else
  //     this.frontService.edit(this.registerForm.value, this.frontService.idDelete).subscribe(user => {
  //       this.usuarios.push(user);
  //     });
  //   this.frontService.boolEditar = false;
  //   this.router.navigate(['/']);
  // }

  // excluir() {
  //   this.frontService.del(this.frontService.idDelete).subscribe(user => {
  //     this.usuarios.push(user);
  //     alert("deletado");
  //     // this.Buscar();
  //   });
  // }

  // OnSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   } else {
  //     this.salvar();
  //     this.router.navigate(['/'])
  //   }
  // }

  // EditarUsuario() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   } else
  //     this.frontService.edit(this.registerForm.value, this.frontService.idDetail).subscribe(user => {
  //       this.frontService.usuarios.push(user);
  //     });
  //   this.frontService.boolEditar = false;
  //   this.router.navigate(['/home']);
  // }

  // ngOnInit(): void {
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
  // }


}

