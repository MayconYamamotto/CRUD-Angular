import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaPrima } from '../model/materiaPrima';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  baseUrl = 'http://localhost:3000/materia-prima'

  constructor(private http: HttpClient) { }

  create(materiaPrima: MateriaPrima): Observable<MateriaPrima> {
    return this.http.post<MateriaPrima>(this.baseUrl, materiaPrima)
  }

  read(): Observable<MateriaPrima[]> {
    return this.http.get<MateriaPrima[]>(this.baseUrl)
  }

  readById(id: number): Observable<MateriaPrima> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<MateriaPrima>(url)
  }

  updateById(id: number, materiaPrima: MateriaPrima): Observable<MateriaPrima> {
    return this.http.put<MateriaPrima>(`${this.baseUrl}/${id}`, materiaPrima)
  }

  delete(id: number): Observable<MateriaPrima> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<MateriaPrima>(url)
}
}
