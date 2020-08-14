import { Injectable } from '@angular/core';
import { Agent } from '../model/Agent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private host:string="http://localhost:8081";
  constructor(private http:HttpClient) { }

  getAgentById(id:number) {
    return this.http.get<Agent>(this.host+"/infoAgent/"+id);
   }
}
