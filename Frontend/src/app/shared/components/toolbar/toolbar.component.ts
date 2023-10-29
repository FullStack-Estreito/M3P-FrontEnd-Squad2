import { Component } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { DetalhamentoAlunoService } from '../../services/detalhamento-aluno.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  nomeEmpresa: string = ''
  logo: string = ''
  usuarioId: string | undefined 
  usuario: string = ''


  constructor(private empresaService: EmpresaService,
    private userService: DetalhamentoAlunoService) {}

  ngOnInit(){
    this.getDadosEmpresa();
    this.getDadosUser();
  } 

  getDadosEmpresa()
  {
    this.empresaService.getEmpresa(1)
      .subscribe((result) => {
        this.nomeEmpresa = result.nome_Empresa
        this.logo = result.logotipo_URL
      })
  }

  getDadosUser(){
    const id = sessionStorage.getItem('userId');

    if (id !== null) {
      this.usuarioId = id;
    } else {
      this.usuarioId = '';
    }

    const idNumber = parseInt(this.usuarioId)
    this.userService.getAluno(idNumber)
    .subscribe((result) => {
      this.usuario = result.nome
    })
  }
}


