import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ColorfulComponent } from './colorful/colorful.component';
import { AddColorfulListItemComponent } from './colorful/add-colorful-list-item/add-colorful-list-item.component';
import { FormsModule } from '@angular/forms';
import { ColorfulListComponent } from './colorful/colorful-list/colorful-list.component';
import { ColorfulListItemComponent } from './colorful/colorful-list/colorful-list-item/colorful-list-item.component';
import { ColorfulListItemCountComponent } from './colorful/colorful-list-item-count/colorful-list-item-count.component';
import { AddItemsInListComponent } from './add-items-in-list/add-items-in-list.component';
import { AddImageComponent } from './images-demo/add-image/add-image.component';
import { ImagesListComponent } from './images-demo/images-list/images-list.component';
import { PrimaryImageComponent } from './images-demo/primary-image/primary-image.component';
import { ImagesDemoComponent } from './images-demo/images-demo.component';
import { ImagesListItemComponent } from './images-demo/images-list/images-list-item/images-list-item.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ColorfulComponent,
    AddColorfulListItemComponent,
    ColorfulListComponent,
    ColorfulListItemComponent,
    ColorfulListItemCountComponent,
    AddItemsInListComponent,
    AddImageComponent,
    ImagesListComponent,
    PrimaryImageComponent,
    ImagesDemoComponent,
    ImagesListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
