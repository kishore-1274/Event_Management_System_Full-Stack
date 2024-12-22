import { Component } from '@angular/core';
import { CreateEventService } from '../create-event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  eventform : any ={name:'',date:'',time:'',location:'',price:'',status:''};
  
  constructor(private createevent:CreateEventService){}
  
  create(){
    this.createevent.create(this.eventform).subscribe({
        next:(response:any)=>{
          alert("added succesfully");
        }
    });
  }
  


}
