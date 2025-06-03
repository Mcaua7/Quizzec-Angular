import { QuizDataService } from './../quiz-data.service';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private QuizDataService:QuizDataService){}

  quizData: any;
  resultData: any = {}

 
  ngOnInit(): void {
    this.QuizDataService.getData().subscribe((data) => {
      this.quizData = data
      this.resultData = this.quizData.record
    })
  }
  
}
