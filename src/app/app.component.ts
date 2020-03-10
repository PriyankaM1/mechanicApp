import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any = LandingPage;
   private homePage;
   private landingPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      this.landingPage = LandingPage;
      this.homePage = HomePage;
      
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  openPage(p) {
  //alert(this.rootPage);
    this.rootPage = p;
  }
}

