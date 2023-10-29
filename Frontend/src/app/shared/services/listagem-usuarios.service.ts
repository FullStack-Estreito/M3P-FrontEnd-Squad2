import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListagemUsuariosService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios(){
    return this.httpClient.get<IUsuario[]>(`${environment.apiBack}/api/usuarios?empresaId=1`)
  }

  getAlunos(){
    return this.httpClient.get<IUsuario[]>(`${environment.apiBack}/api/usuarios?empresaId=1&tipo=Aluno`)
  }

  deleteUsuario(id: number){
    return this.httpClient.delete(`${environment.apiBack}/api/usuarios/${id}`)
  }
}
