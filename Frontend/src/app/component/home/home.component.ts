import { Router } from '@angular/router';
import { FrontService } from './../../service/front.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/IUsuario';

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
    throw new Error('Method not implemented.');
  }

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }

  Detalhes(id: number) {
    this.frontService.idDetail = id;
    this.frontService.boolEditar = true;
    this.frontService.atvBotao = true;
    this.router.navigate([`/edit/${id}`])
  }





}
