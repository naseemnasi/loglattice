import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';
 import { CountdownModule } from 'ngx-countdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ngx-drag-drop';
import { PagesRoutingModule } from './pages-routing.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule,HIGHCHARTS_MODULES  } from 'angular-highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more.src'
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProjectManagementComponent } from './project-management/project-management.component'
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [DashboardComponent, MyAccountComponent, ProjectManagementComponent, TimeSheetComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    PagesRoutingModule,
    ChartModule, DndModule,ReactiveFormsModule,
     CountdownModule,
    NgApexchartsModule
  ],
  providers: [
    { 
        provide: HIGHCHARTS_MODULES, 
        useFactory: () => [HighchartsMore, HighchartsSolidGauge] 
    }
]
})
export class PagesModule { }
