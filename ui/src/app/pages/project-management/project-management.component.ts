import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DndDropEvent } from 'ngx-drag-drop';
import { Task } from './board.model';
import { TaskService } from 'src/app/core/services/task.service';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  todoTasks: Task[];
  inprogressTasks: Task[];
  reviewTasks: Task[];
  doneTasks: Task[];
  tasks: any[];
  title: string;
  description: string;
  allNote: any[];
  date: string;
  task: string;
  comments: number;
  donetask: string;
  status: string;
  id: any;
  addTaskForm: FormGroup;
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  constructor(private modalService: NgbModal, private TaskService: TaskService, private fb: FormBuilder) { }

  ngOnInit() {
    this.addTaskForm = this.fb.group({
      project: new FormControl('', [Validators.required]),
      task: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
    this.getTasks();
    this.title = '';
    this.description = '';
  }

  openModal(content: any) {

    try {
      this.modalService.open(content);
    } catch (e) {
      console.log(e, "vaisakh")
    }


  }

  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
      let time = 40;
      if (event && event.data && event.data.timeLeft){
        time = event.data.timeLeft
      }
      this.TaskService.updateStatus({ id: event.data._id, status: targetStatus ,timeLeft: time}).subscribe(response => {
        if (response != null) {
          this.getTasks();
        }
      });
      this.countdown.begin();
    }
  }


  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  private _fetchData(task) {
    // all tasks
    this.todoTasks = task.filter(t => t.status === 'todo');


    this.inprogressTasks = task.filter(t => t.status === 'inprogress');

    this.doneTasks = task.filter(t => t.status === 'done');

  }
  getTasks() {
    this.TaskService.viewTask().subscribe((data: any) => {
      if (data) {

        this.tasks = data.data;
        this._fetchData(this.tasks);
        // this.todoTasks = this.tasks.filter(t => t.status === 'todo');
        // this.inprogressTasks = this.tasks.filter(t => t.status === 'inprogress');
        // this.doneTasks = this.tasks.filter(t => t.status === 'done');
      }
    });
  }
  refreshTaskDetails() {
    this.addTaskForm.reset();
  }
  addTaskSubmission() {
    let taskData = {
      taskName: this.addTaskForm.get('task').value,
      project: this.addTaskForm.get('project').value,
      taskDescription: this.addTaskForm.get('description').value,
      priority: this.addTaskForm.get('priority').value,
      timeLeft: this.addTaskForm.get('time').value,
    }
    this.TaskService.postTask(taskData).subscribe((data: any) => {
      if (data) {
        alert('Task Added successfully');
        this.refreshTaskDetails();
        this.modalService.dismissAll();
        this.getTasks();
      }
    })
  }
  submitMain() {
    let reqbody = []
    this.tasks.forEach(element => {
      reqbody.push(
        {
          name: "Fazil",
          taskName: element.taskName,
          project: element.project,
          status: element.status
        }
      );

    });
    this.TaskService.submitTasks(reqbody).subscribe((data: any) => {
      console.log("successs", data);
      alert('Overall Task Submitted to Manager successfully');
    });
  }
  startTimer() {
    this.countdown.begin();
  }
  stopTimer() {
    this.countdown.stop();
  }
  resumeTimer() {
    this.countdown.resume();

  }
  pauseTimer() {
    this.countdown.pause();
  }
}
