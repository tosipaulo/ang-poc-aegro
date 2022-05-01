import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input/input.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    HeaderModule
  ],
})
export class UiModule {}
