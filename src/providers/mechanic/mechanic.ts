import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { MechanicInfo } from '../../model/mechanic-info';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the MechanicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MechanicProvider {
  
    isNewRequest;
    private commentsUrl ="assets/Json/mechanic.json";

  constructor(public http: HttpClient) {
    console.log('Hello MechanicProvider Provider');
    this.isNewRequest = true;
  }
  setMyGV(val: boolean){
      this.isNewRequest = val;
    }

    getMyGV(){
      return this.isNewRequest;
    }
    
   getMechanicList (): Observable<MechanicInfo[]> {

        return this.http.get(this.commentsUrl) // ...using get request
                         .map((res:Response) => res ,console.log("success of user")) // ...and calling .json() on the response to return console.log(data)
                         .catch((error:any) => Observable.throw(error || 'Server error')); //...errors if any
    } 
}
