import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { QuizDataService } from '../quiz-data.service';

@Component({
  selector: 'app-quiz-page',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent {
  id: number;
  quizData: any;
  resultData: any = {};

  constructor(private route: ActivatedRoute, private QuizDataService: QuizDataService){
    this.id = 0
  }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    }),

    //trata dados vinda da api
    this.QuizDataService.getData().subscribe((data) => {
      this.quizData = data
      this.resultData = this.quizData.record
      console.log(this.resultData)
    })
  }

}
