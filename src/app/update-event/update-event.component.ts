import { Component } from '@angular/core';
import { CreateEventService } from '../create-event.service';
import { Observable } from 'rxjs';
import { UpdateEventService } from '../update-event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  updatedeventform : any ={name:'',date:'',time:'',location:'',price:'',status:''};
  constructor(public updateevent: UpdateEventService){}
  update(){
    this.updateevent.update(this.updatedeventform.name, this.updatedeventform).subscribe({
      next:(response:any)=>{
        alert("updated successfully");
      }
    });
  }
}
