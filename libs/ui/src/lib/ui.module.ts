import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input/input.module';
import { HeaderModule } from './header/header.module';
import { BannerModule } from './banner/banner.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    HeaderModule,
    BannerModule
  ],
})
export class UiModule {}
