import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChunkComponent } from "./chunk.component";

const routes: Routes = [
    {
      path: '',
      component: ChunkComponent
    }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class ChunkRoutingModule { }
  