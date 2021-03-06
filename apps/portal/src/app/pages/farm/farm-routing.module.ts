import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmComponent } from "./farm.component";

const routes: Routes = [
    {
      path: 'fazendas',
      component: FarmComponent
    },
    {
      path: 'fazenda/:id',
      loadChildren: () => import('../../pages/chunk/chunk.module').then(m => m.ChunkModule)
    }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class FarmRoutingModule { }
  