import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { TeamService } from './services/team.service';
import { FormsModule } from '@angular/forms';
import { SortingPipe } from './pipe/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
