import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QuizGameComponent } from './quiz-game/quiz-game.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { CreatQuizPageComponent } from './creat-quiz-page/creat-quiz-page.component';
import { FinishedGameComponent } from './finished-game/finished-game.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: 'home-page', component: HomePageComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'creat-quiz', component: CreatQuizPageComponent},
    {path: 'qr-code-generator', component: QrCodeGeneratorComponent},
    {path: 'quiz-game/:id', component: QuizGameComponent},
    {path: 'quiz-page/:id', component:QuizPageComponent},
    {path: 'finished-game', component: FinishedGameComponent},
    {path: '', redirectTo: 'home-page', pathMatch: "full"},
    {path: '**', component: NotFoundComponent}
];

