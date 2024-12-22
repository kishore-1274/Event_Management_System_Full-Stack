import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventListComponent } from './event-list/event-list.component';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {

  
  constructor(public http:HttpClient){}
  
  eventlist(){
    return this.http.get("http://localhost:8080/event/eventlist");
  }
}
EventListComponent