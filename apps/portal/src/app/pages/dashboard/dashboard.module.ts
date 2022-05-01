import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BannerModule } from '@aegro/ui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, 
    DashboardRoutingModule,
    HttpClientModule,
    BannerModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
