import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  donutGraph() {
    return this.http.get<any>(`/api/dashboard/donut`);
  }
  mainGraph() {
    return this.http.get<any>(`/api/dashboard/donebydate`);
  }
}
