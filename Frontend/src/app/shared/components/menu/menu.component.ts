import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  {

  constructor(private route: Router) {}

  menuaberto = false;
  tipoUsuario: string | undefined

  ngOnInit(){
    const userTipo = sessionStorage.getItem('userTipo');

    if (userTipo !== null) {
      this.tipoUsuario = userTipo;
    } else {
      this.tipoUsuario = '';
    }

  }

  alterarEstadoMenu() {
    this.menuaberto = !this.menuaberto
  }

  LogOut(){
    sessionStorage.removeItem('userTipo');
    sessionStorage.removeItem('userNome');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('logado');
    sessionStorage.removeItem('loggenIn');
    this.route.navigate([('/')]);
  }



}
