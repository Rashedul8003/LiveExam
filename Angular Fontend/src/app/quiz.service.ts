import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseURL = "http://localhost:8082/api/quiz";

  constructor(private httpClient: HttpClient) { }
  
  getQuizlist(): Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>(`${this.baseURL}`);
  }

 
}
