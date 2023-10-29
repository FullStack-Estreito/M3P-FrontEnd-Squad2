import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAvaliacao } from 'src/app/shared/interfaces/IAvaliacao';
import { AvaliacaoService } from 'src/app/shared/services/avaliacao.service';

@Component({
  selector: 'app-form-editar-avaliacao',
  templateUrl: './form-editar-avaliacao.component.html',
  styleUrls: ['./form-editar-avaliacao.component.css']
})
export class FormEditarAvaliacaoComponent {
  alunos: any[] = []
  professores: any[] = []
  avaliacaoIdString: string | null = ''
  avaliacaoIdNumber: number = 0
  editarForm: FormGroup

  avaliacao: IAvaliacao = {
    titulo: '',
    descricao: '',
    materia: '',
    data: '',
    professor_id: 0,
    aluno_id: 0,
    nota: 0,
    pontuacao_maxima: 0,
  }


  constructor(private service: AvaliacaoService, private route: Router, private activateRoute: ActivatedRoute) {
    // Criação do formulário
    this.editarForm = new FormGroup({
      'aluno': new FormControl('', Validators.required),

      'professor': new FormControl('', Validators.required),

      'titulo': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),

      'descricao': new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),

      'materia': new FormControl('', Validators.required),

      'data': new FormControl('', Validators.required),
      
      'nota': new FormControl('', Validators.required),
      
      'notaMaxima': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    // Pegando o ID do atendimento da URL
    this.activateRoute.paramMap.subscribe(params => {
      this.avaliacaoIdString = this.activateRoute.snapshot.paramMap.get('id')

      if (this.avaliacaoIdString !== null) {
        this.avaliacaoIdNumber = parseInt(this.avaliacaoIdString)
      }

    });
    this.getAlunos();
    this.getProfessores();
    this.getAvaliacao(this.avaliacaoIdNumber)
  }

  editarAvaliacao() {

    const aluno = this.editarForm.get('aluno')?.value
    const professor = this.editarForm.get('professor')?.value
    const descricao = this.editarForm.get('descricao')?.value
    const titulo = this.editarForm.get('titulo')?.value
    const materia = this.editarForm.get('materia')?.value
    const data = this.editarForm.get('data')?.value
    const nota = parseInt(this.editarForm.get('nota')?.value)
    const notaMaxima = parseInt(this.editarForm.get('notaMaxima')?.value)
    const dataFormatada = this.formatarData(data)
    const alunoNumber = parseInt(aluno)
    const professorNumber = parseInt(professor)

    const postData = {
      "titulo": titulo,
      "descricao": descricao,
      "materia": materia,
      "data": dataFormatada,
      "pontuacao_maxima": notaMaxima,
      "nota": nota,
      "professor_id": alunoNumber,
      "aluno_id": professorNumber,
    }

    this.service.updateAvaliacao(this.avaliacaoIdNumber, postData)
      .subscribe((result) => {
        alert("Avaliação editada com sucesso!")
        this.route.navigate(['/private/avaliacao'])
      })
  }

  // Lista de alunos
  getAlunos() {
    this.service.getAlunos()
      .subscribe((result) => {
        this.alunos = result
        console.log(this.alunos)
      })
  };

  // Lista de pedagogos
  getProfessores() {
    this.service.getProfessores()
      .subscribe((result) => {
        this.professores = result
      })
  };

  // Pegando os dados do avaliacao
  getAvaliacao(avaliacaoId: number) {
    this.service.getAvaliacao(avaliacaoId)
      .subscribe((result) => {
        this.avaliacao = result
        const dataFormatada = this.formatarDataInput(this.avaliacao.data)
        
        this.editarForm.patchValue({
          'descricao': this.avaliacao.descricao,
          'data': dataFormatada,
          'aluno': this.avaliacao.aluno_id,
          'professor': this.avaliacao.professor_id,
          'materia': this.avaliacao.materia,
          'titulo': this.avaliacao.titulo,
          'nota': this.avaliacao.nota,
          'pontuacao_maxima': this.avaliacao.pontuacao_maxima
        })
      })
  }

  // Validação dos campo
  mensagemErro(campo: string) {
    return (this.editarForm.get(campo)?.value === null || this.editarForm.get(campo)?.value.length === 0) && this.editarForm.get(campo)?.touched
  }

  mensagemErroTamanho(campo: string, tamanhoMaximo: number, tamanhoMinimo: number) {
    return (this.editarForm.get(campo)?.value.length < tamanhoMinimo || this.editarForm.get(campo)?.value.length > tamanhoMaximo) && this.editarForm.get(campo)?.touched
  }

  mensagemErroSelect(campo: string) {
    return (this.editarForm.get(campo)?.value === '' || this.editarForm.get(campo)?.value === 'Selecione') && this.editarForm.get(campo)?.touched
  }

  // Método edição do formato da data
  formatarData(data: string) {
    const parts = data.split('-')
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }

  formatarDataInput(data: string) {
    const parts = data.split('/')
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
}
