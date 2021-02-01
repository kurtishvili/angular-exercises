import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallGameRoutingModule } from './ball-game-routing.module';
import { BallGameComponent } from './ball-game.component';
import { BallComponent } from './ball/ball.component';
import { PlayComponent } from './play/play.component';
import { ColorsComponent } from './colors/colors.component';
import { ChangeSizeComponent } from './change-size/change-size.component';


@NgModule({
  declarations: [BallGameComponent,  BallComponent, PlayComponent, ColorsComponent, ChangeSizeComponent],
  imports: [
    CommonModule,
    BallGameRoutingModule
  ]
})
export class BallGameModule { }
