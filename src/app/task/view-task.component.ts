import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

import { TaskDetail } from '../models/taskDetail.model';
import { TaskData } from '../models/taskData.model';

import { TaskService } from './task.service';

@Component({
  templateUrl: './view-task.component.html'
})
export class ViewTaskComponent implements OnInit {

  taskDatas: TaskData[];
  taskDetail: TaskDetail = new TaskDetail();
  taskInfo: TaskData = new TaskData();
  taskBean: TaskDetail = new TaskDetail();
  closeResult: string;

  constructor(private router: Router, private taskService: TaskService, private modalService: NgbModal) { }

  ngOnInit() {
    this.taskDetail.task="";
    this.taskDetail.parentTask="";
    this.taskDetail.startDate="";
    this.taskDetail.endDate="";
    this.taskDetail.priorityFrom=0;
    this.taskDetail.priorityTo=30;    
  }  

  createTask(): void {
    this.taskService.createTask(this.taskDetail)
        .subscribe( data => {
          alert("Task created successfully.");
        });
  };

  deleteTask(taskData:TaskData): void {
    this.taskService.deleteTask(taskData.task).subscribe( data => {
      alert("Task deleted successfully.");
      this.findTaskDetails();
    });
  };

  findTaskDetails(): void {
    this.taskService.findTaskDetails(this.taskDetail.task, this.taskDetail.parentTask, this.taskDetail.priorityFrom, 
      this.taskDetail.priorityTo, this.taskDetail.startDate, this.taskDetail.endDate)
      .subscribe( data => {        
        this.taskDatas = data;
      })
  };

  editTask(content, taskData:TaskData) {
    this.taskInfo=taskData;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  updateTask(content) {
    this.taskBean.taskId=this.taskInfo.taskId;
    this.taskBean.task=this.taskInfo.task;
    this.taskBean.parentTask=this.taskInfo.parentTask;
    this.taskBean.priority=this.taskInfo.priority;
    this.taskBean.startDate=this.taskInfo.startDate;
    this.taskBean.endDate=this.taskInfo.endDate;
    this.taskService.editTask(this.taskInfo.taskId, this.taskBean)
        .subscribe( data => {
          alert("Task updated successfully.");
          this.findTaskDetails();
        });
    this.modalService.dismissAll();
  }

  
}
