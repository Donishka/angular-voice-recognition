import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

const routes: Routes = [
  { path:'', component: SpeechToTextComponent },
  // { path: 'cisla', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
