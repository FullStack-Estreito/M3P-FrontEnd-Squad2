import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalhamentoAlunoService } from 'src/app/shared/services/detalhamento-aluno.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {
  aluno_id: number = 1
  avaliacaoes: any[] = []
  avaliacaoOriginal: any[] = []
  pesquisa: string = ''

  constructor(private service: DetalhamentoAlunoService, private route: Router) { }


  ngOnInit() {
    this.getAvaliacao()
  }

  search() {
    if (this.pesquisa) {

      this.avaliacaoes = this.avaliacaoOriginal
        .filter(user =>
          user.aluno_nome['nome'].toLowerCase().includes(this.pesquisa.toLowerCase())
        );

      if (this.avaliacaoes.length === 0) {
        this.avaliacaoes = this.avaliacaoOriginal;
        alert("Nenhum resultado encontrado!");
      }

    }
    else if (this.pesquisa === '') {
      this.avaliacaoes = this.avaliacaoOriginal;
    }
  }


  // Métodos
  getAvaliacao() {
    this.service.getAvaliacoes()
      .subscribe((result) => {
        this.avaliacaoes = result
        this.avaliacaoOriginal = [...this.avaliacaoes]
      });
  };

  deletarAvaliacao(id: number) {
    this.service.deleteAvaliacao(id)
      .subscribe(() => {
        alert("Deletado com sucesso!")
        this.getAvaliacao()
      },
        (error: any) => {
          console.error('Erro ao deletar Avaliacao:', error);
        }
      );
  }

  redirecionarFormEditarAvaliacao(id: number) {
    this.route.navigate([`/private/editar-avaliacao/${id}`])
  }

  redirecionarFormCriarAvaliacao() {
    this.route.navigate([`/private/criar-avaliacao`])
  }
}
