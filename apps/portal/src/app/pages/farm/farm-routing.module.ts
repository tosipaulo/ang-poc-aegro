import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmComponent } from "./farm.component";

const routes: Routes = [
    {
      path: 'fazendas',
      component: FarmComponent
    }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class FarmRoutingModule { }
  