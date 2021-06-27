import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudadano } from 'src/app/Models/ciudadano';

const baseUrl = "https://localhost:44364/api/Ciudadano";

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ciudadano[]> {
    return this.http.get<Ciudadano[]>(baseUrl);
  }

  getById(id: any): Observable<Ciudadano> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(ciudadano: Ciudadano) {
    return this.http.post(baseUrl, ciudadano);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
