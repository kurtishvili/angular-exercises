import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BallGameComponent } from './ball-game.component';

const routes: Routes = [
  {path: 'ball-game', component: BallGameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallGameRoutingModule { }
