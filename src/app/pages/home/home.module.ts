import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { HomeComponent } from './home.component';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [HomeComponent, WyCarouselComponent],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
