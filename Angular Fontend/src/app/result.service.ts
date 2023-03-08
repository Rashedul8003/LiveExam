import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';
//import { Result } from './result';

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  private baseURL = "http://localhost:8082/api/r/";

  constructor(private httpClient: HttpClient) { }

  getResultList(): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseURL}`);
  }

}
