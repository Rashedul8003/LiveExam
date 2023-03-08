import { Component, OnInit } from '@angular/core';
import { Result } from '../result'
import { ResultService } from '../result.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit{

  results: Result[] | undefined;

  constructor(private resultService:ResultService,private router:Router){}


    
  ngOnInit(): void {
    this.getResult();
  }
  

  getResult(){
    this.resultService.getResultList().subscribe(data=>{
      this.results=data;
      console.log(this.results)
    });
  }



}
