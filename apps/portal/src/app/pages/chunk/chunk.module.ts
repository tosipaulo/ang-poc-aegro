import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChunkComponent } from './chunk.component';
import { ChunkRoutingModule } from './chunk-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { ListChunkComponent } from './components/list-chunk/list-chunk.component';
import { CreateChunkComponent } from './components/create-chunk/create-chunk.component';

@NgModule({
  declarations: [ChunkComponent, ListChunkComponent, CreateChunkComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ChunkRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
  ],
  exports: [ChunkComponent],
})
export class ChunkModule {}
