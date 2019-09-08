import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddTaskComponent} from './task/add-task.component';
import {ViewTaskComponent} from './task/view-task.component';

const routes: Routes = [
  { path: 'tasks', component: ViewTaskComponent },
  { path: 'add', component: AddTaskComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
