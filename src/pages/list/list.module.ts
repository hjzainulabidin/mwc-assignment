import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import {ContentPage} from '../content/content';

@NgModule({
  declarations: [
    ListPage,
    ContentPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    IonicPageModule.forChild(ContentPage),

  ],
})
export class ListPageModule {
 
}
export class ContentPageModule {
 
}