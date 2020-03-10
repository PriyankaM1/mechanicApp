import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailPhoneNumberPage } from '../user-detail-phone-number/user-detail-phone-number';
import { UserEmailPage } from '../user-email/user-email';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  onGetStarted()  {
   //alert("started clicked");
   this.navCtrl.push(UserDetailPhoneNumberPage);
  }

}
