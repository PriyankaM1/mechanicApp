import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserEmailPage } from '../user-email/user-email';
/**
 * Generated class for the UserDetailPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail-phone-number',
  templateUrl: 'user-detail-phone-number.html',
})
export class UserDetailPhoneNumberPage {
    
      selectedCountry: string = '1';
      digitNumber:string = "+1";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPhoneNumberPage');
  }

  selectCountry(){
   //alert('Selected', this.selectedCountry);
   console.log(this.selectedCountry);
   this.digitNumber= "+" + this.selectedCountry;

  }

   goToNextPage()  {
   this.navCtrl.push(UserEmailPage);
  }
}
