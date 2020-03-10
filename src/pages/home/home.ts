import { Component,ViewChild,ElementRef } from '@angular/core';

import {App,NavController,NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MechanicListPage } from '../mechanic-list/mechanic-list';
import { MechanicProvider } from '../../providers/mechanic/mechanic';
import  {Observable}   from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {} from '@types/googlemaps';
import { CallNumber } from '@ionic-native/call-number';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   options : GeolocationOptions;
   currentPos : Geoposition;
   location : string;
   id:number;
   @ViewChild('map') mapElement: ElementRef;
   map: any;
   isNewRequest: boolean = true;
   public directionService:google.maps.DirectionsService;
   public myRoute : any;
   public myRouteIndex:number;
   public polylinePath:google.maps.Polyline;
   public duration :string;
   public mechanicdet :any;
   ispersonimg:string;
   public loader:any;
  isDisplayVehicle: boolean = false;
  mechanicAvail: boolean = false;
 
  constructor(public navCtrl: NavController ,private geolocation : Geolocation, private nativeGeocoder: NativeGeocoder, public mechProv:MechanicProvider, private callNumber: CallNumber,public navparams: NavParams,private alertCtrl: AlertController,public app: App,public loading: LoadingController) {
     this.directionService = new google.maps.DirectionsService();
     this.loader = this.loading.create({
    content: 'loading...',
  });
     if(this.mechProv.getMyGV() === false){
    alert("sdf");
        setTimeout(() =>{
        let alert = this.alertCtrl.create({
    title: 'Transaction succesful',
    message: 'Mechanic has reached to your place',
    buttons: [
      {
        text: 'oK',
        role: 'ok',
        handler: () => {
          this.mechanicAvail = true;
        }
      }
    ]
  });
  alert.present();
  }, 50000);
    }
  }
  

  addCarMarkers(position) {

    let carMarker = new google.maps.Marker({
       map: this.map,
       position:position,
       icon:"assets/imgs/person.png"
    })
   

    }
    calculateRoute(start, end){

       return Observable.create(observable => {
       this.directionService.route({
          origin : start,
          destination : end,
          travelMode :google.maps.TravelMode.DRIVING
          }, (response, status)=> {
          if(status === google.maps.DirectionsStatus.OK) {
          
           observable.next(response);
          }
          else {
      observable.error(status);
          }
          }
       )
} )
       }

  getSegmentedDirections(directions) {
     let route = directions.routes[0];
     let legs  = route.legs;
     let path = [];
     let increments = [];
     let duration = 0;

     let numOfLegs = legs.length;

     while (numOfLegs--){
        let leg = legs[numOfLegs];
        let steps = leg.steps;
        let numOfSteps = steps.length;

        while (numOfSteps--){
         let step = steps[numOfSteps];
         let points = step.path;
         let numOfPoints = points.length;

         duration +=step.duration.value;
         while(numOfPoints--){
          let point = points[numOfPoints];
          path.push(point);
          increments.unshift({
          position:point,
          time: duration,
          path : path.slice(0)
          })

         }

        }
     }
     return increments;
  }


   getPickupCar() {
      return Observable.create(observable => {

      let car =this.myRoute[this.myRouteIndex];
      observable.next(car);
      this.myRouteIndex++;
      })
   }
  simulateRoute(start , end) {
  
   return Observable.create(observable => {
   this.calculateRoute(start, end).subscribe(directions => {
      //get route path
      //
     this.myRoute = this.getSegmentedDirections(directions)
      this.getPickupCar().subscribe(car =>{
      observable.next(car);
      })
   })
   })
  }



   getMechanicCurrentUpdates() {
  
   if(this.mechanicdet!=undefined){
   let start = new google.maps.LatLng(this.mechanicdet.lat,this.mechanicdet.long);
  let end = new google.maps.LatLng(this.currentPos.coords.latitude,this.currentPos.coords.longitude);
       
      return this.simulateRoute(start,end);
   }
      
   }

 getUserAddress( lat: number, long: number) {
      /*this is to get the Adress in the string format from longtude and latitude*/
      this.location ="address found"
       this.nativeGeocoder.reverseGeocode(lat, long)
  .then((result: NativeGeocoderReverseResult) => {
  console.log(JSON.stringify(result)); this.location = JSON.stringify(result);
   let locationObj = JSON.parse(this.location);

  this.getUserPositionCordinates(locationObj[0]);
   })
  .catch((error: any) => console.log(error));

 }

    getUserPositionCordinates(location){

      this.nativeGeocoder.forwardGeocode('Berlin')
  .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
  .catch((error: any) => console.log(error));
    }
    showDirections(path) {
        this.polylinePath = new google.maps.Polyline({
        path:path,
        strokeColor:'#FF0000',
        strokeWeight:3
        });
        this.polylinePath.setMap(this.map);
    }
  

   addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
     //this.addCarMarkers();
     this.myRouteIndex = 0;

     if(this.isNewRequest === false) {
     this.loader.present();
         this.getMechanicCurrentUpdates().subscribe(car => {
        console.log(car.position);
     console.log(car.path);
     this.addCarMarkers(car.position);
     this.showDirections(car.path);
     this.duration  = this.timeConversion(car.time);
     
      this.loader.dismiss();
      
     });
     }

    
}
   ngOnInit(){
   
   
    
}
   

    mechanicUpdates() {
      let alert = this.alertCtrl.create({
    title: 'Transaction succesful',
    message: 'Mechanic has reached to your place',
    buttons: [
      {
        text: 'oK',
        role: 'ok',
        handler: () => {
          this.mechanicAvail = true;
        }
      }
    ]
  });
  alert.present();
  }

   timeConversion(millseconds) {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var seconds = (millseconds % oneMinute) / oneSecond;
    var minutes = Math.floor((millseconds % oneHour) / oneMinute);
    var hours = Math.floor((millseconds % oneDay) / oneHour);
    var days = Math.floor(millseconds / oneDay);

    var timeString = '';
    if (days !== 0) {
        timeString += (days !== 1) ? (days + ' days ') : (days + ' day ');
    }
    if (hours !== 0) {
        timeString += (hours !== 1) ? (hours + ' hours ') : (hours + ' hour ');
    }
    if (minutes !== 0) {
        timeString += (minutes !== 1) ? (minutes + ' minutes ') : (minutes + ' minute ');
    }
    if (seconds !== 0 || millseconds < 1000) {
        timeString += (seconds !== 1) ? (seconds*10 + ' minutes ') : (seconds*10 + ' minutes');
    }

    return timeString;
    }

   addMarker(){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });

}




   getUserCurrentPosition(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos; 
        console.log(pos);     
        console.log(pos.coords.latitude);
        this.addMap(pos.coords.latitude,pos.coords.longitude);
        //this.getUserAddress(pos.coords.latitude,pos.coords.longitude);
         this.loader.dismiss();

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
}

  callMechanic() {
     this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }



   displayVehicleType(){
   alert("display");
    this.isDisplayVehicle = !this.isDisplayVehicle;
   }

  ionViewDidEnter(){
     this.isNewRequest = this.mechProv.getMyGV();
     if(this.isNewRequest === false){
    this.mechanicdet = this.navparams.get("param1");
      this.ispersonimg=this.mechanicdet.personimg;
     }

      this.loader.present();
      this.getUserCurrentPosition();
        
    
    
}  
   GetMechanicsInfo() {
      this.navCtrl.push(MechanicListPage);
   }
   cancelRequest() {
    this.mechProv.setMyGV(true);
    this.navCtrl.push(HomePage);
   }
  

   makePayment(){
       this.presentConfirm();
   }
  
  


   
   presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Transaction succesful',
    message: 'Invoice will be sent to your mail',
    buttons: [
      {
        text: 'oK',
        role: 'ok',
        handler: () => {
          this.mechProv.setMyGV(true);
         this.navCtrl.push(HomePage);
        }
      }
    ]
  });
  alert.present();
}
    addClass(id: any) {
    this.id = id;
  }
}
