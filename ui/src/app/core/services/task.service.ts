import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  viewTask() {
    return this.http.get<any>(`/api/task/taskView`);
  }
  postTask(taskData) {
    return this.http.post<any>(`/api/task/newTask`, taskData);
  }
  submitTasks( request: any) {
    return this.http.post<any>(`/api/submit`, request);
  }
   updateStatus(request:any){
    return this.http.put<any>(`/api/task/statusChange`, request);
  }

}
