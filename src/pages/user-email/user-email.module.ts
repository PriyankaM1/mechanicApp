import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEmailPage } from './user-email';
import { HomePage } from '../home/home';


@NgModule({
  declarations: [
    UserEmailPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(UserEmailPage),
  ],
})
export class UserEmailPageModule {}
