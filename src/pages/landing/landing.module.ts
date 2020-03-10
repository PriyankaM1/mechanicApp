import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';
import { UserDetailPhoneNumberPage } from '../user-detail-phone-number/user-detail-phone-number';
import { UserEmailPage } from '../user-email/user-email';
@NgModule({
  declarations: [
    LandingPage,
    UserDetailPhoneNumberPage,
    UserEmailPage
  ],
  imports: [
    IonicPageModule.forChild(LandingPage),
  ],
})
export class LandingPageModule {}
