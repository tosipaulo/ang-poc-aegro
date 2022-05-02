import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChunkModel, FarmModel } from '../../models/farm.model';

@Component({
  selector: 'aegro-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent implements OnInit {

  farm!: FarmModel;
  farmId!: string;
  routeStateFarm: any;
  
  displayedColumns: string[] = ['name', 'size', 'action'];

  constructor(private router: Router){

    if(this.router.getCurrentNavigation()?.extras.state) {
      this.routeStateFarm = (this.router.getCurrentNavigation()?.extras.state as FarmModel);
      if(this.routeStateFarm) {
        this.farm = this.routeStateFarm.farm
      }
    }
  }

  ngOnInit(): void {
      this.farmId = this.farm?._id as string;
  }

  onCreateSuccess(chunk: ChunkModel) {
    this.farm.chunks?.push(chunk);
  }
  
}
