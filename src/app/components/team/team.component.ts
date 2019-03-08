import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Person, Team, Name } from '../../models/team';
import { TeamService } from '../../services/team.service';

class NameClass implements Name{
  constructor(public displayName: string =""){}
} 
class PersonClass implements Person {
  constructor(
    public person: Name = null,
    public unit: string = "",
    public positionAbbr : string = "",
    public position : string = "",
    public depthOrder: number = 0
  ) {
    this.person = new NameClass();
  }
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  teamId:string;
  persons: Person[]; 
  teams: Team[];
  team: Team;

  selectedId:number;
  currentName: NameClass;
  currentPerson: PersonClass;
  isEditing:boolean;

  

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    this.isEditing = false;
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.teamId = params.id;
        this.teamService.getAllTeams().subscribe(
          (object) => {
            this.teams = <Team[]>object.teams;
            this.team = this.teams.find(element => element.id == this.teamId)
            this.persons = this.team.roster;
          }
        )
      }
    )
  }

  OnSave() {
    this.isEditing = !this.isEditing;
    this.persons[this.selectedId] = Object.assign({}, this.currentPerson);
    this.persons[this.selectedId].person = Object.assign({}, this.currentPerson.person);
    this.currentPerson = new PersonClass();
    this.selectedId = 0;
  }

  OnEdit(i:number) {
    this.selectedId = i;
    this.isEditing = !this.isEditing;
    this.currentPerson = new PersonClass();
    this.currentPerson = Object.assign({}, this.persons[this.selectedId]);
    this.currentPerson.person = Object.assign({}, this.persons[this.selectedId].person);

  }

  OnCancel() {
    this.isEditing = false;
  }

}
