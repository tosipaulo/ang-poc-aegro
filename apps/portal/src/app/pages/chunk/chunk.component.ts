import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmModel } from '../../models/farm.model';

@Component({
  selector: 'aegro-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent implements OnInit {

  farm!: FarmModel;
  routeStateFarm: any;
  formChunk!: FormGroup;

  displayedColumns: string[] = ['name', 'size', 'action'];

  constructor(private router: Router, private fb: FormBuilder){
    if(this.router.getCurrentNavigation()?.extras.state) {
      this.routeStateFarm = (this.router.getCurrentNavigation()?.extras.state as FarmModel);
      if(this.routeStateFarm) {
        this.farm = this.routeStateFarm.farm
      }
    }
  }

  ngOnInit(): void {
      this.formChunk = this.fb.group({
        name: ['', Validators.required],
        size: ['', Validators.required]
      })
  }

  onSubmit() {
    const payloadChunk = {
      farmId: this.farm._id,
      ...this.formChunk.value
    }

    console.log(payloadChunk)
  }
}
