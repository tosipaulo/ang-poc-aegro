import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmRoutingModule } from './farm-routing.module';
import { BannerModule } from '@aegro/ui';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [FarmComponent, ModalComponent],
  imports: [
    CommonModule,
    FarmRoutingModule,
    HttpClientModule,
    BannerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [FarmComponent],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {provide: MatDialogRef , useValue:{} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class FarmModule {}
