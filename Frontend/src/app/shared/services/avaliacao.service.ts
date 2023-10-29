import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAvaliacao } from '../interfaces/IAvaliacao';
import { IUsuario } from '../interfaces/IUsuario';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private httpClient: HttpClient) { }
  getAvaliacaos(){
    return this.httpClient.get<IAvaliacao[]>(`${environment.apiBack}/api/avaliacao`)
  }

  getAvaliacao(id: number){
    return this.httpClient.get<IAvaliacao>(`${environment.apiBack}/api/avaliacao/${id}`)
  }

  deleteAvaliacao(id: number){
    return this.httpClient.delete(`${environment.apiBack}/api/avaliacao/${id}`)
  }

  getAlunos(){
    return this.httpClient.get<IUsuario[]>(`${environment.apiBack}/api/avaliacao?empresaId=1&tipo=Aluno`)
  }

  getProfessores(){
    return this.httpClient.get<IUsuario[]>(`${environment.apiBack}/api/avaliacao?empresaId=1&tipo=Professor`)
  }

  postAvaliacao(novoAvaliacao: IAvaliacao){
    return this.httpClient.post(`${environment.apiBack}/api/avaliacao`, novoAvaliacao)
  }

  updateAvaliacao(id: number, data: IAvaliacao){
    return this.httpClient.put(`${environment.apiBack}/api/avaliacao/${id}`, data)
  }
}
