import { FrontService } from './../../service/front.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEndereco } from 'src/app/interfaces/IEndereco';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  usuarios: Array<IUsuario> = [];
  usuarioData!: IUsuario;
  end!: IEndereco;
  constructor(private router: ActivatedRoute, private route: Router, private frontService: FrontService) {
  }


  BuscaCep() {
    this.frontService.getCep(this.end.cep).subscribe((ceps => {
      this.end = ceps;
    }))
  }


  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get("id"))
    this.frontService.getId(id, "usuarios", this.frontService.usuarios).subscribe((item) => {
      this.end = item;
    });
    // this.BuscaCep();
  }
}
