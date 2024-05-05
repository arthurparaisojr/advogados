import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Cidade} from "../interface/cidade";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CidadeService {

    private apiUrl = 'http://yourapi.com/api/usuario';


    constructor(private http: HttpClient) {
    }

    salvarCidade(city: Cidade): Observable<Cidade> {
        return this.http.post<Cidade>(`${this.apiUrl}`,city);
    }
    getAllCidade(): Observable<Cidade[]> {
        return this.http.get<Cidade[]>(`${this.apiUrl}`);
    }
    atualizarCidade(city: Cidade): Observable<Cidade> {
        return this.http.post<Cidade>(`${this.apiUrl}`,city);
    }
    deleteCidade(id:string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getCidadeById(id:string): Observable<Cidade> {
        return this.http.get<Cidade>(`${this.apiUrl}/${id}`);
    }
}
