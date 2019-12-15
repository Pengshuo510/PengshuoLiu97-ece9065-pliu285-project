import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WyLayerModule} from './wy-layer/wy-layer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WyLayerModule
  ],
  exports: [
    WyLayerModule,
  ]
})
export class WyUiModule { }
