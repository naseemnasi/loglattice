import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component'
import { ProjectManagementComponent } from './project-management/project-management.component'
import { TimeSheetComponent } from './time-sheet/time-sheet.component'
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'task-management', component:  ProjectManagementComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'task-feed', component: TimeSheetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
