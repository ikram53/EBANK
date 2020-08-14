import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient } from '@angular/common/http';
import { Meeting } from '../model/Meeting';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events:Array<any>=[];
  private host:string="http://localhost:8081";
  constructor(private http:HttpClient) { }


  addEvent(event) {
    this.events.push(event);   
  }

  getItems() {
    return this.events;
  }
  
  saveMeeting(meeting: Meeting) {
   return this.http.post(this.host+"/meeting/add",meeting);
  }


   getMeeting(month:number) {
    return this.http.get<Meeting[]>(this.host+"/meeting/list/"+month);
   }

   deleteMeeting(id:number) {
    return this.http.delete(this.host+"/meeting/delete/"+id);
   }

   updateMeeting(meeting: CalendarEvent) {
    return this.http.put(this.host+"/meeting/update/"+meeting.id,meeting);
   }
 
}
