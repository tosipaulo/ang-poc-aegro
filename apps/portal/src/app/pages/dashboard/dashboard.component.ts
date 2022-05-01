import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'aegro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit  {
  
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
      this.dashboardService.getFarms().subscribe(res => console.log(res));
  }
}
