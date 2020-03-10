import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDetailPhoneNumberPage } from './user-detail-phone-number';
import { UserEmailPage } from '../user-email/user-email';

@NgModule({
  declarations: [
    UserDetailPhoneNumberPage,
    UserEmailPage
  ],
  imports: [
    IonicPageModule.forChild(UserDetailPhoneNumberPage),
  ],
})
export class UserDetailPhoneNumberPageModule {}
