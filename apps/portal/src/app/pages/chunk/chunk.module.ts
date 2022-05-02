import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChunkComponent } from './chunk.component';
import { ChunkRoutingModule } from './chunk-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChunkComponent],
  imports: [
    CommonModule,
    ChunkRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [ChunkComponent]
})
export class ChunkModule {}
