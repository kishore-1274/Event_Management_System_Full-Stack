
import { Component } from '@angular/core';
import { EventlistService } from '../eventlist.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent {
  output :any=[];

constructor(private eventlistservice:EventlistService){}
ngOnInit(){
  this.eventlist();
}
eventlist(){
  this.eventlistservice.eventlist().subscribe({
    next:(response:any)=>{
      this.output=response;
    }
  });
}

}
