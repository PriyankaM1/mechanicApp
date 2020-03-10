import {NgModule} from '@angular/core';
import {HomePage} from "./home";
import {IonicModule} from 'ionic-angular'

@NgModule({
  imports:[IonicModule.forRoot(HomePage)],  //no forRoot here
  declarations:[HomePage],
  exports:[HomePage],
  entryComponents:[HomePage] //<-- add all your module components to here
})
export class HomeModule{

}