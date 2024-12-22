import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(public http:HttpClient){}

  create(data:any){
    return this.http.post("http://localhost:8080/event/create",data);
  }

  
}
