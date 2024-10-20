import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

    // Exemplo de um GET
    get<T>(endpoint: string): Observable<T> {
      return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }
  
    // Exemplo de um POST
    post<T>(endpoint: string, body: any): Observable<T> {
      return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
    }
  
    // Exemplo de um PUT
    put<T>(endpoint: string, body: any): Observable<T> {
      return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
    }
  
    // Exemplo de um DELETE
    delete<T>(endpoint: string): Observable<T> {
      return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
    }
}
