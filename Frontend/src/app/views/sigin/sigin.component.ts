import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interfaces/ILogin';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  submitted = false;
  usuarios: Array<IUsuario> = [];
  loginUsuario: Array<ILogin> = [];
  token: any;
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
    this.Buscar();
  }


  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    });
  }

  verificarLogin(): boolean {
    var index = 400;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].email == this.registerForm.get('email')?.value) {
        index = i;
      }
    }
    if (this.usuarios[index].senha == this.registerForm.get('senha')?.value) {
      sessionStorage.setItem('userTipo', this.usuarios[index].tipo);
      sessionStorage.setItem('userNome', this.usuarios[index].nome);
      sessionStorage.setItem('userId', this.usuarios[index].id.toString())
      return true;
    }
    else {
      return false;
    }
  }

  async Logar() {
    this.frontService.sigin(this.registerForm.value).subscribe(login => {
      this.loginUsuario.push(login);
      this.token = login;
      sessionStorage.setItem('token', this.token.token);
    });


  }

  async OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return
    }
    else {
        var logado = this.verificarLogin();
      if (logado == true) {
        await this.Logar();
        this.router.navigate([`/private/`]);
      } else {
        alert('usuário ou senha errados');
      }
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [0],
      email: ['125@gmail.com', [Validators.required]],
      senha: ['3333333', [Validators.required]],
      tipo: ['teste']
    });
  }
}
