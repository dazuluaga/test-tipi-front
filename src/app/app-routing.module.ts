import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PingPongComponent } from './components/ping-pong/ping-pong.component';
import { SavePersonComponent } from './components/save-person/save-person.component';

const routes: Routes = [
  {path: 'ping-pong', component: PingPongComponent},
  {path: 'list-person', component: PersonListComponent},
  {path: 'create-person', component: SavePersonComponent},
  {path: '', redirectTo:'/ping-pong', pathMatch: 'full'},
  {path: '**',redirectTo: 'ping-pong',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
