import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  implements OnInit{



  quiz: Quiz[] | undefined;


  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.getquiz();
  }

  private getquiz(){
    this.quizService.getQuizlist().subscribe(data => {
      this.quiz = data;
    });
  }
}
