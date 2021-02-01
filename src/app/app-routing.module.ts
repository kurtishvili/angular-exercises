import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsInListComponent } from './add-items-in-list/add-items-in-list.component';
import { ColorfulComponent } from './colorful/colorful.component';
import { ImagesDemoComponent } from './images-demo/images-demo.component'; 

const routes: Routes = [
  { path: 'colorful', component: ColorfulComponent },
  { path: 'add-items-in-list', component: AddItemsInListComponent },
  { path: 'images-demo', component: ImagesDemoComponent },
  { path: '', loadChildren: async () => ((await import('./ball-game/ball-game.module')).BallGameModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
