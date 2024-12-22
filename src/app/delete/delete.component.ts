import { Component } from '@angular/core';
import { DeleteService } from '../delete.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  eventnametodelete:any;
constructor(private deleteservice: DeleteService){}
delete(){
  this.deleteservice.delete(this.eventnametodelete).subscribe({
    next:()=>{
        alert("deleted successfully");
    }

  });
}
}
