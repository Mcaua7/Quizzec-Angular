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
  indexAnswer: number = 4;

  constructor(private route: ActivatedRoute, private QuizDataService: QuizDataService){
    this.id = 0
  }
  
  //faz a verifição se a resposta dada foi correta
  AnswerVerify(n:any, i:any){

    if(n == this.quizGame[i]?.answers[4]?.correctIndex){
      //se tiver certa, modifica na lista 'acertou' colocando (1) na posição da questão;
      this.acertou.splice(i, 1, 1)
      console.log("acertou!", this.acertou)
    }else{
      //senão modifica para (0) na posiçao da questão;
      this.acertou.splice(i, 1, 0)
      console.log("Errou!", this.acertou)

      //no caso de erro, há uma subtração dos pontos
      this.pontos = this.pontos - (1000/this.quizGame.length)
    }
    console.log("quantidade de pontos: ", this.pontos)
    
    //recebe o index da resposta para exibir certo (background-green), errado (background-red);
    this.questionAnswer.splice(i, 0, n)
  }

  //Função para adicionar em uma lista;; 
  //serve para modificar a forma que aparece o bolco de resposta;
  hadleClick( i: any ){
    if(!this.questionClicked.includes(i)){
      this.questionClicked.splice(i, 0, i)
      console.log("questoes clicadas ",this.questionClicked)
    }
  }

  ngOnInit(): void{
    //Recebe o id para saber em qual quiz vai ser joogado;
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    }),

    //trata dados vinda da api;
    this.QuizDataService.getData().subscribe((data) => {
      this.quizData = data
      this.resultData = this.quizData.record
      this.quizGame = this.quizData.record[this.id].quizData

    })

    for(let i = 0; i<this.quizGame.length; i++){
      //adiciona um nuero neutro (2) para manter a estrutura da lsitagem de questão;
      this.acertou.push(2)

      //adiciona um numero neutro para atualizar corretamente quando for respondido;
      this.questionAnswer.push(0)

      //Atribui o index correto vindo do json para a lista correctIndex;
      this.correctIndex.push(this.quizGame[i]?.answers?.[4]?.correctIndex)
    }

  }
  
  
}
