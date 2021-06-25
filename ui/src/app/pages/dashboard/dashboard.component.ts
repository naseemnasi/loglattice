import { Component, OnInit } from '@angular/core';
import { revenueAreaChart, patternedDonutChart, } from './data';
import { ChartType } from './dashboard.component-chart.model';
import { DashboardService } from 'src/app/core/services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard component - handling dashboard with sidear and content
 */
export class DashboardComponent implements OnInit {
  toDoCount: number;
  doneCount: number;
  inProgressCount: number;
  totalCardCount: number;
  mainGraphDates: any;
  mainGraphDones: any;

  constructor(private dashboard: DashboardService) { }
  revenueAreaChart: ChartType;
  patternedDonutChart: ChartType;
  cardCount: any = [];
  ngOnInit(): void {
    this._fetchData();
    this.getMainGraphData();
    this.fetchDonutGraphData();
    

  }
  private _fetchData() {
    this.patternedDonutChart = patternedDonutChart,
      this.revenueAreaChart = revenueAreaChart;
  }
  fetchDonutGraphData() {
    this.dashboard.donutGraph().subscribe(response => {
      if (response) {
        this.cardCount = response.data
        this.patternedDonutChart.series = this.cardCount;
      } else {
        console.log("No cards");
        this.patternedDonutChart.series = [0, 0, 0];
      }
      this.getCardData();
    });
  }
  getCardData() {
    this.toDoCount = this.cardCount[0];
    this.inProgressCount = this.cardCount[1];
    this.doneCount = this.cardCount[2];
    this.totalCardCount = this.toDoCount + this.doneCount + this.inProgressCount;
  }
  getMainGraphData() {
    this.dashboard.mainGraph().subscribe(response => {
      if (response.data) {
        this.mainGraphDates = response.data.dates;
        this.mainGraphDones = response.data.dones;
        this.revenueAreaChart.series[0].data = this.mainGraphDones;
        this.revenueAreaChart.xaxis["categories"] = this.mainGraphDates;
      } else {
        this.mainGraphDates = [];
        this.mainGraphDones = [];
      }
    })
  }
}

