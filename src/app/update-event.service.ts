import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {

  constructor(private http:HttpClient) { }
  update(name:any,updateddata:any){
    return this.http.put(`http://localhost:8080/event/${name}`,updateddata)
  }
}
