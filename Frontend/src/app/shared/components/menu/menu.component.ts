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

  alterarEstadoMenu() {
    this.menuaberto = !this.menuaberto
  }
}
