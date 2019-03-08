import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  
  constructor(private httpClient: HttpClient) { 
    
  }
  getAllTeams():Observable<any>{
    return this.httpClient.get('http://localhost:4200/assets/data.json')            
  }
}
