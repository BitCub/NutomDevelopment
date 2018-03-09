import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TellUsPage } from './tell-us';

@NgModule({
  declarations: [
    TellUsPage,
  ],
  imports: [
    IonicPageModule.forChild(TellUsPage),
  ],
})
export class TellUsPageModule {}
