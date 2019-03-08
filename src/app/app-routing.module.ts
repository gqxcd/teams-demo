import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TeamsComponent} from './components/teams/teams.component';
import {TeamComponent} from './components/team/team.component';
const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:id', component: TeamComponent},
  {path: '**', redirectTo: 'teams'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
