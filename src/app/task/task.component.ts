import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from './task.service';

@Component({
  selector: 'app-user',
  templateUrl: './task.component.html',
  styles: []
})
export class TaskComponent implements OnInit {


  constructor(private router: Router, private taskService: TaskService) {

  }

  ngOnInit() {
  };

}


