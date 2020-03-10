webpackJsonp([4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MechanicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods


/*
  Generated class for the MechanicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MechanicProvider = (function () {
    function MechanicProvider(http) {
        this.http = http;
        this.commentsUrl = "assets/Json/mechanic.json";
        console.log('Hello MechanicProvider Provider');
        this.isNewRequest = true;
    }
    MechanicProvider.prototype.setMyGV = function (val) {
        this.isNewRequest = val;
    };
    MechanicProvider.prototype.getMyGV = function () {
        return this.isNewRequest;
    };
    MechanicProvider.prototype.getMechanicList = function () {
        return this.http.get(this.commentsUrl) // ...using get request
            .map(function (res) { return res; }, console.log("success of user")) // ...and calling .json() on the response to return console.log(data)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); }); //...errors if any
    };
    MechanicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MechanicProvider);
    return MechanicProvider;
}());

//# sourceMappingURL=mechanic.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserEmailPage = (function () {
    function UserEmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserEmailPage');
    };
    UserEmailPage.prototype.goToNextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    UserEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-email',template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\user-email\user-email.html"*/'<!--\n  Generated template for the UserEmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <ion-title navStyle>MechanicOnGo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n    <ion-input type="email" [(ngModel)]="useremail"  required name="email" \n       pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" \n         #email="ngModel"\n    name="email"></ion-input> \n</ion-item>\n <div style="color:red" [hidden]="!email.hasError(\'required\')">***Email is required</div>\n   <div style="color:red" [hidden]="!email.hasError(\'pattern\')">*****Email format should be \n      <small ><b>joe@abc.com</b></small>\n   </div>\n\n    <button ion-button type="submit" block color="secondary" (click)="goToNextPage()" >Next</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\user-email\user-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserEmailPage);
    return UserEmailPage;
}());

//# sourceMappingURL=user-email.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_email_user_email__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserDetailPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailPhoneNumberPage = (function () {
    function UserDetailPhoneNumberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedCountry = '1';
        this.digitNumber = "+1";
    }
    UserDetailPhoneNumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailPhoneNumberPage');
    };
    UserDetailPhoneNumberPage.prototype.selectCountry = function () {
        //alert('Selected', this.selectedCountry);
        console.log(this.selectedCountry);
        this.digitNumber = "+" + this.selectedCountry;
    };
    UserDetailPhoneNumberPage.prototype.goToNextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_email_user_email__["a" /* UserEmailPage */]);
    };
    UserDetailPhoneNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-detail-phone-number',template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\user-detail-phone-number\user-detail-phone-number.html"*/'<!--\n  Generated template for the UserDetailPhoneNumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title navStyle>MechanicOnGo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n  <ion-row>\n  <ion-col width-100>\n      <ion-item>\n      <ion-select  class="conSel" [(ngModel)]="selectedCountry" (ionChange)=\'selectCountry()\'>\n	 <ion-option data-countryCode="GB" value="44" Selected>UK (+44)</ion-option>\n	<ion-option data-countryCode="US" value="1">USA (+1)</ion-option>\n		<ion-option data-countryCode="DZ" value="213">Algeria (+213)</ion-option>\n		<ion-option data-countryCode="AD" value="376">Andorra (+376)</ion-option>\n		<ion-option data-countryCode="AO" value="244">Angola (+244)</ion-option>\n		<ion-option data-countryCode="AU" value="61">Australia (+61)</ion-option>\n		<ion-option data-countryCode="AT" value="43">Austria (+43)</ion-option>\n		<ion-option data-countryCode="AZ" value="994">Azerbaijan (+994)</ion-option>\n		<ion-option data-countryCode="BS" value="1242">Bahamas (+1242)</ion-option>\n		<ion-option data-countryCode="BH" value="973">Bahrain (+973)</ion-option>\n		<ion-option data-countryCode="CM" value="237">Cameroon (+237)</ion-option>\n		<ion-option data-countryCode="CA" value="1">Canada (+1)</ion-option>\n		<ion-option data-countryCode="DK" value="45">Denmark (+45)</ion-option>\n		<ion-option data-countryCode="FR" value="33">France (+33)</ion-option>\n		<ion-option data-countryCode="GF" value="594">French Guiana (+594)</ion-option>\n		<ion-option data-countryCode="DE" value="49">Germany (+49)</ion-option>\n		<ion-option data-countryCode="GR" value="30">Greece (+30)</ion-option>\n		<ion-option data-countryCode="IN" value="91">India (+91)</ion-option>\n		</ion-select>\n         </ion-item>\n </ion-col>\n         <!-- <ion-col width-50>\n          <ion-item>\n		<ion-input type="tel"  name="title">ewer</ion-input>\n</ion-item>\n </ion-col>-->\n  </ion-row>\n  <ion-row>\n  <ion-col col-4>\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="digitNumber"  name="title"></ion-input> \n</ion-item>\n  </ion-col>\n  <ion-col col-8>\n  <ion-item>\n    <ion-input type="tel" [(ngModel)]="phonenumber" required  name="phone" pattern="[0-9]*"\n   minlength="10"\n   maxlength="10"    #phoneVar="ngModel" ></ion-input>  \n</ion-item>\n                        <div style="color:red" [hidden]="!phoneVar.hasError(\'minlength\')">***Mobile should be 10digit</div>\n      <div style="color:red" [hidden]="!phoneVar.hasError(\'required\')">***Mobile is required</div>\n      <div style="color:red" [hidden]="!phoneVar.hasError(\'pattern\')">***Mobile numberr should be only numbers</div>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n      <button ion-button type="submit" block color="secondary" (click)="goToNextPage()" >Next</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\user-detail-phone-number\user-detail-phone-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserDetailPhoneNumberPage);
    return UserDetailPhoneNumberPage;
}());

//# sourceMappingURL=user-detail-phone-number.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_detail_phone_number_user_detail_phone_number__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.onGetStarted = function () {
        //alert("started clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_detail_phone_number_user_detail_phone_number__["a" /* UserDetailPhoneNumberPage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\landing\landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n \n\n</ion-header>\n\n\n<ion-content padding>\n <button ion-button color="secondary"  (click)="onGetStarted()"  class="btnAlign">Get Started</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MechanicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mechanic_mechanic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Import RxJs required methods


/**
 * Generated class for the MechanicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MechanicListPage = (function () {
    function MechanicListPage(navCtrl, navParams, alertCtrl, mechProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.mechProv = mechProv;
    }
    MechanicListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MechanicListPage');
        this.mechProv.getMechanicList().subscribe(function (Mechanics) { return _this.Mechanics = Mechanics; }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    MechanicListPage.prototype.connectedToMechanic = function (mechanic) {
        console.log("mechinfo" + mechanic);
        this.presentConfirm(mechanic);
        // this.navCtrl.push(HomePage);
    };
    MechanicListPage.prototype.presentConfirm = function (mechanic) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Acceptance',
            message: 'Your Request is accepted, Mechanic is on way.',
            buttons: [
                {
                    text: 'oK',
                    role: 'ok',
                    handler: function () {
                        _this.mechProv.setMyGV(false);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { "param1": mechanic });
                    }
                }
            ]
        });
        alert.present();
    };
    MechanicListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mechanic-list',template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\mechanic-list\mechanic-list.html"*/'<!--\n  Generated template for the MechanicListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mechanicList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n<ion-card *ngFor="let item of Mechanics">\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src={{item.personimg}}>\n    </ion-avatar>\n    <h2>{{item.name}}</h2>\n    <p>{{item.phoneNum}}</p>\n  </ion-item>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="secondary"  (click)="connectedToMechanic(item)"  small>\n        Connect\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="secondary" clear small >\n        {{item.wages}} per hour\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n       <ion-icon name="star" class="selected"> </ion-icon>\n       <ion-icon name="star" class="selected"> </ion-icon>\n        <ion-icon name="star" class="selected"> </ion-icon>\n         <ion-icon name="star" class="selected"> </ion-icon>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n\n<style>\n  .social-cards ion-col {\n    padding: 0;\n  }\n</style>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\mechanic-list\mechanic-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_mechanic_mechanic__["a" /* MechanicProvider */]])
    ], MechanicListPage);
    return MechanicListPage;
}());

//# sourceMappingURL=mechanic-list.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/landing/landing.module": [
		680,
		3
	],
	"../pages/mechanic-list/mechanic-list.module": [
		681,
		2
	],
	"../pages/user-detail-phone-number/user-detail-phone-number.module": [
		683,
		1
	],
	"../pages/user-email/user-email.module": [
		682,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_detail_phone_number_user_detail_phone_number__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_email_user_email__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mechanic_list_mechanic_list__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_mechanic_mechanic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_detail_phone_number_user_detail_phone_number__["a" /* UserDetailPhoneNumberPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_email_user_email__["a" /* UserEmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mechanic_list_mechanic_list__["a" /* MechanicListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mechanic-list/mechanic-list.module#MechanicListPageModule', name: 'MechanicListPage', segment: 'mechanic-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-email/user-email.module#UserEmailPageModule', name: 'UserEmailPage', segment: 'user-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-detail-phone-number/user-detail-phone-number.module#UserDetailPhoneNumberPageModule', name: 'UserDetailPhoneNumberPage', segment: 'user-detail-phone-number', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_detail_phone_number_user_detail_phone_number__["a" /* UserDetailPhoneNumberPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_email_user_email__["a" /* UserEmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mechanic_list_mechanic_list__["a" /* MechanicListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_mechanic_mechanic__["a" /* MechanicProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mechanic_list_mechanic_list__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mechanic_mechanic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(navCtrl, geolocation, nativeGeocoder, mechProv, callNumber, navparams, alertCtrl, app, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.mechProv = mechProv;
        this.callNumber = callNumber;
        this.navparams = navparams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loading = loading;
        this.isNewRequest = true;
        this.isDisplayVehicle = false;
        this.mechanicAvail = false;
        this.directionService = new google.maps.DirectionsService();
        this.loader = this.loading.create({
            content: 'loading...',
        });
        if (this.mechProv.getMyGV() === false) {
            alert("sdf");
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Transaction succesful',
                    message: 'Mechanic has reached to your place',
                    buttons: [
                        {
                            text: 'oK',
                            role: 'ok',
                            handler: function () {
                                _this.mechanicAvail = true;
                            }
                        }
                    ]
                });
                alert.present();
            }, 50000);
        }
    }
    HomePage_1 = HomePage;
    HomePage.prototype.addCarMarkers = function (position) {
        var carMarker = new google.maps.Marker({
            map: this.map,
            position: position,
            icon: "assets/imgs/person.png"
        });
    };
    HomePage.prototype.calculateRoute = function (start, end) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observable) {
            _this.directionService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    observable.next(response);
                }
                else {
                    observable.error(status);
                }
            });
        });
    };
    HomePage.prototype.getSegmentedDirections = function (directions) {
        var route = directions.routes[0];
        var legs = route.legs;
        var path = [];
        var increments = [];
        var duration = 0;
        var numOfLegs = legs.length;
        while (numOfLegs--) {
            var leg = legs[numOfLegs];
            var steps = leg.steps;
            var numOfSteps = steps.length;
            while (numOfSteps--) {
                var step = steps[numOfSteps];
                var points = step.path;
                var numOfPoints = points.length;
                duration += step.duration.value;
                while (numOfPoints--) {
                    var point = points[numOfPoints];
                    path.push(point);
                    increments.unshift({
                        position: point,
                        time: duration,
                        path: path.slice(0)
                    });
                }
            }
        }
        return increments;
    };
    HomePage.prototype.getPickupCar = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observable) {
            var car = _this.myRoute[_this.myRouteIndex];
            observable.next(car);
            _this.myRouteIndex++;
        });
    };
    HomePage.prototype.simulateRoute = function (start, end) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observable) {
            _this.calculateRoute(start, end).subscribe(function (directions) {
                //get route path
                //
                _this.myRoute = _this.getSegmentedDirections(directions);
                _this.getPickupCar().subscribe(function (car) {
                    observable.next(car);
                });
            });
        });
    };
    HomePage.prototype.getMechanicCurrentUpdates = function () {
        if (this.mechanicdet != undefined) {
            var start = new google.maps.LatLng(this.mechanicdet.lat, this.mechanicdet.long);
            var end = new google.maps.LatLng(this.currentPos.coords.latitude, this.currentPos.coords.longitude);
            return this.simulateRoute(start, end);
        }
    };
    HomePage.prototype.getUserAddress = function (lat, long) {
        var _this = this;
        /*this is to get the Adress in the string format from longtude and latitude*/
        this.location = "address found";
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            console.log(JSON.stringify(result));
            _this.location = JSON.stringify(result);
            var locationObj = JSON.parse(_this.location);
            _this.getUserPositionCordinates(locationObj[0]);
        })
            .catch(function (error) { return console.log(error); });
    };
    HomePage.prototype.getUserPositionCordinates = function (location) {
        this.nativeGeocoder.forwardGeocode('Berlin')
            .then(function (coordinates) { return console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude); })
            .catch(function (error) { return console.log(error); });
    };
    HomePage.prototype.showDirections = function (path) {
        this.polylinePath = new google.maps.Polyline({
            path: path,
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
        this.polylinePath.setMap(this.map);
    };
    HomePage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
        //this.addCarMarkers();
        this.myRouteIndex = 0;
        if (this.isNewRequest === false) {
            this.loader.present();
            this.getMechanicCurrentUpdates().subscribe(function (car) {
                console.log(car.position);
                console.log(car.path);
                _this.addCarMarkers(car.position);
                _this.showDirections(car.path);
                _this.duration = _this.timeConversion(car.time);
                _this.loader.dismiss();
            });
        }
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.mechanicUpdates = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Transaction succesful',
            message: 'Mechanic has reached to your place',
            buttons: [
                {
                    text: 'oK',
                    role: 'ok',
                    handler: function () {
                        _this.mechanicAvail = true;
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.timeConversion = function (millseconds) {
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
            timeString += (seconds !== 1) ? (seconds * 10 + ' minutes ') : (seconds * 10 + ' minutes');
        }
        return timeString;
    };
    HomePage.prototype.addMarker = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.getUserCurrentPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            console.log(pos.coords.latitude);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
            //this.getUserAddress(pos.coords.latitude,pos.coords.longitude);
            _this.loader.dismiss();
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    HomePage.prototype.callMechanic = function () {
        this.callNumber.callNumber("18001010101", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.displayVehicleType = function () {
        alert("display");
        this.isDisplayVehicle = !this.isDisplayVehicle;
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.isNewRequest = this.mechProv.getMyGV();
        if (this.isNewRequest === false) {
            this.mechanicdet = this.navparams.get("param1");
            this.ispersonimg = this.mechanicdet.personimg;
        }
        this.loader.present();
        this.getUserCurrentPosition();
    };
    HomePage.prototype.GetMechanicsInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mechanic_list_mechanic_list__["a" /* MechanicListPage */]);
    };
    HomePage.prototype.cancelRequest = function () {
        this.mechProv.setMyGV(true);
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.makePayment = function () {
        this.presentConfirm();
    };
    HomePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Transaction succesful',
            message: 'Invoice will be sent to your mail',
            buttons: [
                {
                    text: 'oK',
                    role: 'ok',
                    handler: function () {
                        _this.mechProv.setMyGV(true);
                        _this.navCtrl.push(HomePage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.addClass = function (id) {
        this.id = id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n  	<button ion-button icon-only menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n  	 <ion-title navStyle>MechanicOnGo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <div #map id="map">\n </div> \n <ion-item  *ngIf="isNewRequest" class="mechChkbox">\n    <ion-label>Need a Mechanic</ion-label>\n    <ion-checkbox (click)="displayVehicleType()" [(ngModel)]="mechanicDemand"></ion-checkbox>\n  </ion-item>\n  <div *ngIf="isDisplayVehicle">{{ isDisplayVehicle}}\n <button ion-button color="secondary" class="btnType">Select a Type</button> \n  <ul>\n    <li (click)="addClass(id=1)"> <ion-icon [ngClass]="{\'selected\': id === 1 }" id="1" name="bicycle"></ion-icon><span>Bike</span></li>\n    <li (click)="addClass(id=2)"><ion-icon [ngClass]="{\'selected\': id === 2 }" id="2" name="car"></ion-icon><span>Car</span></li>\n    <li></li>\n    <li></li>\n    <li><ion-icon name="truck"></ion-icon><span>Heavy duty</span></li>\n    <li (click)="addClass(id=4)"><ion-icon  [ngClass]="{\'selected\': id === 4 }" id="4" name="car" name="bus"></ion-icon><span>Truck</span></li>\n    </ul>\n      <button ion-button color="secondary" (click)="GetMechanicsInfo()" class="btnFind">Find</button>\n      </div>\n      <div *ngIf="!isNewRequest">\n          <ion-avatar item-start style="width:150px">\n      <img src = {{ispersonimg}}>\n    </ion-avatar>\n          <p *ngIf="!mechanicAvail" class="selected">Your Mechanic is {{duration}} away </p>\n          <p *ngIf="mechanicAvail" class="selected">Once the Mechanic has reached .Continue with the payment </p>\n         <div *ngIf="mechanicAvail" class="paymentMethod">\n          <button ion-button color="secondary" class="btnType" (click)="makePayment()">Make Payment</button> \n          <ul>\n          <li (click)="addClass(id=5)"> <ion-icon [ngClass]="{\'selected\': id === 5 }"  name="cash"></ion-icon><span>Cash</span></li>\n\n    <li (click)="addClass(id=6)"><ion-icon [ngClass]="{\'selected\': id === 6 }"  name="card"></ion-icon><span>Card</span></li>\n          </ul>\n         </div>\n         <button ion-button color="secondary"  class="btnCancel" (click)="cancelRequest()">Cancel Request</button>\n         <button ion-button color="secondary"  class="btnCall" (click)="callMechanic()">Call</button>\n       \n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_5__providers_mechanic_mechanic__["a" /* MechanicProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */];
        this.landingPage = __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (p) {
        //alert(this.rootPage);
        this.rootPage = p;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\app\app.html"*/'\n<ion-menu [content]="NAV" persistent=true>\n <ion-content>\n   <ion-list>\n  <ion-item  menuClose (click)="openPage(homePage)">\n    <ion-icon name="home" item-start></ion-icon>\n      Home\n  </ion-item>\n   <ion-item>\n    <ion-icon name="settings" item-start></ion-icon>\n      Settings\n  </ion-item>\n   <ion-item>\n    <ion-icon name="bicycle" item-start></ion-icon>\n      Service Providers\n  </ion-item>\n   <ion-item menuClose (click)="openPage(landingPage)">\n    <ion-icon  name="log-out" item-start></ion-icon>\n      Log Out\n  </ion-item>\n</ion-list>\n </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #NAV></ion-nav>\n'/*ion-inline-end:"C:\Users\Owner\Desktop\Project\POC\Mehanic App\mehanicOnGo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map