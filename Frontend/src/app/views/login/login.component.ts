import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interfaces/ILogin';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { FrontService } from 'src/app/shared/services/front.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  submitted = false;
  usuarios: Array<IUsuario> = [];
  loginUsuario: Array<ILogin> = [];
  token: any;

  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
    this.Buscar();
  }

  registerForm!: FormGroup;

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    });
  }

  Logar() {
    this.frontService.sign(this.registerForm.value).subscribe(login => {
      // var logado = login;
      this.loginUsuario.push(login);
      this.token = login;
      console.log("token" + this.token);
    });
  }

  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      if (this.loginUsuario != null) {
        this.Logar();
        this.router.navigate([`/private/atendimentos`]);
      }
      else {
        console.log("token" + this.token);
        console.log("error");
      }
    }
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [0],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }


}


