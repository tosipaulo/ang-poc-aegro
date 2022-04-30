import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [InputComponent],
})
export class InputModule {}
