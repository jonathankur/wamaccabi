webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.name = '';
        this.img = 'http://theparcelpeople2.com.au/catalogue/server/pback.png';
        this.bio = '';
        this.awards = '';
        this.position = '';
        this.favplayer = '';
        this.favteam = '';
        this.dob = '';
        this.id = 1;
        this.firstname = '';
        this.lastname = '';
        var i = this.navParams.get('player');
        this.id = i.id;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.img = 'http://theparcelpeople2.com.au/catalogue/server/zs_playercard.php?id=' + this.id + '&rnd=' + Math.random();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center style="background-color:#005491">\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PLAYER PROFILE</div>\n<img [src]="img" style="width:100%; max-width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, alertCtrl, navCtrl, toastCtrl, connect, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.connect = connect;
        this.navParams = navParams;
        this.newmode = '0';
        this.newmode = '0';
        this.form = {
            email: '',
            password: ''
        };
        this.reg = {
            id: '',
            firstname: '',
            surname: '',
            phone: '',
            postcode: ''
        };
    }
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem('myac'))
            this.navCtrl.pop();
    };
    LoginPage.prototype.login = function () {
        var msg = '';
        if (this.form.password.length < 4)
            msg = 'Password Too Short';
        var a1 = this.form.email.indexOf('@');
        if (a1 > 0) {
            var m = this.form.email.substr(a1);
            if (m.indexOf('.') <= 0)
                msg = 'Invalid Email Address';
        }
        else
            msg = 'Invalid Email Address';
        if (msg.length)
            this.presentToast(msg);
        else
            this.dologin();
    };
    LoginPage.prototype.dologin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var that = this;
        this.connect.getList('zs_userlogin.php?params=' + encodeURI(this.form.email + '^' + this.form.password)).subscribe(function (data) {
            loading.dismiss();
            if (data.success > '0') {
                if ((data.firstname.length > 0) && (data.surname.length > 0)) {
                    window.localStorage.setItem('myac', data.myAc);
                    that.navCtrl.pop();
                }
                else {
                    that.reg.id = data.myAc;
                    that.newmode = '1';
                    that.reg.email = data.email;
                    that.reg.firstname = data.firstname;
                    that.reg.surname = data.surname;
                    that.reg.phone = data.phone;
                    that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { reg: that.reg });
                }
            }
            else {
                that.error = data.error;
            }
        }, function (err) { return _this.connect.logError(err); });
    };
    LoginPage.prototype.forgot = function () {
        var _this = this;
        var em = this.form.email;
        var that = this;
        if (!em.length)
            that.presentToast('Please Enter Email Address First');
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.connect.getList('zs_forgotpass.php?email=' + encodeURI(this.form.email)).subscribe(function (data) {
                loading_1.dismiss();
                that.doComplete();
            }, function (err) { return _this.connect.logError(err); });
        }
    };
    LoginPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Forgot Password',
            subTitle: 'Please check your email for instructions',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">LOG-IN / REGISTER</div>\n\n	<ion-grid>\n		\n		<form (ngSubmit)="login()" #loginForm="ngForm" class="maxWidth300">\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Log in with Email</ion-label>\n							<ion-input type="email" [(ngModel)]="form.email" name="email"  required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Password</ion-label>\n							<ion-input type="password"[(ngModel)]="form.password" name="password" required></ion-input>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n<ion-col col-1>\n</ion-col>\n				<ion-col col-10>\n					<button ion-button full [disabled]="!loginForm.form.valid" class="button200">Log In / Sign Up</button>\n				</ion-col>\n<ion-col col-1>\n</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col padding class="error" *ngIf="error">\n					<p>{{error}}</p>\n				</ion-col>\n			</ion-row>\n		</form>\n		<ion-row padding-top>\n			<ion-col text-center>\nIf you are creating a new account, enter any password that you will remember        \n			</ion-col>\n		</ion-row>\n		<ion-row padding-top>\n			<ion-col text-center>\n<i>Forgot Password?</i><br>\nEnter email address above and click <span style="color:white; background-color:dodgerblue; padding:2px" (click)="forgot()">HERE</span>\n			</ion-col>\n		</ion-row>\n\n		<div class="spacer height80"></div>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprofPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewprofPage = /** @class */ (function () {
    function NewprofPage(navCtrl, navParams, connect, camera, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pl = {
            me: 0,
            id: 0,
            first: '',
            middle: '',
            last: '',
            dob: '',
            favplayer: '',
            position: '',
            favteam: '',
            bio: '',
            awards: '',
            img: 'http://theparcelpeople2.com.au/soccer/general.jpg',
            picdata: ''
        };
        this.pl.me = window.localStorage.getItem('myac');
    }
    NewprofPage.prototype.ionViewDidLoad = function () {
        this.pl.me = window.localStorage.getItem('myac');
    };
    NewprofPage.prototype.getpicture = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            //    alert(JSON.stringify(err));
        });
    };
    NewprofPage.prototype.getcameraroll = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            //    alert(JSON.stringify(err));
        });
    };
    NewprofPage.prototype.doEdit = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://theparcelpeople2.com.au/catalogue/server/zs_newprofile.php';
        this.http.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            window.localStorage.setItem('newplayer', data.data);
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    NewprofPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newprof',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/newprof/newprof.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">CREATE PROFILE</div>\n\n<ion-grid>\n<ion-row text-center>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-center>\n<ion-item text-center>\n  <img [src]="pl.img"  style="max-width:300px !important; max-height:300px !important; width:100% !; height:100%">\n</ion-item>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row> \n<ion-row>\n<ion-col col-6>\n<button ion-button icon-start (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button icon-end (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list>\n<ion-item>\n<ion-label for="first" stacked>First Name</ion-label>\n<ion-input [(ngModel)]="pl.first"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="middle" stacked>Middle Name(s)</ion-label>\n<ion-input [(ngModel)]="pl.middle"  style="color:dodgerblue"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label for="last" stacked>Surname</ion-label>\n<ion-input [(ngModel)]="pl.last"  style="color:dodgerblue"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label for="dob" stacked>Date of Birth</ion-label>\n<ion-input [(ngModel)]="pl.dob"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="position" stacked>Position Played</ion-label>\n<ion-input [(ngModel)]="pl.position"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favteam"  stacked>Favourite Team</ion-label>\n<ion-input [(ngModel)]="pl.favteam"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favplayer"  stacked>Favourite Player</ion-label>\n<ion-input [(ngModel)]="pl.favplayer"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Awards & Honours</ion-label>\n<ion-textarea [(ngModel)]="pl.awards"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-label stacked>Bio</ion-label>\n<ion-textarea [(ngModel)]="pl.bio"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n\n</ion-list>\n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doEdit()">Save</button>\n</ion-footer>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/newprof/newprof.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewprofPage);
    return NewprofPage;
}());

//# sourceMappingURL=newprof.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorPage = /** @class */ (function () {
    function SponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sponsorimage = '';
        this.sponsorimage = 'http://theparcelpeople2.com.au/soccer/sponsor.jpg?rnd=' + Math.random();
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        var m = this.navParams.get('id');
        this.sponsorimage = 'http://theparcelpeople2.com.au/soccer/sponsor' + m + '.jpg?rnd=' + Math.random();
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<img [src]="sponsorimage" style="width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(42);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.s = [];
        this.s = {
            me: window.localStorage.getItem('myac'),
            team: 0,
            sendpush: true,
            sendemail: true,
            content: ''
        };
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.s.team = this.navParams.get('team');
    };
    MessagePage.prototype.dosubmit = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://theparcelpeople2.com.au/catalogue/server/zs_teammessage.php';
        this.http.post(url, that.s, {})
            .then(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/message/message.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">TEAM ANNOUNCEMENT</div>\n\n<ion-list no-padding>\n<ion-item>\n<ion-label stacked>Content</ion-label>\n<ion-textarea [(ngModel)]="s.content"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-label stacked>Send as Push Notification</ion-label>\n<ion-checkbox [(ngModel)]="s.sendpush"> </ion-checkbox>\n</ion-item>\n<ion-item>\n<ion-label stacked>Send as Email</ion-label>\n<ion-checkbox [(ngModel)]="s.sendemail"> </ion-checkbox>\n</ion-item>\n<ion-item>\n\n<ion-row>\n<ion-col col-12>\n<button ion-button full secondary (click)="dosubmit()" style="height:70px; min-height:70px">Send</button>\n</ion-col>\n</ion-row>\n</ion-item> \n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/enter-credit-card/enter-credit-card.module": [
		299,
		4
	],
	"../pages/message/message.module": [
		300,
		3
	],
	"../pages/sell/sell.module": [
		301,
		2
	],
	"../pages/teamfixtures/teamfixtures.module": [
		302,
		1
	],
	"../pages/teamnews/teamnews.module": [
		303,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_players__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_membership__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_teams__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socialupload_socialupload__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__myprofiles_myprofiles__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history_history__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__events_events__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feedback_feedback__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__management_management__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, connect, alertCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.oneSignal = oneSignal;
        this.thisversion = 1;
        this.banner = 'http://theparcelpeople2.com.au/soccer/banner.jpg';
        this.myAc = '';
        this.hmode = 0;
        this.manager = false;
        this.feed = [];
        this.manager = false;
        this.hmode = 0;
        this.thisversion = 5;
    }
    HomePage.prototype.getpushinfo = function () {
        var _this = this;
        this.oneSignal.startInit('7e589ffb-c9ee-4489-9ed6-242dd68e170f', '423654997433');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
        var i = this.oneSignal.getIds();
        i.then(function (data) {
            var that = _this;
            var w = window.localStorage.getItem('myac');
            var url = 'zs_pushtoken.php?me=' + w + '&pushid=' + data.userId;
            window.localStorage.setItem('pushid', data.userId);
            _this.connect.getList(url).subscribe(function (data) {
            }, function (err) {
            });
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        if (this.myAc.length)
            this.getpushinfo();
        window.localStorage.removeItem('newplayer');
        var that = this;
        var url = 'zs_socialfeed.php?me=' + that.myAc;
        this.connect.getList(url).subscribe(function (data) {
            that.feed = data.feed;
            that.manager = data.manager;
            var v = parseInt(data.version);
            if (v > that.thisversion)
                that.versionmessage(v);
        }, function (err) {
        });
        if (this.myAc.length) {
            var m = this.hmode;
            this.hmode = 0;
            if (m == 1)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__membership_membership__["a" /* MembershipPage */]);
            if (m == 2)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__myprofiles_myprofiles__["a" /* MyprofilesPage */]);
            if (m == 4)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__history_history__["a" /* HistoryPage */]);
        }
    };
    HomePage.prototype.goEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__events_events__["a" /* EventsPage */]);
    };
    HomePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__feedback_feedback__["a" /* FeedbackPage */]);
    };
    HomePage.prototype.goInfo = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__info_info__["a" /* InfoPage */], { id: a });
    };
    HomePage.prototype.teams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teams_teams__["a" /* TeamsPage */]);
    };
    HomePage.prototype.showSponsor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__["a" /* SponsorPage */], { id: 1 });
    };
    HomePage.prototype.management = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__management_management__["a" /* ManagementPage */]);
    };
    HomePage.prototype.showPlayers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__players_players__["a" /* PlayersPage */]);
    };
    HomePage.prototype.showUpload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__socialupload_socialupload__["a" /* SocialuploadPage */]);
    };
    HomePage.prototype.doLogout = function () {
        this.myAc = '';
        window.localStorage.removeItem('myac');
        window.localStorage.removeItem('userPayment');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.membership = function () {
        if (this.myAc.length)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__membership_membership__["a" /* MembershipPage */]);
        else {
            this.hmode = 1;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.history = function () {
        if (this.myAc.length)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__history_history__["a" /* HistoryPage */]);
        else {
            this.hmode = 4;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.myprofiles = function () {
        if (this.myAc.length)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__myprofiles_myprofiles__["a" /* MyprofilesPage */]);
        else {
            this.hmode = 2;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.signOutAlert = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: '',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        that.doLogout();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.versionmessage = function (a) {
        this.thisversion = a;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'New Version Available',
            subTitle: 'Please go to the App Store or Google Play Store to get the latest version of this App',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.uptick = function (a) {
        if (!this.feed[a].liked) {
            this.feed[a].likes++;
            this.feed[a].liked = true;
            var that = this;
            var url = 'zs_uptick.php?id=' + this.feed[a].id;
            this.connect.getList(url).subscribe(function (data) {
            }, function (err) {
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<button ion-button menuToggle color="dark"><ion-icon name="menu"></ion-icon></button>\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-menu id="mainmenu" [content]="myMenum" style="overflow:hidden" [persistent]=true >\n	<ion-content class="menucontainer">\n		<ion-item-group class="paddingMenu">\n\n			<button ion-item (click)="myprofiles()" class="list-item menuitems" menuClose>\n			   My Profiles\n			</button>\n			\n			\n			<button ion-item (click)="goInfo(3)" class="list-item menuitems" menuClose>\n			   Fixtures \n			</button>\n			\n<button ion-item (click)="showPlayers()" class="list-item menuitems" menuClose>\n Club Player Profiles\n</button>\n<button ion-item (click)="history()" class="list-item menuitems" menuClose>\n			   Payment History\n			</button>\n\n			<button ion-item (click)="goInfo(1)" class="list-item menuitems" menuClose>\n			   Club Policies\n			</button>\n			<button ion-item (click)="feedback()" class="list-item menuitems" menuClose>\n			   Feedback\n			</button>\n			<button ion-item (click)="goInfo(2)" class="list-item menuitems" menuClose>\n			   Contact\n			</button>\n\n<div *ngIf="manager">\n			<button ion-item (click)="management()" class="list-item menuitems" menuClose>\n			   Management Reports\n			</button>\n\n</div>\n<div *ngIf="myAc.length">	\n			<button ion-item (click)="signOutAlert()" class="list-item menuitems" menuClose>\n			   Sign Out\n			</button>\n</div>			\n		</ion-item-group>\n	</ion-content>\n</ion-menu>\n\n<ion-content #myMenum text-center>\n<div style="background-color:gainsboro"  *ngIf="myAc.length">\n<button ion-item (click)="showUpload()" full>Upload a Post</button>\n</div>\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let f of feed"  class="borderBottomGainsboroAlpha">\n<img [src]="f.img" style="width:100%">\n<p style="font-weight:bold; margin-bottom:10px">{{ f.title }}</p>\n<p [innerHTML]="f.txt"> </p>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n{{ f.likes }} likes</ion-col>\n<ion-col col-6 text-right (click)="uptick(f.pos)">\n<ion-icon name="thumbs-up"> </ion-icon>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n</ion-list>\n<ion-item style="height:200px; min-height:200px"> &nbsp;\n</ion-item>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-4 (click)="membership()">\n <ion-icon name="create"> </ion-icon>\n </ion-col>\n <ion-col col-4 (click)="teams()">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n\n <ion-col col-4 (click)="goEvents()" >\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n</ion-row>\n<ion-row text-center style="min-height:30px !important">\n\n <ion-col col-4 (click)="membership()">\n Register\n </ion-col>\n\n <ion-col col-4 (click)="teams()">\n Teams\n </ion-col>\n\n <ion-col col-4 (click)="goEvents()" >\n Events\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__["a" /* OneSignal */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(104);
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
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayersPage = /** @class */ (function () {
    function PlayersPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.srch = '';
        this.players = [];
        this.srch = '';
    }
    PlayersPage.prototype.ionViewDidLoad = function () {
        this.players = [];
        var that = this;
        var url = 'zs_players.php';
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    PlayersPage.prototype.findPlayer = function () {
        var that = this;
        var url = 'zs_players.php?srch=' + this.srch;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    PlayersPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { player: a });
    };
    PlayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-players',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/players/players.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">CLUB PROFILES</div>\n<ion-row>\n<ion-col col-1>\n</ion-col>\n<ion-col col-8>\n<ion-input type="text" [(ngModel)]="srch" style="margin-top:5px; border:1px solid #333333 !important" placeholder=" Search for Player"></ion-input>\n</ion-col>\n<ion-col col-2>\n<button ion-button block color="dark" icon-only (click)="findPlayer()"><ion-icon name="search"></ion-icon></button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p)">\n<ion-avatar item-start>\n <img [src]="p.img">\n</ion-avatar>\n<h2>{{ p.name }}</h2>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/players/players.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], PlayersPage);
    return PlayersPage;
}());

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(loadingCtrl, navCtrl, toastCtrl, connect, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.connect = connect;
        this.navParams = navParams;
        this.reg = this.navParams.get('reg');
    }
    RegisterPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        //    console.log('ionViewDidLoad EmailLoginPage');
    };
    RegisterPage.prototype.doRegister = function () {
        var msg = '';
        if ((this.reg.firstname.length < 1) || (this.reg.surname.length < 1))
            msg = 'Please enter your name';
        if (msg.length)
            this.presentToast(msg);
        else {
            var that_1 = this;
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var url = 'zs_userregister.php?reg=' + JSON.stringify(this.reg);
            console.log(url);
            this.connect.getList(url).subscribe(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    console.log(data);
                    window.localStorage.setItem('myac', that_1.reg.id);
                    that_1.navCtrl.pop();
                }
            }, function (err) {
                loading_1.dismiss();
                that_1.connect.logError(err);
            });
        }
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/register/register.html"*/'<ion-header>\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">New User Details</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n <ion-grid>\n <ion-row>\n   <ion-col>\n<p>Please fill out the details below to establish your account.</p>\n </ion-col>\n</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Register with Email</ion-label>\n							<ion-input type="email" [(ngModel)]="reg.email" disabled></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>First Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.firstname" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Surname</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.surname" required></ion-input>\n						</ion-item>\n\n					</ion-list>\n				</ion-col>\n			</ion-row>\n </ion-grid>  \n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doRegister()">Save</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newprof_newprof__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indoor_indoor__ = __webpack_require__(211);
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
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembershipPage = /** @class */ (function () {
    function MembershipPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.myAc = '';
        this.players = [];
    }
    MembershipPage.prototype.ionViewDidEnter = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        var that = this;
        var n = window.localStorage.getItem('newplayer');
        if (!n)
            n = '0';
        window.localStorage.removeItem('newplayer');
        if (parseInt(n) > 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_new__["a" /* NewPage */], { id: parseInt(n) });
        else {
            var url = 'zs_myplayers.php?id=' + this.myAc;
            this.connect.getList(url).subscribe(function (data) {
                that.players = data.players;
            }, function (err) {
            });
        }
    };
    MembershipPage.prototype.newreg = function () {
        window.localStorage.removeItem('goback');
        window.localStorage.removeItem('newplayer');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newprof_newprof__["a" /* NewprofPage */]);
    };
    MembershipPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_new__["a" /* NewPage */], { id: a });
    };
    MembershipPage.prototype.goIndoor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__indoor_indoor__["a" /* IndoorPage */]);
    };
    MembershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membership',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">REGISTRATION</div>\n<ion-row>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10>\n<p>Please choose an existing player to register, or create a new player</p>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n<ion-list text-wrap>\n<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p.id)">\n<ion-avatar item-start>\n <img [src]="p.img">\n</ion-avatar>\n<h2>{{ p.name }}</h2>\n</ion-item>\n<ion-item>\n<button ion-button full (click)="goPlayer(0)" style="height:60px; min-height:60px">NEW PLAYER</button>\n</ion-item>\n</ion-list>\n\n<ion-item>\n<button ion-button full (click)="goIndoor()" style="height:60px; min-height:60px">REGISTER INDOOR TEAM</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MembershipPage);
    return MembershipPage;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPage = /** @class */ (function () {
    function NewPage(navCtrl, navParams, connect, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.teams = [];
        this.player = 0;
        this.reg = {
            id: '',
            firstname: '',
            middlename: '',
            lastname: '',
            phoneh: '',
            phonem: '',
            postcode: '',
            email: '',
            address: '',
            gender: 'M',
            dob: '',
            contact: 'K',
            cname: '',
            cadd: '',
            cphone: '',
            shirt: '',
            division: 0,
            medical: ''
        };
        this.teams = [];
    }
    NewPage.prototype.ionViewDidLoad = function () {
        var that = this;
        this.player = this.navParams.get('id');
        var url = 'zs_newreg.php?id=' + this.player;
        this.connect.getList(url).subscribe(function (data) {
            that.teams = data.teams;
            that.reg = data.reg;
        }, function (err) {
            that.connect.logError(err);
        });
    };
    NewPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem('goback') == 'yes') {
            window.localStorage.removeItem('goback');
            this.navCtrl.pop();
        }
    };
    NewPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    NewPage.prototype.doRegister = function () {
        var msg = '';
        if (!this.reg.division)
            msg = "Please choose a team";
        if ((this.reg.firstname.length < 1) || (this.reg.lastname.length < 1))
            msg = "Please enter the player's name";
        if (msg.length)
            this.presentToast(msg);
        else {
            var that_1 = this;
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var url = 'zs_playerregister.php?me=' + window.localStorage.getItem('myac') + '&reg=' + JSON.stringify(this.reg);
            // console.log(url);
            this.connect.getList(url).subscribe(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    window.localStorage.setItem('newreg', data.id);
                    that_1.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */], { id: data.id });
                }
            }, function (err) {
                loading_1.dismiss();
                that_1.presentToast("Could not register player");
                that_1.connect.logError(err);
            });
        }
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/new/new.html"*/'<ion-header>\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">New Registration</ion-title>\n       </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-grid>\n <ion-row>\n   <ion-col>\n<p>Please fill out the details below to register.</p>\n </ion-col>\n</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Player\'s First Name</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.firstname"></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Middle Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.middlename"></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Surname</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.lastname"></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Address</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.address" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Postal Code</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.postcode" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Home Phone</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.phoneh" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Mobile</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.phonem" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Email Address</ion-label>\n							<ion-input type="email"[(ngModel)]="reg.email" required></ion-input>\n						</ion-item>\n                                          <ion-item>\n                           <ion-label color="primary" floating>Gender</ion-label>\n				<ion-select [(ngModel)]="reg.gender" popover>\n	<ion-option value="M">Male</ion-option>\n	<ion-option value="F">Female</ion-option>\n       </ion-select>\n                                              </ion-item> \n						<ion-item>\n							<ion-label color="primary" floating>Date of Birth</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.dob" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Shirt Size</ion-label>\n								<ion-select [(ngModel)]="reg.shirt" popover>\n			       <ion-option value="S">Adult - Small</ion-option>\n			       <ion-option value="M">Adult - Medium</ion-option>\n			       <ion-option value="L">Adult - Large</ion-option>\n			       <ion-option value="XL">Adult - X-Large</ion-option>\n				<ion-option value="16">Child - Size 16</ion-option>\n				<ion-option value="15">Child - Size 15</ion-option>\n				<ion-option value="14">Child - Size 14</ion-option>\n				<ion-option value="13">Child - Size 13</ion-option>\n				<ion-option value="12">Child - Size 12</ion-option>\n				<ion-option value="11">Child - Size 11</ion-option>\n				<ion-option value="10">Child - Size 10</ion-option>\n				<ion-option value="9">Child - Size 9</ion-option>\n				<ion-option value="8">Child - Size 8</ion-option>\n				<ion-option value="7">Child - Size 7</ion-option>\n				<ion-option value="6">Child - Size 6</ion-option>\n				</ion-select>\n						</ion-item>\n					<ion-item>\n                           <ion-label color="primary" floating>Team</ion-label>\n				<ion-select [(ngModel)]="reg.division" popover>\n				<ion-option *ngFor="let t of teams" [value]="t.id">{{t.name}}</ion-option>\n				</ion-select>\n				</ion-item>\n                           <ion-item>\n\n                           <ion-label color="primary" floating>Contact Details (Type)</ion-label>\n				<ion-select [(ngModel)]="reg.contact" popover>\n				<ion-option value="K">Next of Kin</ion-option>\n			       <ion-option value="P">Parent</ion-option>\n				<ion-option value="G">Guardian</ion-option>\n                            <ion-option value="O">Other</ion-option>\n				</ion-select>\n					</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Contact Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cname" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Contact Address</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cadd" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Contact Phone</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cphone" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Medical / Physical Issues</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.medical"></ion-input>\n						</ion-item>\n\n					</ion-list>\n					\n\n				</ion-col>\n			</ion-row>\n </ion-grid>  \n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doRegister()">Continue</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/new/new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, loadingCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.payment = '';
        this.paycard = '';
        this.allok = false;
        this.pmode = 1;
        this.id = 0;
        this.tick = './assets/img/tick.png';
        this.blank = './assets/img/blank.png';
        this.stripe_pub = '';
        this.teamname = '';
        this.name = '';
        this.mymethod = 1;
        this.pmethods = [];
        this.options = [];
        this.allok = false;
        this.pmode = 1;
        this.mymethod = 1;
        this.id = this.navParams.get('id');
    }
    PaymentPage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    PaymentPage.prototype.chooseOption = function (a) {
        this.mymethod = a;
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i].id == a)
                this.options[i].selected = 1;
            else
                this.options[i].selected = 0;
        }
    };
    PaymentPage.prototype.recalc = function () {
        var _this = this;
        this.payment = window.localStorage.getItem('userPayment');
        if (!this.payment)
            this.payment = '';
        if (this.payment.length)
            this.allok = true;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        var url = 'zs_getpaymentdetails.php?pmode=' + this.pmode + '&id=' + this.id + '&payment=' + this.payment;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.paycard = data.paycard;
            that.pmethods = data.pmethods;
            that.stripe_pub = data.stripe_pub;
            that.payment = data.payment;
            that.teamname = data.teamname;
            that.name = data.name;
            that.options = data.options;
            window.localStorage.setItem('userPayment', that.payment);
            if (that.payment.length)
                that.allok = true;
            else
                that.allok = false;
            that.chooseOption(that.mymethod);
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    PaymentPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: 'Registration is complete',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        window.localStorage.setItem('goback', 'yes');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    PaymentPage.prototype.doError = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: 'Payment could not be completed - Please try again',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    PaymentPage.prototype.showPayment = function (a) {
        window.localStorage.setItem('userPayment', a);
        this.pmode = 0;
        this.recalc();
    };
    PaymentPage.prototype.showEnterPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */], { stripe_pub: this.stripe_pub });
    };
    PaymentPage.prototype.doConfirm = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var url = 'zs_savepayment.php?reg=' + this.id + '^' + this.payment + '^' + this.mymethod;
        //  this.myAlert(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            if (data.success)
                that.doComplete();
            else
                that.doError();
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/payment/payment.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PAYMENT OPTIONS</div>\n<ion-list>\n<ion-item>\n<p>Player: <span style="color:#488AFF">{{ name }}</span></p>\n</ion-item>\n<ion-item>\n<p>Team: <span style="color:#488AFF">{{ teamname }}</span></p>\n</ion-item>\n<ion-item *ngFor="let o of options">\n<ion-row (click)="chooseOption(o.id)">\n<ion-col col-2 >\n<img [src]="o.selected ? tick : blank" >\n</ion-col>\n\n<ion-col col-10>\n<p>{{ o.desc }}</p>\n<p><b>${{ o.price }}</b></p>\n</ion-col>\n</ion-row>\n</ion-item>\n</ion-list>\n\n  <div *ngIf="payment.length"  style="border-top:1px solid gainsboro; padding-bottom:40px">\n   <div>Payment Method :-</div>\n   <p class="userdetails" [innerHTML]="paycard"> </p>\n   <ion-item text-right no-lines>\n    <button ion-button small outline (click)="showPayment(\'\')">Change</button>\n   </ion-item> \n  </div>\n  <div *ngIf="!payment.length"  style="border-top:1px solid gainsboro"> \n   <div>Choose Payment Method :-</div>\n    <ion-list class="noBottomMargin">\n     <ion-item class="height80 borderBottom" no-lines  *ngFor="let m of pmethods">\n       <div (click)="showPayment(m.id);">\n       <ion-row>\n       <ion-col col-1>\n       </ion-col>\n       <ion-col col-11>\n       <div>\n	{{ m.typ }} ending in **** {{ m.last4 }}\n       </div>\n       </ion-col>\n       </ion-row>\n       </div>\n     </ion-item>\n    </ion-list>\n\n    <button ion-item (click)="showEnterPayment()" class="height80 borderBottom" no-lines>\n		Add Payment Method\n    </button>\n </div> \n\n</ion-content>\n<ion-footer *ngIf="allok">\n<button ion-button full (click)="doConfirm()" color="secondary" style="font-weight:bold!important">CONFIRM</button>\n</ion-footer>'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndoorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enter_credit_card_enter_credit_card__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndoorPage = /** @class */ (function () {
    function IndoorPage(navCtrl, navParams, connect, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.teams = [];
        this.payment = '';
        this.paycard = '';
        this.allok = false;
        this.pmode = 1;
        this.id = 0;
        this.stripe_pub = '';
        this.reg = {
            id: '',
            teamname: '',
            yourname: '',
            phoneh: '',
            email: '',
            division: 0,
        };
        this.teams = [];
        this.pmethods = [];
        this.allok = false;
        this.pmode = 1;
    }
    IndoorPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var me = window.localStorage.getItem('myac');
        var url = 'zs_indoor.php?me=' + me;
        this.connect.getList(url).subscribe(function (data) {
            that.teams = data.teams;
            that.reg = data.reg;
        }, function (err) {
            that.connect.logError(err);
        });
    };
    IndoorPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem('goback') == 'yes') {
            window.localStorage.removeItem('goback');
            this.navCtrl.pop();
        }
        else
            this.recalc();
    };
    IndoorPage.prototype.recalc = function () {
        this.payment = window.localStorage.getItem('userPayment');
        if (!this.payment)
            this.payment = '';
        if (this.payment.length)
            this.allok = true;
        var that = this;
        var url = 'zs_getepaymentdetails.php?pmode=' + this.pmode + '&me=' + window.localStorage.getItem('myac') + '&qty=1&id=1&payment=' + this.payment;
        this.connect.getList(url).subscribe(function (data) {
            that.paycard = data.paycard;
            that.pmethods = data.pmethods;
            that.stripe_pub = data.stripe_pub;
            that.payment = data.payment;
            window.localStorage.setItem('userPayment', that.payment);
            if (that.payment.length)
                that.allok = true;
            else
                that.allok = false;
        }, function (err) {
        });
    };
    IndoorPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    IndoorPage.prototype.showOk = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: 'Registration is complete',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        window.localStorage.setItem('goback', 'yes');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    IndoorPage.prototype.doRegister = function () {
        var msg = '';
        if (!this.reg.division)
            msg = "Please choose a season";
        if (this.reg.yourname.length < 1)
            msg = "Please enter your name";
        if (msg.length)
            this.presentToast(msg);
        else {
            var that_1 = this;
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var url = 'zs_indoorregister.php?me=' + window.localStorage.getItem('myac') + '&reg=' + JSON.stringify(this.reg);
            console.log(url);
            this.connect.getList(url).subscribe(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    that_1.showOk();
                }
            }, function (err) {
                loading_1.dismiss();
                that_1.presentToast("Could not register team");
                that_1.connect.logError(err);
            });
        }
    };
    IndoorPage.prototype.showPayment = function (a) {
        window.localStorage.setItem('userPayment', a);
        this.pmode = 0;
        this.recalc();
    };
    IndoorPage.prototype.showEnterPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */], { stripe_pub: this.stripe_pub });
    };
    IndoorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-indoor',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/indoor/indoor.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">REGISTER INDOOR TEAM</div>\n <ion-grid>\n <ion-row>\n   <ion-col>\n<p>Please fill out the details below to register.</p>\n </ion-col>\n</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Team Name</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.teamname"></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Your Name</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.yourname"></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Your Phone</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.phone" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Email Address</ion-label>\n							<ion-input type="email"[(ngModel)]="reg.email" required></ion-input>\n						</ion-item>\n					</ion-list>\n\n					<ion-item>\n                           <ion-label color="primary" floating>Season</ion-label>\n				<ion-select [(ngModel)]="reg.division" popover>\n				<ion-option *ngFor="let t of teams" [value]="t.id">{{t.name}}</ion-option>\n				</ion-select>\n				</ion-item>\n					\n\n				</ion-col>\n			</ion-row>\n </ion-grid>  \n <div *ngIf="payment.length"  style="border-top:1px solid gainsboro; padding-bottom:40px">\n   <div>Payment Method :-</div>\n   <p class="userdetails" [innerHTML]="paycard"> </p>\n   <ion-item text-right no-lines>\n    <button ion-button small outline (click)="showPayment(\'\')">Change</button>\n   </ion-item> \n  </div>\n  <div *ngIf="!payment.length"  style="border-top:1px solid gainsboro"> \n   <div>Choose Payment Method :-</div>\n    <ion-list class="noBottomMargin">\n     <ion-item class="height80 borderBottom" no-lines  *ngFor="let m of pmethods">\n       <div (click)="showPayment(m.id);">\n       <ion-row>\n       <ion-col col-1>\n       </ion-col>\n       <ion-col col-11>\n       <div>\n	{{ m.typ }} ending in **** {{ m.last4 }}\n       </div>\n       </ion-col>\n       </ion-row>\n       </div>\n     </ion-item>\n    </ion-list>\n\n    <button ion-item (click)="showEnterPayment()" class="height80 borderBottom" no-lines>\n		Add Payment Method\n    </button>\n </div> \n\n</ion-content>\n<ion-footer *ngIf="allok">\n<button ion-button full (click)="doRegister()" color="secondary" style="font-weight:bold!important">REGISTER</button>\n</ion-footer>'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/indoor/indoor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IndoorPage);
    return IndoorPage;
}());

//# sourceMappingURL=indoor.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teamplayers_teamplayers__ = __webpack_require__(213);
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
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamsPage = /** @class */ (function () {
    function TeamsPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_teamlist.php';
        this.connect.getList(url).subscribe(function (data) {
            that.teams = data.teams;
        }, function (err) {
        });
    };
    TeamsPage.prototype.chooseTeam = function (t) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teamplayers_teamplayers__["a" /* TeamplayersPage */], { t: t });
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">Select Team or Event</div>\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let t of teams"  class="borderBottomGainsboroAlpha" (click)="chooseTeam(t)">\n<p style="font-weight:bold">{{ t.name }}</p>\n</ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamplayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sponsor_sponsor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamplayersPage = /** @class */ (function () {
    function TeamplayersPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.players = [];
        this.feed = [];
        this.team = 0;
        this.mode = 3;
        this.msg = '';
        this.manager = 0;
        this.ladder = 'Coming soon';
        this.fixtures = 'Coming soon';
        this.banner = 'http://theparcelpeople2.com.au/soccer/banner.jpg';
        var tt = this.navParams.get('t');
        this.teamname = tt.name;
        this.team = tt.id;
        this.msg = '';
        this.manager = 0;
    }
    TeamplayersPage.prototype.ionViewDidLoad = function () {
        this.mode = 3;
        var that = this;
        var me = window.localStorage.getItem('myac');
        if (!me)
            me = '0';
        var url = 'zs_teaminfo.php?id=' + this.team + '&me=' + me;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
            that.feed = data.feed;
            that.msg = data.msg;
            that.manager = data.manager;
            that.fixtures = data.fixtures;
            that.ladder = data.ladder;
        }, function (err) {
        });
    };
    TeamplayersPage.prototype.gomode = function (a) {
        this.mode = a;
    };
    TeamplayersPage.prototype.goPlayer = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { player: p });
    };
    TeamplayersPage.prototype.showSponsor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sponsor_sponsor__["a" /* SponsorPage */], { id: 1 });
    };
    TeamplayersPage.prototype.teamAnnounce = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */], { team: this.team });
    };
    TeamplayersPage.prototype.uptick = function (a) {
        if (!this.feed[a].liked) {
            this.feed[a].likes++;
            this.feed[a].liked = true;
            var that = this;
            var url = 'zs_uptick.php?id=' + this.feed[a].id;
            this.connect.getList(url).subscribe(function (data) {
            }, function (err) {
            });
        }
    };
    TeamplayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teamplayers',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ teamname }}</div>\n<div *ngIf="mode==0">\n <div *ngIf="msg.length" style="text-align:left !important; padding:10px !important" [innerHTML]="msg">\n </div>\n <div *ngIf="!msg.length">\n  <ion-list>\n   <ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p)">\n    <ion-avatar item-start>\n     <img [src]="p.pic">\n    </ion-avatar>\n    <h2>{{ p.name }}</h2>\n   </ion-item>\n  </ion-list>\n </div>\n</div>\n<div *ngIf="mode==1">\n<ion-row>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-left>\n<p [innerHTML]="fixtures"></p>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row></div>\n<div *ngIf="mode==2">\n<ion-row>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-left>\n<p [innerHTML]="ladder"></p>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n</div>\n<div *ngIf="mode==3">\n<div *ngIf="manager">\n<button ion-item (click)="teamAnnounce()" full>Team Announcement</button>\n</div>\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let f of feed"  class="borderBottomGainsboroAlpha">\n<img [src]="f.img" style="width:100%">\n<p style="font-weight:bold; margin-bottom:10px">{{ f.title }}</p>\n<p [innerHTML]="f.txt"> </p>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n{{ f.likes }} likes</ion-col>\n<ion-col col-6 text-right (click)="uptick(f.pos)">\n<ion-icon name="thumbs-up"> </ion-icon>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n</ion-list>\n<ion-item style="height:200px; min-height:200px"> &nbsp;\n</ion-item>\n\n</div>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-4 (click)="gomode(0)">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n <ion-col col-4 (click)="gomode(1)">\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n <ion-col col-4 (click)="gomode(3)" >\n <ion-icon name="paper"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center style="min-height:30px !important">\n\n <ion-col col-4 (click)="gomode(0)">\n Players\n </ion-col>\n\n <ion-col col-4 (click)="gomode(1)">\n Fixtures\n </ion-col>\n\n <ion-col col-4 (click)="gomode(3)">\n News\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamplayersPage);
    return TeamplayersPage;
}());

//# sourceMappingURL=teamplayers.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialuploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__past_past__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocialuploadPage = /** @class */ (function () {
    function SocialuploadPage(navCtrl, navParams, camera, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pictaken = false;
        this.img = './assets/img/takepic.jpg';
        this.su = {
            title: '',
            me: window.localStorage.getItem('myac'),
            content: '',
            picdata: ''
        };
    }
    SocialuploadPage.prototype.ionViewDidLoad = function () {
        this.pictaken = false;
    };
    SocialuploadPage.prototype.getpicture = function () {
        var options = {
            quality: 70,
            targetWidth: 600,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pictaken = true;
            that.su.picdata = imageData;
            that.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SocialuploadPage.prototype.viewpast = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__past_past__["a" /* PastPage */]);
    };
    SocialuploadPage.prototype.getcameraroll = function () {
        var options = {
            quality: 70,
            targetWidth: 600,
            targetHeight: 300,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pictaken = true;
            that.su.picdata = imageData;
            that.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SocialuploadPage.prototype.dosubmit = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://theparcelpeople2.com.au/catalogue/server/zs_socialupload.php';
        this.http.post(url, that.su, {})
            .then(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    SocialuploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialupload',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">UPLOAD A POST</div>\n\n<ion-list no-padding>\n<ion-item text-center>\n  <img [src]="img"  style="max-width:600px !important; max-height:600px !important; width:100%; height:100%">\n</ion-item>\n\n<ion-item>\n<ion-label stacked>Title</ion-label>\n<ion-input [(ngModel)]="su.title"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label stacked>Content</ion-label>\n<ion-textarea [(ngModel)]="su.content"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-row>\n<ion-col col-12>\n<button ion-button icon-start full (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n<button ion-button icon-start full (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item *ngIf="pictaken">\n<ion-row>\n<ion-col col-12>\n<button ion-button full secondary (click)="dosubmit()" style="height:70px; min-height:70px">Upload</button>\n</ion-col>\n</ion-row>\n</ion-item> \n<ion-item>\n<ion-row>\n<ion-col col-12>\n<button ion-button icon-start full color="secondary" (click)="viewpast()">\n<ion-icon name="paper"></ion-icon>\nMy Past Posts\n</button>\n</ion-col>\n</ion-row>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SocialuploadPage);
    return SocialuploadPage;
}());

//# sourceMappingURL=socialupload.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PastPage = /** @class */ (function () {
    function PastPage(navCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.myAc = '';
        this.feed = [];
    }
    PastPage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    PastPage.prototype.recalc = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        var that = this;
        var url = 'zs_socialfeed.php?mine=1&me=' + that.myAc;
        this.connect.getList(url).subscribe(function (data) {
            that.feed = data.feed;
        }, function (err) {
        });
    };
    PastPage.prototype.takedown = function (a) {
        var _this = this;
        var that = this;
        var tid = this.feed[a].id;
        var alert = this.alertCtrl.create({
            title: 'Remove Post - Are you sure?',
            subTitle: '',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        var url = 'zs_removepost.php?id=' + tid;
                        _this.connect.getList(url).subscribe(function (data) {
                            that.navCtrl.pop();
                        }, function (err) {
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-past',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/past/past.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PAST POSTS</div>\n<div *ngIf="feed.length">\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let f of feed"  class="borderBottomGainsboroAlpha">\n<img [src]="f.img" style="width:100%">\n<p style="font-weight:bold; margin-bottom:10px">{{ f.title }}</p>\n<p [innerHTML]="f.txt"> </p>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n{{ f.likes }} likes</ion-col>\n<ion-col col-6 text-right (click)="takedown(f.pos)">\n<ion-icon name="trash"> </ion-icon>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n</ion-list>\n<ion-item style="height:200px; min-height:200px"> &nbsp;\n</ion-item>\n\n</div>\n<div *ngIf="!feed.length">\n<ion-item>\n<p>No Previous Posts</p>\n</ion-item>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/past/past.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PastPage);
    return PastPage;
}());

//# sourceMappingURL=past.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.title = '';
        this.content = '';
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        var i = this.navParams.get("id");
        var that = this;
        var url = 'zs_getcontent.php?id=' + i;
        this.connect.getList(url).subscribe(function (data) {
            that.title = data.title;
            that.content = data.content;
        }, function (err) {
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/info/info.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ title }}</div>\n<div [innerHTML]="content" style="text-align:left; padding:10px !important">  \n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newprof_newprof__ = __webpack_require__(106);
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
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilesPage = /** @class */ (function () {
    function MyprofilesPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.myAc = '';
        this.players = [];
    }
    MyprofilesPage.prototype.ionViewDidEnter = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        var that = this;
        var url = 'zs_myplayers.php?id=' + this.myAc;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    MyprofilesPage.prototype.newreg = function () {
        window.localStorage.removeItem('goback');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newprof_newprof__["a" /* NewprofPage */]);
    };
    MyprofilesPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */], { id: a });
    };
    MyprofilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofiles',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/myprofiles/myprofiles.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">MY PLAYER PROFILES</div>\n<ion-list text-wrap>\n<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p.id)">\n<ion-avatar item-start>\n <img [src]="p.img">\n</ion-avatar>\n<h2>{{ p.name }}</h2>\n</ion-item>\n<ion-item>\n<button ion-button full (click)="newreg()" style="height:60px; min-height:60px">CREATE NEW PROFILE</button>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/myprofiles/myprofiles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MyprofilesPage);
    return MyprofilesPage;
}());

//# sourceMappingURL=myprofiles.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams, connect, camera, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pl = {
            id: 0,
            name: 'searching...',
            dob: '',
            favplayer: '',
            position: '',
            favteam: '',
            bio: '',
            awards: '',
            img: 'http://theparcelpeople2.com.au/soccer/general.jpg',
            picdata: ''
        };
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_profileinfo.php?id=' + this.navParams.get('id');
        this.connect.getList(url).subscribe(function (data) {
            that.pl = data;
        }, function (err) {
        });
    };
    EditprofilePage.prototype.getpicture = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    EditprofilePage.prototype.getcameraroll = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    EditprofilePage.prototype.doEdit = function () {
        this.pl.id = this.navParams.get('id');
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://theparcelpeople2.com.au/catalogue/server/zs_editprofile.php';
        this.http.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EDIT PROFILE</div>\n\n<ion-grid>\n<ion-row text-center>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-center>\n<ion-item text-center>\n  <img [src]="pl.img"  style="max-width:300px !important; max-height:300px !important; width:100% !; height:100%">\n</ion-item>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row> \n<ion-row>\n<ion-col col-6>\n<button ion-button icon-start (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button icon-end (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n\n<ion-row text-center>\n<ion-col col-12>\n<h2>\n{{ pl.name }}\n</h2>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list>\n<ion-item>\n<ion-label for="dob" stacked>Date of Birth</ion-label>\n<ion-input [(ngModel)]="pl.dob"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="position" stacked>Position Played</ion-label>\n<ion-input [(ngModel)]="pl.position"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favteam"  stacked>Favourite Team</ion-label>\n<ion-input [(ngModel)]="pl.favteam"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favplayer"  stacked>Favourite Player</ion-label>\n<ion-input [(ngModel)]="pl.favplayer"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Awards & Honours</ion-label>\n<ion-textarea [(ngModel)]="pl.awards"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-label stacked>Bio</ion-label>\n<ion-textarea [(ngModel)]="pl.bio"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n\n</ion-list>\n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doEdit()">Save</button>\n</ion-footer>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.hist = [];
    }
    HistoryPage.prototype.ionViewDidEnter = function () {
        var m = window.localStorage.getItem('myac');
        var that = this;
        var url = 'zs_history.php?me=' + m;
        this.connect.getList(url).subscribe(function (data) {
            that.hist = data.hist;
        }, function (err) {
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/history/history.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PAYMENT HISTORY</div>\n<div *ngIf="!hist.length">\n<p>No payment history to display</p>\n</div>\n<div *ngIf="hist.length">\n<ion-grid text-wrap>\n<ion-item style="background-color:black; color:white"><ion-row>\n<ion-col col-9>\nDate & Description</ion-col>\n<ion-col col-3 text-right>Amount</ion-col></ion-row></ion-item>\n<ion-item *ngFor="let h of hist; let i = index" [ngClass]="(i % 2 == 0) ? \'odd\' : \'even\'">\n<ion-row>\n<ion-col col-9><p>{{ h.desc }}</p><p><small>{{ h.date }}</small></p></ion-col>\n<ion-col col-3 text-right>{{  h.amount}}</ion-col>\n</ion-row>\n</ion-item>\n</ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__epay_epay__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.events = [];
        this.mode = 0;
        this.saveid = 0;
        this.events = [];
    }
    EventsPage.prototype.ionViewDidEnter = function () {
        var that = this;
        var url = 'zs_event.php';
        this.connect.getList(url).subscribe(function (data) {
            that.events = data.events;
        }, function (err) {
        });
    };
    EventsPage.prototype.mqty = function (a, b) {
        this.events[a].qty = Math.max(0, this.events[a].qty + b);
    };
    EventsPage.prototype.doSubmit = function (a) {
        this.saveid = a;
        var me = window.localStorage.getItem('myac');
        if (!me)
            me = '';
        if (me.length)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__epay_epay__["a" /* EpayPage */], { id: this.events[a].id, qty: this.events[a].qty });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/events/events.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EVENTS</div>\n<ion-list>\n<ion-item *ngFor="let e of events; let i = index">\n<ion-grid no-lines>\n<ion-row>\n<ion-col col-12>\n<img [src]="e.eventimage" style="width:100%">\n</ion-col>\n</ion-row>\n<ion-row *ngIf="e.amount>0">\n<ion-col col-6 text-center>\n<p>Quantity</p>\n</ion-col>\n<ion-col col-6 text-center>\n<p>Price</p>\n</ion-col>\n</ion-row>\n<ion-row style="font-size:2em" text-center *ngIf="e.amount>0">\n<ion-col col-2 style="background-color:gainsboro" (click)="mqty(i,-1);">-</ion-col>\n\n<ion-col col-2>\n{{ e.qty }}\n</ion-col>\n<ion-col col-2 style="background-color:gainsboro" text-center (click)="mqty(i,1);">+</ion-col>\n<ion-col col-6 >\n<p style="font-size:1em">${{ e.amount }}</p>\n</ion-col>\n</ion-row>\n<ion-row *ngIf="e.amount>0">\n<ion-col col-12>\n<button ion-button full (click)="doSubmit(i)" style="height:70px; min-height:70px">{{ e.button }}</button>\n</ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-item>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpayPage = /** @class */ (function () {
    function EpayPage(navCtrl, navParams, loadingCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.payment = '';
        this.paycard = '';
        this.allok = false;
        this.pmode = 1;
        this.id = 0;
        this.stripe_pub = '';
        this.name = '';
        this.qty = 1;
        this.amount = 0;
        this.total = 0;
        this.pmethods = [];
        this.allok = false;
        this.pmode = 1;
        this.id = this.navParams.get('id');
        this.qty = this.navParams.get('qty');
    }
    EpayPage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    EpayPage.prototype.recalc = function () {
        var _this = this;
        this.payment = window.localStorage.getItem('userPayment');
        if (!this.payment)
            this.payment = '';
        if (this.payment.length)
            this.allok = true;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        var url = 'zs_getepaymentdetails.php?pmode=' + this.pmode + '&me=' + window.localStorage.getItem('myac') + '&qty=' + this.qty + '&id=' + this.id + '&payment=' + this.payment;
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            that.paycard = data.paycard;
            that.pmethods = data.pmethods;
            that.stripe_pub = data.stripe_pub;
            that.payment = data.payment;
            that.name = data.name;
            that.amount = data.amount;
            that.total = data.total;
            window.localStorage.setItem('userPayment', that.payment);
            if (that.payment.length)
                that.allok = true;
            else
                that.allok = false;
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    EpayPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: 'Payment is complete',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        window.localStorage.setItem('goback', 'yes');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    EpayPage.prototype.doError = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: 'Payment could not be completed - Please try again',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    EpayPage.prototype.showPayment = function (a) {
        window.localStorage.setItem('userPayment', a);
        this.pmode = 0;
        this.recalc();
    };
    EpayPage.prototype.showEnterPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */], { stripe_pub: this.stripe_pub });
    };
    EpayPage.prototype.doConfirm = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var url = 'zs_saveepayment.php?reg=' + this.id + '^' + this.payment + '^' + this.qty + '^' + window.localStorage.getItem('myac');
        console.log(url);
        //  this.myAlert(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            if (data.success)
                that.doComplete();
            else
                that.doError();
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    EpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-epay',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/epay/epay.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PAYMENT OPTIONS</div>\n<ion-list no-padding>\n<ion-item>\n<p><span style="color:#488AFF">{{ name }}</span></p>\n</ion-item>\n<ion-item>\n<p><span style="color:#488AFF">{{ qty }} @ ${{amount}}</span> </p>\n</ion-item>\n<ion-item>\n<p><span style="color:#488AFF">Total: ${{ total }}</span></p>\n</ion-item>\n</ion-list>\n\n  <div *ngIf="payment.length"  style="border-top:1px solid gainsboro; padding-bottom:40px">\n   <div>Payment Method :-</div>\n   <p class="userdetails" [innerHTML]="paycard"> </p>\n   <ion-item text-right no-lines>\n    <button ion-button small outline (click)="showPayment(\'\')">Change</button>\n   </ion-item> \n  </div>\n  <div *ngIf="!payment.length"  style="border-top:1px solid gainsboro"> \n   <div>Choose Payment Method :-</div>\n    <ion-list class="noBottomMargin">\n     <ion-item class="height80 borderBottom" no-lines  *ngFor="let m of pmethods">\n       <div (click)="showPayment(m.id);">\n       <ion-row>\n       <ion-col col-1>\n       </ion-col>\n       <ion-col col-11>\n       <div>\n	{{ m.typ }} ending in **** {{ m.last4 }}\n       </div>\n       </ion-col>\n       </ion-row>\n       </div>\n     </ion-item>\n    </ion-list>\n\n    <button ion-item (click)="showEnterPayment()" class="height80 borderBottom" no-lines>\n		Add Payment Method\n    </button>\n </div> \n\n</ion-content>\n<ion-footer *ngIf="allok">\n<button ion-button full (click)="doConfirm()" color="secondary" style="font-weight:bold!important">CONFIRM</button>\n</ion-footer>'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/epay/epay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EpayPage);
    return EpayPage;
}());

//# sourceMappingURL=epay.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, alertCtrl, loadingCtrl, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.connect = connect;
        this.concern = {
            name: '',
            contact: '',
            concern: ''
        };
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
    };
    FeedbackPage.prototype.showOk = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: 'Your feedback has been sent',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    FeedbackPage.prototype.dosubmit = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'zs_feedback.php?reg=' + JSON.stringify(this.concern);
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loading.dismiss();
            that.showOk();
        }, function (err) {
            loading.dismiss();
        });
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/feedback/feedback.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center >\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">FEEDBACK</div>\n		<ion-grid no-padding>\n			<ion-row style="margin-bottom:12px">\n			   <ion-col col-1>&nbsp;</ion-col>\n 			   <ion-col col-3><img src="./assets/img/support2.jpg"></ion-col>\n			   <ion-col col-1>&nbsp;</ion-col>\n 			   <ion-col col-6><p>Your satisfaction is important to us!</p><p>Please let us know your concern.  We\'re here to help</ion-col>\n   <ion-col col-1>&nbsp;</ion-col>\n 			\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Your Name</ion-label>\n						<ion-input type="text" [(ngModel)]="concern.name"></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Best Contact</ion-label>\n						<ion-input type="text" [(ngModel)]="concern.contact"></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label stacked>Your Concern</ion-label>\n						<ion-textarea [(ngModel)]="concern.info" rows="4"></ion-textarea>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n <ion-row>\n   <ion-col center>\n<p>You can click <span style="color:dodgerblue"><u>HERE</u></span> to close the on-screen keyboard</p>\n   </ion-col>\n </ion-row>\n		</ion-grid>\n</ion-content>\n<ion-footer>\n<button ion-button full (click)="dosubmit()" color="secondary" style="font-weight:bold!important">SEND</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementPage = /** @class */ (function () {
    function ManagementPage(navCtrl, navParams, connect, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.event = 0;
        this.events = [];
        this.hist = [];
        this.events = [];
        this.event = 0;
    }
    ManagementPage.prototype.ionViewDidLoad = function () {
        this.showEvents();
    };
    ManagementPage.prototype.showEvents = function () {
        var that = this;
        var url = 'zs_eventrep.php?id=' + this.event + '&rnd=' + Math.random();
        this.connect.getList(url).subscribe(function (data) {
            that.events = data.events;
            that.hist = data.hist;
        }, function (err) {
            that.connect.logError(err);
        });
    };
    ManagementPage.prototype.eventChange = function () {
        console.log('vent iis now ' + this.event);
        this.showEvents();
    };
    ManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-management',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/management/management.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EVENT PAYMENTS</div>\n\n\n<ion-item>\n                           <ion-label color="primary" floating>Event</ion-label>\n				<ion-select [(ngModel)]="event" popover  (ionChange)="eventChange()" >\n				<ion-option *ngFor="let e of events" [value]="e.id">{{e.name}}</ion-option>\n				</ion-select>\n				</ion-item>\n\n<ion-grid text-wrap>\n<ion-item style="background-color:black; color:white"><ion-row>\n<ion-col col-2>\nDate\n</ion-col>\n<ion-col col-7>\nPaid By</ion-col>\n<ion-col col-3 text-right>Amount</ion-col></ion-row></ion-item>\n<ion-item *ngFor="let h of hist; let i = index" [ngClass]="(i % 2 == 0) ? \'odd\' : \'even\'">\n<ion-row>\n<ion-col col-2><p>{{ h.date }}</p></ion-col>\n<ion-col col-7><small>{{ h.who }}<br>{{ h.desc }}</small></ion-col>\n<ion-col col-3 text-right>{{  h.amount}}</ion-col>\n</ion-row>\n</ion-item>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/management/management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ManagementPage);
    return ManagementPage;
}());

//# sourceMappingURL=management.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_players_players__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_indoor_indoor__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_teams_teams__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_socialupload_socialupload__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myprofiles_myprofiles__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_enter_credit_card_enter_credit_card__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_new_new__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_newprof_newprof__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_management_management__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_past_past__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_message_message__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_teamplayers_teamplayers__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_sponsor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_info_info__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_epay_epay__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_history_history__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_stripe__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_onesignal__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_players_players__["a" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_indoor_indoor__["a" /* IndoorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_epay_epay__["a" /* EpayPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofiles_myprofiles__["a" /* MyprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_newprof_newprof__["a" /* NewprofPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_past_past__["a" /* PastPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enter-credit-card/enter-credit-card.module#EnterCreditCardPageModule', name: 'EnterCreditCardPage', segment: 'enter-credit-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell/sell.module#SellPageModule', name: 'SellPage', segment: 'sell', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamfixtures/teamfixtures.module#TeamfixturesPageModule', name: 'TeamfixturesPage', segment: 'teamfixtures', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamnews/teamnews.module#TeamnewsPageModule', name: 'TeamnewsPage', segment: 'teamnews', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_players_players__["a" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_newprof_newprof__["a" /* NewprofPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_past_past__["a" /* PastPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_indoor_indoor__["a" /* IndoorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofiles_myprofiles__["a" /* MyprofilesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_epay_epay__["a" /* EpayPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_31__providers_connect__["a" /* Connect */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterCreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //https://ionicframework.com/docs/native/stripe/
var EnterCreditCardPage = /** @class */ (function () {
    function EnterCreditCardPage(navCtrl, navParams, view, connect, zone, stripe, cdr, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.connect = connect;
        this.zone = zone;
        this.stripe = stripe;
        this.cdr = cdr;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cardNumber = "";
        this.cardExpiryMon = "";
        this.cardExpiryYr = "";
        this.cardCvc = "";
        this.errMessage = "";
        this.makeDefault = false;
        this.donealready = false;
        this.stripe_pub = '';
        this.stripe_pub = this.navParams.get('stripe_pub');
        this.stripe.setPublishableKey(this.stripe_pub);
    }
    EnterCreditCardPage.prototype.getToken = function () {
        var _this = this;
        if (!this.donealready) {
            this.donealready = true;
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader_1.present();
            if (this.cardExpiryMon.length < 2)
                this.cardExpiryMon = '0' + this.cardExpiryMon;
            var card = {
                number: this.cardNumber,
                expMonth: this.cardExpiryMon.substr(0, 2),
                expYear: 20 + this.cardExpiryYr.substr(0, 2),
                cvc: this.cardCvc
            };
            var def;
            if (this.makeDefault) {
                def = 1;
            }
            else {
                def = 0;
            }
            var that_1 = this;
            this.stripe.createCardToken(card)
                .then(function (token) {
                var url = 'zs_newcc.php?tag=' + window.localStorage.getItem('myac') + '&token=' + JSON.stringify(token) + '&dflt=' + def;
                //     alert(url);
                _this.connect.getList(url).subscribe(function (data) {
                    that_1.zone.run(function () {
                        setTimeout(function () {
                            loader_1.dismiss();
                            that_1.view.dismiss();
                        }, 200);
                        that_1.cdr.markForCheck();
                    });
                }, function (err) {
                    _this.connect.logError(err);
                    that_1.zone.run(function () {
                        setTimeout(function () {
                            loader_1.dismiss();
                            that_1.view.dismiss();
                        }, 200);
                        that_1.cdr.markForCheck();
                    });
                });
            })
                .catch(function (error) {
                loader_1.dismiss();
                that_1.errMessage = error;
                that_1.donealready = false;
            });
        }
    };
    EnterCreditCardPage.prototype.ionViewDidLoad = function () {
    };
    EnterCreditCardPage.prototype.closeme = function () {
        this.view.dismiss();
    };
    EnterCreditCardPage.prototype.showAlert = function (msg) {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'error',
            subTitle: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    EnterCreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enter-credit-card',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/enter-credit-card/enter-credit-card.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title text-center>Payment Method</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="backgroundGrey">\n    <div class="height20"></div>\n    <ion-card color="light" class="maxWidth480">\n      <ion-card-header class="menuBackGroundTwo" padding-bottom>\n        <ion-fab top center>\n          <ion-icon ion-fab ios="ios-card" md="md-card" style="font-size:30px; background-color:#818e9b; border-radius: 5rem; border: 2px solid #e0e0e0;"></ion-icon>\n        </ion-fab>\n        <ion-card-title text-center style="padding-top:30px">\n            <h3 class="textWhite">Credit or Debit Card</h3>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content no-padding>\n        <ion-grid padding-top>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Card</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardNumber" maxlength="16" clearInput="false" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Expiry Month</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardExpiryMon"  maxlength="2"  clearInput="false" required></ion-input> \n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Expiry Year</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardExpiryYr"  maxlength="2"  clearInput="false" required></ion-input>  \n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>CVC</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardCvc" maxlength="4" clearInput="false" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col padding class="error" text-wrap *ngIf="errMessage.length">\n              <p>{{ errMessage }}</p>\n            </ion-col>\n          </ion-row>\n  \n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n<ion-footer>\n              <button ion-button full (click)="getToken()" color="secondary">Submit</button>\n</ion-footer>\n  '/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/enter-credit-card/enter-credit-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EnterCreditCardPage);
    return EnterCreditCardPage;
}());

//# sourceMappingURL=enter-credit-card.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connect = /** @class */ (function () {
    function Connect(http) {
        this.http = http;
        this.server_url = 'http://theparcelpeople2.com.au/catalogue/server/';
        //   private server_url: string = 'http://pikcup.com.au/test/';
        this.server2 = 'http://theparcelpeople2.com.au/catalogue/server/';
    }
    Connect.prototype.PostQuery = function (object, parameter) {
        return this.http.post(this.server_url + object, parameter).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList = function (object) {
        return this.http.get(this.server_url + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList2 = function (object) {
        return this.http.get(this.server2 + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Connect.prototype.getServerUrl = function () {
        return this.server_url;
    };
    Connect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], Connect);
    return Connect;
}());

//# sourceMappingURL=connect.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map