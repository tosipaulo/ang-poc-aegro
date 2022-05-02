import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FarmModel } from '../../models/farm.model';
import { ChunkService } from './services/chunk.service';

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

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private chunkService: ChunkService,
    private snackBar: MatSnackBar
    ){

    if(this.router.getCurrentNavigation()?.extras.state) {
      this.routeStateFarm = (this.router.getCurrentNavigation()?.extras.state as FarmModel);
      if(this.routeStateFarm) {
        this.farm = this.routeStateFarm.farm
      }
    }
  }

  ngOnInit(): void {
      this.formChunk = this.fb.group({
        name: [''],
        size: ['']
      })
  }

  onSubmit() {
    const payloadChunk = {
      farmId: this.farm._id,
      ...this.formChunk.value
    }

    this.chunkService.createChunk(payloadChunk)
      .subscribe(responseChunk => {
        this.formChunk.reset();
        this.snackBar.open(responseChunk?.message, 'fechar');
      });
  }
}
