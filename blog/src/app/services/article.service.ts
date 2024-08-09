import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { article } from '../models/article.model';

const baseUrl = 'http://localhost:8080/api/articles';

@Injectable({
  providedIn: 'root'
})
export class articleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<article[]> {
    return this.http.get<article[]>(baseUrl);
  }

  get(id: any): Observable<article> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<article[]> {
    return this.http.get<article[]>(`${baseUrl}?title=${title}`);
  }
}
