(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifyme-notifyme-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifyme/notifyme.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifyme/notifyme.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n     <ion-icon name=\"arrow-back\" id=\"backBtn\" (click)=\"back()\"></ion-icon>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Push notifications: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"pushAll == true\" checked (ionChange)=\"enableAllNotifications($event)\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"pushAll == false\"  (ionChange)=\"enableAllNotifications($event)\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New like: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"like == false\" (ionChange)=\"updateNotification($event,'like', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"like == true\" checked (ionChange)=\"updateNotification($event,'like', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New follower: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"follow == false\" (ionChange)=\"updateNotification($event,'follow', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"follow == true\" checked (ionChange)=\"updateNotification($event,'follow', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New comment: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"comment == false\" (ionChange)=\"updateNotification($event,'comment', 'true')\"  color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"comment == true\" checked  (ionChange)=\"updateNotification($event,'comment', 'false')\"  color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New repost: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"repost == false\" (ionChange)=\"updateNotification($event,'repost', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"repost == true\" checked (ionChange)=\"updateNotification($event,'repost', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New upload: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"upload == false\" (ionChange)=\"updateNotification($event,'upload', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"upload == true\" checked (ionChange)=\"updateNotification($event,'upload', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">Tags: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"tag == false\" (ionChange)=\"updateNotification($event,'tag', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"tag == true\" checked (ionChange)=\"updateNotification($event,'tag', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">New app features: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"features == false\" (ionChange)=\"updateNotification($event,'features', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"features == true\" checked (ionChange)=\"updateNotification($event,'features', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"option\">\n    <ion-label id=\"label\">Direct messages: </ion-label>\n    <ion-toggle id=\"toggle\" *ngIf=\"dm == false\" (ionChange)=\"updateNotification($event,'dm', 'true')\" color=\"dark\"></ion-toggle>\n    <ion-toggle id=\"toggle\" *ngIf=\"dm == true\" checked (ionChange)=\"updateNotification($event,'dm', 'false')\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"bottom\"></div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notifyme/notifyme.module.ts":
/*!*********************************************!*\
  !*** ./src/app/notifyme/notifyme.module.ts ***!
  \*********************************************/
/*! exports provided: NotifymePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifymePageModule", function() { return NotifymePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifyme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyme.page */ "./src/app/notifyme/notifyme.page.ts");







const routes = [
    {
        path: '',
        component: _notifyme_page__WEBPACK_IMPORTED_MODULE_6__["NotifymePage"]
    }
];
let NotifymePageModule = class NotifymePageModule {
};
NotifymePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifyme_page__WEBPACK_IMPORTED_MODULE_6__["NotifymePage"]]
    })
], NotifymePageModule);



/***/ }),

/***/ "./src/app/notifyme/notifyme.page.scss":
/*!*********************************************!*\
  !*** ./src/app/notifyme/notifyme.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\ndiv.option #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n\n.option {\n  background: transparent !important;\n}\n\n#bottom {\n  width: 100%;\n  height: 50px;\n}\n\nion-icon#backBtn {\n  float: left;\n  margin-left: 15px;\n  margin-top: 3px;\n  font-size: 23px;\n}\n\nion-title.md.title-md.hydrated {\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbm90aWZ5bWUvbm90aWZ5bWUucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZnltZS9ub3RpZnltZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0NBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25vdGlmeW1lL25vdGlmeW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNvcHRpb25zICNsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICBkaXYub3B0aW9ucyAjbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICBkaXYub3B0aW9uICNsYWJlbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgaW9uLXRvZ2dsZSN0b2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIGRpdiNvcHRpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICB9XG5cbiAgLm9wdGlvbntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2JvdHRvbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuaW9uLWljb24jYmFja0J0biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRpdGxlLm1kLnRpdGxlLW1kLmh5ZHJhdGVkIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59IiwiZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmRpdi5vcHRpb24gI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmRpdiNvcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbi5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4jYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWljb24jYmFja0J0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10aXRsZS5tZC50aXRsZS1tZC5oeWRyYXRlZCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/notifyme/notifyme.page.ts":
/*!*******************************************!*\
  !*** ./src/app/notifyme/notifyme.page.ts ***!
  \*******************************************/
/*! exports provided: NotifymePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifymePage", function() { return NotifymePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");








let NotifymePage = class NotifymePage {
    constructor(storage, requests, toastController, route, platform, statusBar) {
        this.storage = storage;
        this.requests = requests;
        this.toastController = toastController;
        this.route = route;
        this.platform = platform;
        this.statusBar = statusBar;
        this.pushAll = false;
        this.like = false;
        this.follow = false;
        this.comment = false;
        this.repost = false;
        this.upload = false;
        this.features = false;
        this.dm = false;
        this.tag = false;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.route.navigate(['/home/tabs/notifications']);
        });
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/home/tabs/notifications']);
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.storage.get('current_userID').then((val) => {
            this.results = this.requests.getNotificationSettings(this.profile_url, val);
            this.results.subscribe(x => {
                console.log(x);
                this.like = x.like;
                this.follow = x.follow;
                this.comment = x.follow;
                this.repost = x.repost;
                this.upload = x.upload;
                this.tag = x.tag;
                this.dm = x.dm;
                this.features = x.features;
                this.pushAll = x.pushAll;
            });
        });
    }
    enableAllNotifications($event) {
        console.log($event.target.checked);
        if ($event.target.checked == true) {
            this.pushAll = true;
            this.like = true;
            this.follow = true;
            this.comment = true;
            this.repost = true;
            this.upload = true;
            this.features = true;
            this.dm = true;
            this.tag = true;
            this.storage.get('current_userID').then((val) => {
                this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allTrue");
                this.notification.subscribe(x => {
                });
            });
        }
        else {
            this.pushAll = false;
            this.like = false;
            this.follow = false;
            this.comment = false;
            this.repost = false;
            this.upload = false;
            this.features = false;
            this.dm = false;
            this.tag = false;
            this.storage.get('current_userID').then((val) => {
                this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allFalse");
                this.notification.subscribe(x => {
                    this.presentToast(x.Response);
                });
            });
        }
    }
    updateNotification($event, type, value) {
        this.storage.get('current_userID').then((val) => {
            this.updateNotifications = this.requests.UpdateIndividualNotifications(this.profile_url, val, type, value);
            this.updateNotifications.subscribe(x => {
                this.presentToast(x.Response);
            });
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
};
NotifymePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
NotifymePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifyme',
        template: __webpack_require__(/*! raw-loader!./notifyme.page.html */ "./node_modules/raw-loader/index.js!./src/app/notifyme/notifyme.page.html"),
        styles: [__webpack_require__(/*! ./notifyme.page.scss */ "./src/app/notifyme/notifyme.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])
], NotifymePage);



/***/ })

}]);
//# sourceMappingURL=notifyme-notifyme-module-es2015.js.map