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
  listAnswer: number = 0;
  acertou: number[] = [];
  questionClicked: number[] = [];
  questionAnswer: number[] = [];
  correctIndex: number[] = [];
  pontos: number = 1000;

  constructor(private route: ActivatedRoute, private QuizDataService: QuizDataService){
    this.id = 0
  }

  AnswerVerify(n:any, i:any){
    //console.log("Clicado!", n)
    //console.log(this.quizGame[i]?.answers[4].correctIndex)
    if(n == this.quizGame[i]?.answers[4]?.correctIndex){
      console.log("acertou!", this.acertou)
      this.acertou.splice(i, 0, 1)
    }else{
      console.log("Errou!", this.acertou)
      this.acertou.splice(i, 0, 0)

      this.pontos = this.pontos - (1000/this.quizGame.length)
    }

    //console.log("pontos ", this.pontos)

    this.correctIndex.splice(i, 0, this.quizGame[i]?.answers[4]?.correctIndex) 
    //console.log("Correct index list", this.correctIndex)

    this.questionAnswer.splice(i, 0, n)
    //console.log(this.questionAnswer)
  }

  hadleClick( i: any ){
    //console.log("questao ", i, "Clicado")

    if(this.questionClicked.includes(i)){
      console.log("Ja foi clicado!")
    }else{
      this.questionClicked.splice(i, 0, i)
    }

    //console.log("questao clicada ",this.questionClicked)
  }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
      //console.log('id: ' , this.id)
    }),

    //trata dados vinda da api
    this.QuizDataService.getData().subscribe((data) => {
      this.quizData = data
      this.resultData = this.quizData.record
      this.quizGame = this.quizData.record[this.id].quizData
      //console.log("Result Data",this.resultData)
      //console.log("Quz data", this.quizGame)
    })
  }
  
  
}
