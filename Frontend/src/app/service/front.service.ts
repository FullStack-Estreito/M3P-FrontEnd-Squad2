import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';
import { IEndereco } from '../interfaces/IEndereco';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(private http: HttpClient) {
    this.BuscarEnderecos();
  }
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


  add(usuario: any, t: any, endpoint: string): Observable<typeof t> {
    return this.http.post<typeof t>(`${this.apiBackBase}/${endpoint}`, usuario);
  }

  edit(usuario: any, id: number): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.apiBackBase}/Update/${id}`, usuario)
  }
  getId(id: number, endPoint: string, t: any): Observable<typeof t> {
    return this.http.get<typeof t>(`${this.apiBackBase}/${endPoint}/${id}`)
  }

  del(id: number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(`${this.apiBackBase}/DeletarUsuario/${id}`)
  }

  BuscarEnderecos() {
    var end;
    this.getAll("ListarEndereco", this.enderecos).subscribe(user => {
      this.enderecos = user;
      console.log(this.enderecos.length);
      console.log(user.length);
    });
    return end;
  }



}
