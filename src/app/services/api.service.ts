import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`; // Ruta de autenticación en el servidor
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post(url, body, { headers });
  }

  getData(): Observable<any> {
    const url = `${this.apiUrl}/data`;
    return this.http.get(url);
  }
}
