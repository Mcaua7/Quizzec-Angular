import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QuizGameComponent } from './quiz-game/quiz-game.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { CreatQuizPageComponent } from './creat-quiz-page/creat-quiz-page.component';
import { FinishedGameComponent } from './finished-game/finished-game.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'creat-quiz', component: CreatQuizPageComponent},
    {path: 'qr-code-generator', component: QrCodeGeneratorComponent},
    {path: 'quiz-game', component: QuizGameComponent},
    {path: 'quiz-page', component:QuizPageComponent},
    {path: 'finished-game', component: FinishedGameComponent}
];

/*@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
*/
