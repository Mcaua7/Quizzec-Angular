import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { QuizDataService } from '../quiz-data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz-game',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './quiz-game.component.html',
  styleUrl: './quiz-game.component.scss'
})
export class QuizGameComponent {
  id: number;
  quizData: any;
  resultData: any = {};
  quizGame: any = [{}];

  constructor(private route: ActivatedRoute, private QuizDataService: QuizDataService){
    this.id = 0
  }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
      console.log('id: ' , this.id)
    }),

    //trata dados vinda da api
    this.QuizDataService.getData().subscribe((data) => {
      this.quizData = data
      this.resultData = this.quizData.record
      this.quizGame = this.quizData.record[this.id].quizData
      //console.log("Result Data",this.resultData)
      console.log("Quz data", this.quizGame)
    })
  }
}
