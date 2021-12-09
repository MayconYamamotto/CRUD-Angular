import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumos } from '../model/insumos';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  baseUrl = "http://localhost:3000/insumos";

  constructor(private http: HttpClient) {}

  create(insumos: Insumos): Observable<Insumos> {
    return this.http.post<Insumos>(this.baseUrl, insumos);
  }

  read(): Observable<Insumos[]> {
    return this.http.get<Insumos[]>(this.baseUrl);
  }

  readById(id: number): Observable<Insumos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Insumos>(url);
  }

  updateById(id: number, insumos: Insumos): Observable<Insumos> {
    return this.http.put<Insumos>(`${this.baseUrl}/${id}`, insumos);
  }

  delete(id: number): Observable<Insumos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Insumos>(url);
  }
}
