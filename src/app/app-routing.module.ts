import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
{
  'path':'createevent',
  'component':CreateEventComponent
},
{
  'path':'updateevent',
  'component':UpdateEventComponent
},
{
  'path':'eventlist',
  'component':EventlistComponent
},
{
  'path':'deleteevent',
  'component':DeleteComponent
},
{
  'path':'',
  redirectTo:'eventlist',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
