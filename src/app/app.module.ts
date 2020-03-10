import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { UserDetailPhoneNumberPage } from '../pages/user-detail-phone-number/user-detail-phone-number';
import { UserEmailPage } from '../pages/user-email/user-email';
import { HomePage } from '../pages/home/home';
import { MechanicListPage } from '../pages/mechanic-list/mechanic-list';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MechanicProvider } from '../providers/mechanic/mechanic';
import { CallNumber } from '@ionic-native/call-number';
@NgModule({
  declarations: [
    MyApp,
   LandingPage,
   UserDetailPhoneNumberPage,
   UserEmailPage,
   HomePage,
   MechanicListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    UserDetailPhoneNumberPage,
    UserEmailPage,
    HomePage,
    MechanicListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MechanicProvider
  ]
})
export class AppModule {}
