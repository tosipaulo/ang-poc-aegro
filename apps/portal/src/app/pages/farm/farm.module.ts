import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmRoutingModule } from './farm-routing.module';
import { BannerModule } from '@aegro/ui';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule, 
    FarmRoutingModule,
    HttpClientModule,
    BannerModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [FarmComponent]
})
export class FarmModule {}