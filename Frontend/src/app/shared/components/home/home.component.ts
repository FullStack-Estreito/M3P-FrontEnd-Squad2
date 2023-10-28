import { Router } from '@angular/router';
import { FrontService } from '../../services/front.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Frontend';


  submitted = false;
  disBotao = this.frontService.atvBotao;
  registerForm!: FormGroup;
  usuarios: Array<IUsuario> = [];
  constructor(private formBuilder: FormBuilder, private frontService: FrontService, private router: Router) {
    this.Buscar();
  }
  ngOnInit(): void {
  }

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }

  Detalhes(id: number, idEndereco: number) {
    this.frontService.idDetail = id;
    this.frontService.idDetailEnd = idEndereco;
    this.frontService.boolEditar = true;
    this.frontService.atvBotao = true;
    this.router.navigate([`private/edit/${id}`])
  }


}
