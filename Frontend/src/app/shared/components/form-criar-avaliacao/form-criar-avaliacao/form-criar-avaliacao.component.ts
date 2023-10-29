import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvaliacaoService } from 'src/app/shared/services/avaliacao.service';
import { ListagemUsuariosService } from 'src/app/shared/services/listagem-usuarios.service';

@Component({
  selector: 'app-form-criar-avaliacao',
  templateUrl: './form-criar-avaliacao.component.html',
  styleUrls: ['./form-criar-avaliacao.component.css']
})
export class FormCriarAvaliacaoComponent {
 alunos: any[] = []
  professores: any[] = []
  registrarForm: FormGroup

  constructor(private service: AvaliacaoService, private route: Router) {
    // Criação do formulário
    this.registrarForm = new FormGroup({
      'aluno': new FormControl('', Validators.required),

      'professor': new FormControl('', Validators.required),

      'titulo': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),

      'descricao': new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),

      'materia': new FormControl('', Validators.required),

      'nota': new FormControl('', Validators.required),
      
      'notaMaxima': new FormControl('', Validators.required),

      'data': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    this.getAlunos();
    this.getProfessores();
  }

  criarAvaliacao() {

    const aluno = this.registrarForm.get('aluno')?.value
    const professor = this.registrarForm.get('professor')?.value
    const descricao = this.registrarForm.get('descricao')?.value
    const titulo = this.registrarForm.get('titulo')?.value
    const materia = this.registrarForm.get('materia')?.value
    const data = this.registrarForm.get('data')?.value
    const nota = parseInt(this.registrarForm.get('nota')?.value)
    const notaMaxima = parseInt(this.registrarForm.get('notaMaxima')?.value)

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

    this.service.postAvaliacao(postData)
      .subscribe((result) => {
        alert("Nova avaliação criado com sucesso!")
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

  // Validação dos campo
  mensagemErro(campo: string) {
    return (this.registrarForm.get(campo)?.value === null || this.registrarForm.get(campo)?.value.length === 0) && this.registrarForm.get(campo)?.touched
  }

  mensagemErroTamanho(campo: string, tamanhoMaximo: number, tamanhoMinimo: number) {
    return (this.registrarForm.get(campo)?.value.length < tamanhoMinimo || this.registrarForm.get(campo)?.value.length > tamanhoMaximo) && this.registrarForm.get(campo)?.touched
  }

  mensagemErroSelect(campo: string) {
    return (this.registrarForm.get(campo)?.value === '' || this.registrarForm.get(campo)?.value === 'Selecione') && this.registrarForm.get(campo)?.touched
  }

  // Método edição do formato da data
  formatarData(data: string) {
    const parts = data.split('-')
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }

}
