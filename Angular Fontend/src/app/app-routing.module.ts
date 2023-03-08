import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
 {path:'quizpage', component:QuizComponent},
 {path:'quizlist', component:QuizListComponent},
 {path:'t',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
