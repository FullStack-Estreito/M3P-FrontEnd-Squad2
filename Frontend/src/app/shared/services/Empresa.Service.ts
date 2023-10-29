import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWhiteLabel } from '../interfaces/IWhiteLabel';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<IWhiteLabel[]>(`${environment.apiBack}/whiteLabel`)
    };
    atualizar(usuario: IWhiteLabel | any, id: number): Observable<IWhiteLabel> {
        return this.http.put<IWhiteLabel>(`${environment.apiBack}/whiteLabel/${id}`, usuario);
    };
}