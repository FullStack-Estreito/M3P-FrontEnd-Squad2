import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Dados para os cards de quantidade
  quantidadeAlunos: number = 0
  usuarios: any[] = []
  quantidadeExercicios: number = 0
  quantidadeAvaliacoes: number = 0
  quantidadeAtendimentos: number = 0

  // Dados para listagem de alunos
  tipoUsuario: string = "Administrador"


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getAlunos()
      .subscribe((data) => {
        this.quantidadeAlunos = data.length
      })

    this.dashboardService.getExercicios()
      .subscribe((data) => {
        this.quantidadeExercicios = data.length
      })

    this.dashboardService.getAvaliacoes()
      .subscribe((data) => {
        this.quantidadeAvaliacoes = data.length
      })

    this.dashboardService.getAtendimentos()
      .subscribe((data) => {
        this.quantidadeAtendimentos = data.length
      })
  }
}
