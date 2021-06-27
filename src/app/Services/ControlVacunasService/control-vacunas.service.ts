import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlVacunas } from 'src/app/Models/controlvacunas';

const baseUrl = "https://localhost:44364/api/ControlVacunacion";
@Injectable({
  providedIn: 'root'
})
export class ControlVacunasService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<ControlVacunas[]> {
    return this.http.get<ControlVacunas[]>(baseUrl);
  }

  getById(id: any): Observable<ControlVacunas> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(controlVacunas: ControlVacunas) {
    return this.http.post(baseUrl, controlVacunas);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
