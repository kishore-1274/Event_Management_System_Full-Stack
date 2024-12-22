import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  delete(name:String){
   return this.http.delete(`http://localhost:8080/event/${name}`);
  }
}
