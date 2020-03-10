import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { MechanicProvider } from '../../providers/mechanic/mechanic';
import  { MechanicInfo } from '../../model/mechanic-info';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

/**
 * Generated class for the MechanicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mechanic-list',
  templateUrl: 'mechanic-list.html',
})

export class MechanicListPage {
   private Mechanics : MechanicInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public mechProv:MechanicProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicListPage');
      this.mechProv.getMechanicList().subscribe(Mechanics => this.Mechanics = Mechanics,

                     
        err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  connectedToMechanic(mechanic) {
     console.log("mechinfo" + mechanic);
     this.presentConfirm(mechanic);
  // this.navCtrl.push(HomePage);
  }

  presentConfirm(mechanic) {
  let alert = this.alertCtrl.create({
    title: 'Confirm Acceptance',
    message: 'Your Request is accepted, Mechanic is on way.',
    buttons: [
      {
        text: 'oK',
        role: 'ok',
        handler: () => {
          this.mechProv.setMyGV(false);
         this.navCtrl.push(HomePage,{"param1":mechanic});
        }
      }
    ]
  });
  alert.present();
}

}
