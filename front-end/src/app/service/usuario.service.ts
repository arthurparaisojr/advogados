import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Usuario} from "../interface/usuario";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl = 'http://yourapi.com/api/usuario';


    constructor(private http: HttpClient) {
    }

    salvarUsuario(user: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.apiUrl}`,user);
    }
    getAllUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiUrl}`);
    }
    atualizarUsuario(user: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.apiUrl}`,user);
    }
    deleteUsuario(id:string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getUsuarioById(id:string): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
    }
}