import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskDetail } from '../models/taskDetail.model';
import { TaskService } from './task.service';

@Component({
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {

  taskDetail: TaskDetail = new TaskDetail();

  constructor(private router: Router, private taskService: TaskService) {
  }

  createTask(): void {
    this.taskService.createTask(this.taskDetail)
        .subscribe( data => {
          alert("Task created successfully.");
        });
  };

  resetData(): void {
    this.taskDetail.task = "";
    this.taskDetail.parentTask = "";
    this.taskDetail.priority = 15;
    this.taskDetail.startDate = "";
    this.taskDetail.endDate = "";
  };

}
