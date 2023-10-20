import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/interfaces/IEndereco';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';

import { HostListener } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioData: IUsuario | null = null;

  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  usuarios: Array<IUsuario> = [];
  endId = 0;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
  }

  salvar() {
    this.frontService.add(this.registerForm.value).subscribe((user => {
      this.usuarios.push(user);
      this.Buscar();
    }));
  }



  excluir() {
    this.frontService.del(this.frontService.idDelete).subscribe(user => {
      this.usuarios.push(user);
      alert("deletado");
    });
  }

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }


  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return
    } else {
      this.salvar();
      alert('salvo!');
      this.router.navigate(['/']);
    }
  }

  EditarUsuario() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return
    } else {
      this.frontService.edit(this.registerForm.value, this.frontService.idDetail).subscribe(user => {
        this.usuarios.push(user);
        this.Buscar();
      });
      this.frontService.boolEditar = false;
      alert('Editado com sucesso!');
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      id: [0],
      nome: [this.usuarioData ? this.usuarioData.nome : ''],
      email: [this.usuarioData ? this.usuarioData.email : '999'],
      cpf: [this.usuarioData ? this.usuarioData.cpf : '111.111.111-11'],
      telefone: [this.usuarioData ? this.usuarioData.telefone : "4444444"],
      genero: [this.usuarioData ? this.usuarioData.genero : "male"],
      tipo: [this.usuarioData ? this.usuarioData.tipo : ''],
      senha: [this.usuarioData ? this.usuarioData.senha : "12345676"],
      matricula_Aluno: [this.usuarioData ? this.usuarioData.matricula_Aluno : "12345"],
      codigo_Registro_Professor: [this.usuarioData ? this.usuarioData.codigo_Registro_Professor : 0],
      cep: [this.usuarioData ? this.usuarioData.cep : 'teste'],
      localidade: [this.usuarioData ? this.usuarioData.localidade : 'eeee'],
      uf: [this.usuarioData ? this.usuarioData.uf : 'ee'],
      logradouro: [this.usuarioData ? this.usuarioData.logradouro : 'eee'],
      numero: [this.usuarioData ? this.usuarioData.numero : 'eee'],
      complemento: [this.usuarioData ? this.usuarioData.complemento : 'eee'],
      bairro: [this.usuarioData ? this.usuarioData.bairro : 'eee'],
    });
  }
}




