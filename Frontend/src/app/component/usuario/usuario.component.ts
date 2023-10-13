import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { FrontService } from 'src/app/service/front.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  @Input() usuarioData: IUsuario | null = null;

  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  usuarios: Array<IUsuario> = [];
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      telefone: ["2222222211"],
      genero: ["male"],
      tipo: ["admin"],
      status_sistema: [true],
      senha: ["12345676"],
      matricula_Aluno: ["12345"],
      codigo_Registro_Professor: [1],
      endereco_Id: [37],
      empresa_Id: [1]
    })
  }

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }


  salvar() {
    this.frontService.add(this.registerForm.value, this.usuarios, "CriarUsuario").subscribe((user => {
      this.usuarios.push(user);
    }))
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



}
