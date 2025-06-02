import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  imports: [],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent {
  id: number | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
}
