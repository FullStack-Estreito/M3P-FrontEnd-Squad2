import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IEndereco } from '../interfaces/IEndereco';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(private http: HttpClient) {  }
  idDelete = 0;
  atvBotao = false;
  boolEditar = false;
  idDetail = 0;
  enderecos: Array<IEndereco> = [];
  usuarios: Array<IUsuario> = [];
  apiBackBase = "http://localhost:5009"

  id_Endereco: number = this.enderecos.length;

  getCep(cep: string): Observable<IEndereco> {
    return this.http.get<IEndereco>(`http://viacep.com.br/ws/${cep}/json`);
  }

  getAll(endpoint: string, tipo: any): Observable<typeof tipo[]> {
    return this.http.get<[]>(`${this.apiBackBase}/${endpoint}`);
  }


  add(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.apiBackBase}/CriarUsuarioCompleto`, usuario);
  }

  edit(usuario: IUsuario, id: number): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.apiBackBase}/Update/${id}`, usuario)
  }
  getId(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.apiBackBase}/ObterUsuarioPorId/${id}`)
  }

  del(id: number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(`${this.apiBackBase}/DeletarUsuario/${id}`)
  }

}
