import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChunkComponent } from './chunk.component';
import { ChunkRoutingModule } from './chunk-routing.module';

@NgModule({
  declarations: [ChunkComponent],
  imports: [
    CommonModule,
    ChunkRoutingModule
  ],
  exports: [ChunkComponent]
})
export class ChunkModule {}
