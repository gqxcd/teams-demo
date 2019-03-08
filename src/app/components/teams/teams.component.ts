import { Component, OnInit } from '@angular/core';
import {Team, Person, teamsobject} from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamList:Team[];
  constructor(private teamService:TeamService) {
    this.teamService.getAllTeams().subscribe(data => {
      this.teamList = data.teams;
     });
    
   }

  ngOnInit() {
    
  }

}
