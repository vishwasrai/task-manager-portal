import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { TaskDetail } from '../models/taskDetail.model';
import { TaskData } from '../models/taskData.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  constructor(private http:HttpClient) {}

  private taskManagerAPIUrl = 'http://localhost:8080/task-manager';

  public getUsers() {
    return this.http.get<User[]>(this.taskManagerAPIUrl);
  }

  public findByTask(task) {
    return this.http.get<TaskData[]>(this.taskManagerAPIUrl + "/findByTaskName?taskName=" + task);
  }

  public findTaskDetails(taskName:string, parentTaskName:string, priorityFrom:Number, priorityTo:Number,
    startDate:string, endDate:string) {
    return this.http.get<TaskData[]>(this.taskManagerAPIUrl + "/findTaskDetails?taskName=" + taskName +
    "&parentTaskName=" + parentTaskName + "&priorityFrom=" + priorityFrom + 
    "&priorityTo=" + priorityTo + "&startDate=" + startDate + "&endDate=" + endDate 
    );
  }

  public createTask(taskDetail) {
    return this.http.post<TaskDetail>(this.taskManagerAPIUrl + "/addTask", taskDetail);
  }

  public editTask(taskId:string, taskDetail) {
    return this.http.put<TaskDetail>(this.taskManagerAPIUrl + "/updateTask/"+ taskId, taskDetail);
  }

  public deleteTask(taskName:string) {
    return this.http.delete(this.taskManagerAPIUrl + "/deleteTask/"+ taskName);
  }
}