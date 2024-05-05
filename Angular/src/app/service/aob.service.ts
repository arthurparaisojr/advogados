import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Advogado} from "../interface/advogado";

@Injectable({
    providedIn: 'root'
})
export class AobService {

    private apiUrl = 'http://yourapi.com/api/usuario';


    constructor(private http: HttpClient) {
    }

    salvarAdvogado(user: Advogado): Observable<Advogado> {
        return this.http.post<Advogado>(`${this.apiUrl}`, user);
    }

    getAllAdvogado(): Observable<Advogado[]> {
        return this.http.get<Advogado[]>(`${this.apiUrl}`);
    }

    atualizarAdvogado(user: Advogado): Observable<Advogado> {
        return this.http.post<Advogado>(`${this.apiUrl}`, user);
    }

    deleteAdvogado(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getAdvogadoById(id: string): Observable<Advogado> {
        return this.http.get<Advogado>(`${this.apiUrl}/${id}`);
    }
}
