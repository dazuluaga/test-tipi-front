import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { personModel } from '../shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class TipiService {

  url: string = "http://localhost:8080/tipi/api";
  urlPingPong: string = "http://localhost:8080/tipi/pingPong/list";

  constructor(private http: HttpClient) { }

  getPerson(): Observable<personModel[]>{
    return this.http.get<personModel[]>(`${this.url}/list`)
  }

  createPersona (person: personModel) {
    return this.http.post<personModel>(`${this.url}/save`, person);
  }

  updatePersona (person: personModel) {
    return this.http.put<personModel>(`${this.url}/update`, person);
  }

  deletePersona (id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  getPingPong(count: number): Observable<any>{
    return this.http.get(`${this.urlPingPong}/${count}`);
  }
}
