import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direccion } from 'src/app/Models/direccion';

const baseUrl = "https://localhost:44364/api/Direccion";

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(baseUrl);
  }

  getById(id: any): Observable<Direccion> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(direccion: Direccion) {
    return this.http.post(baseUrl, direccion);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
