import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmModel } from '../../models/farm.model';
import { FarmService } from './services/farm.service';

@Component({
  selector: 'aegro-dashboard',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
})
export class FarmComponent implements OnInit  {

  farm$!: Observable<FarmModel[]>;
  
  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
      this.farm$ = this.farmService.getFarms();
  }
}
