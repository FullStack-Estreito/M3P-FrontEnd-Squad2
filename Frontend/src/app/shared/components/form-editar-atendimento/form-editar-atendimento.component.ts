import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAtendimento } from '../../interfaces/IAtendimento';
import { ListagemUsuariosService } from '../../services/listagem-usuarios.service';

@Component({
  selector: 'app-form-editar-atendimento',
  templateUrl: './form-editar-atendimento.component.html',
  styleUrls: ['./form-editar-atendimento.component.css']
})
export class FormEditarAtendimentoComponent implements OnInit {

  editarForm: FormGroup;
  atendimentoIdString: string | null = ''
  atendimentoIdNumber: number = 0
  alunos: any[] = []
  pedagogos: any[] = []
  atendimento: IAtendimento = {
    id: 0,
    data: '',
    descricao: '',
    aluno_id: 0,
    pedagogo_id: 0,
    aluno_nome: {nome: ''},
    pedagogo_nome: {nome: ''}
  }

  constructor(private service: ListagemUsuariosService,
    private router: Router,
    private activateRoute: ActivatedRoute) {

    // Formulário
    this.editarForm = new FormGroup({
      'descricao': new FormControl('', [Validators.required]),

      'data': new FormControl('', [Validators.required]),

      'aluno': new FormControl('', [Validators.required]),

      'pedagogo': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    // Pegando o ID do atendimento da URL
    this.activateRoute.paramMap.subscribe(params => {
      this.atendimentoIdString = this.activateRoute.snapshot.paramMap.get('id')

      if (this.atendimentoIdString !== null) {
        this.atendimentoIdNumber = parseInt(this.atendimentoIdString)
      }
      console.log('ID da URL:', this.atendimentoIdNumber);
    });

    this.getAlunos();
    this.getPedagogos();
    this.getAtendimento(this.atendimentoIdNumber);
  }

 
  // Lista de alunos
  getAlunos() {
    this.service.getAlunos()
      .subscribe((result) => {
        this.alunos = result
      })
  };

  // Lista de pedagogos
  getPedagogos() {
    this.service.getPedagogos()
      .subscribe((result) => {
        this.pedagogos = result
      })
  };

  // Pegando os valores do atendimento selecionado
  getAtendimento(id: number){
    this.service.getAtendimentoId(id)
    .subscribe((result) => {
      this.atendimento = result
      const dataFormatada = this.formatarDataInput(this.atendimento.data)
      console.log(this.atendimento.data)
      this.editarForm.patchValue({
        'descricao': this.atendimento.descricao,
        'data': dataFormatada,
        'aluno': this.atendimento.aluno_id,
        'pedagogo': this.atendimento.pedagogo_id
      })
    })
  }

  // Validação dos campo
  mensagemErro(campo: string) {
    return (this.editarForm.get(campo)?.value === null || this.editarForm.get(campo)?.value.length === 0) && this.editarForm.get(campo)?.touched
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

  editarAtendimento(){

    const aluno = this.editarForm.get('aluno')?.value
    const pedagogo = this.editarForm.get('pedagogo')?.value
    const descricao = this.editarForm.get('descricao')?.value
    const data = this.editarForm.get('data')?.value

    const dataFormatada = this.formatarData(data)
    const alunoNumber =  parseInt(aluno)
    const pedagogoNumber =  parseInt(pedagogo)

    const novosDados = {
      "data": dataFormatada,
      "descricao": descricao,
      "aluno_id": alunoNumber,
      "pedagogo_id": pedagogoNumber
    }

    this.service.updateAtendimento(this.atendimentoIdNumber, novosDados)
        .subscribe((result) => {
          console.log(result)
          alert("Atendimento editado com sucesso!")
          this.router.navigate(['/private/atendimentos'])
        })
  }
}
