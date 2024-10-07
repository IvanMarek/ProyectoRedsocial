import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class NombreServicioService {
private apiUrl = 'http://localhost:3000/usuario'; // URL del backend de NestJS
constructor(private http: HttpClient) { }

// Método para realizar una solicitud GET
obtenerDatos(): Observable<any> {
return this.http.get<any>(`${this.apiUrl}`);
}
// Método para realizar una solicitud POST
ingresar(data: any): Observable<any> {
return this.http.post<any>(`${this.apiUrl}/login`, data);
}
// Método para realizar una solicitud POST de registro
registrar(data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/register`, data);
}
}