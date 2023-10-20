import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/shared/services/front.service';
import { navBarData } from './nav-data';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarios: Array<IUsuario> = [];
  constructor(private frontService: FrontService, private route: Router) {
    this.Buscar();
  }

  navData = navBarData;
  ngOnInit(): void { }


  collapsed = false;
  toogleCollapsed() {
    this.collapsed = !this.collapsed
  }
  closeSideNav() {
    this.collapsed = false
  }

  Buscar() {
    this.frontService.getAll("ListarUsuarios", this.usuarios).subscribe(user => {
      this.usuarios = user;
      console.log(user);
    })
  }
}
