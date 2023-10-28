import { FrontService } from '../../services/front.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { IEndereco } from '../../interfaces/IEndereco';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  usuario!: IUsuario;
  end!: IEndereco;
  constructor(private router: ActivatedRoute, private route: Router, private frontService: FrontService) {
  }
  BuscaCep() {
    this.frontService.getCep(this.end.cep).subscribe((ceps => {
      this.end = ceps;
    }))
  }
  endi: Array<IEndereco> = []

  PreencheForm() {
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.frontService.getId(id, "obterUsuarioPorId", this.frontService.usuarios).subscribe((item) => {
      this.usuario = item;
    });

  }
  ngOnInit(): void {
    this.PreencheForm();
    const idEnd = Number(this.router.snapshot.paramMap.get("idEnd"))
    this.frontService.getId(idEnd, 'obterEndPorId', this.frontService.enderecos).subscribe((itemEnd) => {
      this.end = itemEnd;
    });
    this.BuscaCep();
  }
}

