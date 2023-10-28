import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IEndereco } from '../interfaces/IEndereco';
import { IUsuario } from '../interfaces/IUsuario';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(private http: HttpClient) {
  }
  idDelete = 0;
  atvBotao = false;
  boolEditar = false;
  idDetail = 0;
  idDetailEnd = 0;
  enderecos: Array<IEndereco> = [];
  usuarios: Array<IUsuario> = [];
  apiBackBase = "http://localhost:5009"
  id_Endereco: number = this.enderecos.length;

  getCep(cep: string): Observable<any> {
    return this.http.get<any>(`http://viacep.com.br/ws/${cep}/json`);
  }

  getAll(endpoint: string, tipo: any): Observable<typeof tipo[]> {
    return this.http.get<[]>(`${this.apiBackBase}/${endpoint}`);
  }


  // getAll(endpoint: string, tipo: any, token: any): Observable<typeof tipo[]> {
  //   return this.http.get<[]>(`${this.apiBackBase}/${endpoint}`,
  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         "Authorization": `Bearer ${token}`
  //       })
  //     }
  //   );
  // }

  add(usuario: any, t: any, endpoint: string, token: any): Observable<typeof t> {
    return this.http.post<typeof t>(`${this.apiBackBase}/${endpoint}`, usuario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        })
      });
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

  sigin(login: any): Observable<any> {
    return this.http.post<any>(`${this.apiBackBase}/Login`, login)
  }

  addLog(usuario: any, t: any, endpoint: string): Observable<typeof t> {
    return this.http.post<typeof t>(`${this.apiBackBase}/${endpoint}`, usuario)
  }
}
