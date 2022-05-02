import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { FarmModel } from '../../models/farm.model';
import { CreateComponent } from './components/create/create.component';
import { FarmService } from './services/farm.service';

@Component({
  selector: 'aegro-dashboard',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
})
export class FarmComponent implements OnInit  {

  listFarm!: FarmModel[];
  
  constructor(
    private farmService: FarmService,
    public dialog: MatDialog,
    private router: Router
    ) {}

  ngOnInit(): void {
     this.farmService.getFarms().subscribe(listFarm => this.listFarm = listFarm);
  }

  openForm() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '350px',
      data: {name: '', chunks: []}
    });

    dialogRef.afterClosed().subscribe(resultCreate => {
      this.farmService.createFarm(resultCreate.name).subscribe(() => {
        this.listFarm = [resultCreate, ...this.listFarm]
      })
    });
  }

  addChunk(farm: FarmModel) {
    const route = `/fazenda/${farm._id}`
    this.router.navigate([route], {state: {farm}})
  }
}
