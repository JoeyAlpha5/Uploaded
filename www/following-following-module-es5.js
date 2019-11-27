(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["following-following-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/following/following.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/following/following.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back\" id=\"backBtn\" (click)=\"back()\"></ion-icon>\n    <ion-title>{{ username }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n    <div id=\"followFollowing\"> <div>Following</div>  <div>Followers</div> </div>\n\n    <div id=\"slideContent\">\n\n      <ion-slides #slider [options]=\"slideOpts\">\n\n          <ion-slide id=\"followingSlide\"> \n              <div *ngFor='let item of ( results | async)'>\n                  <ion-item  id=\"searchItem\" (click)=\"viewProfile(item.id,item.email)\" *ngIf=\"item.follower == false\" button>\n                    <div id=\"dp\" [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + item.profile_image+ '.jpg)'}\"></div>\n                    <p>{{ item.first_name + \" \"  + item.last_name }}<br/><span id=\"searchUsername\">@{{ item.username }}</span> </p>\n                  </ion-item>\n                </div>\n          </ion-slide>\n\n\n          <ion-slide id=\"followingSlide\"> \n\n              <div *ngFor='let item of ( results | async)'>\n                  <ion-item  id=\"searchItem\" (click)=\"viewProfile(item.id,item.email)\" *ngIf=\"item.follower == true\" button>\n                    <div id=\"dp\" [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + item.profile_image+ '.jpg)'}\"></div>\n                    <p>{{ item.first_name + \" \"  + item.last_name }}<br/><span id=\"searchUsername\">@{{ item.username }}</span> </p>\n                  </ion-item>\n                </div>\n\n\n          </ion-slide>\n\n      </ion-slides>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/following/following.module.ts":
/*!***********************************************!*\
  !*** ./src/app/following/following.module.ts ***!
  \***********************************************/
/*! exports provided: FollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./following.page */ "./src/app/following/following.page.ts");







var routes = [
    {
        path: '',
        component: _following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]
    }
];
var FollowingPageModule = /** @class */ (function () {
    function FollowingPageModule() {
    }
    FollowingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_following_page__WEBPACK_IMPORTED_MODULE_6__["FollowingPage"]]
        })
    ], FollowingPageModule);
    return FollowingPageModule;
}());



/***/ }),

/***/ "./src/app/following/following.page.scss":
/*!***********************************************!*\
  !*** ./src/app/following/following.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon#backBtn {\n  float: left;\n  margin-left: 15px;\n  margin-top: 3px;\n  font-size: 23px;\n}\n\n#followFollowing div {\n  float: left;\n  width: 50%;\n  text-align: -webkit-center;\n}\n\ndiv#followFollowing {\n  width: 100%;\n  height: auto;\n}\n\ndiv#followFollowing {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding: 10px;\n  border-bottom: 1px solid #dedede;\n}\n\ndiv#slideContent {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  margin-top: 41px;\n}\n\n#followingSlide {\n  display: block;\n}\n\ndiv#dp {\n  width: 30px;\n  height: 30px;\n  background: #d6d6d6;\n  border-radius: 100px;\n  margin-right: 10px;\n  background-size: cover;\n}\n\nion-item#searchItem {\n  height: 56px;\n}\n\nspan#searchUsername {\n  font-size: 14px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvZm9sbG93aW5nL2ZvbGxvd2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGxvd2luZy9mb2xsb3dpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mb2xsb3dpbmcvZm9sbG93aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uI2JhY2tCdG4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cblxuICAjZm9sbG93Rm9sbG93aW5nIGRpdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuZGl2I2ZvbGxvd0ZvbGxvd2luZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdiNmb2xsb3dGb2xsb3dpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuXG5kaXYjc2xpZGVDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0MXB4O1xufVxuXG5cbiNmb2xsb3dpbmdTbGlkZXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdiNkcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1pdGVtI3NlYXJjaEl0ZW0ge1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbnNwYW4jc2VhcmNoVXNlcm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xufSIsImlvbi1pY29uI2JhY2tCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4jZm9sbG93Rm9sbG93aW5nIGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuZGl2I2ZvbGxvd0ZvbGxvd2luZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdiNmb2xsb3dGb2xsb3dpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuXG5kaXYjc2xpZGVDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0MXB4O1xufVxuXG4jZm9sbG93aW5nU2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I2RwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWl0ZW0jc2VhcmNoSXRlbSB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuc3BhbiNzZWFyY2hVc2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/following/following.page.ts":
/*!*********************************************!*\
  !*** ./src/app/following/following.page.ts ***!
  \*********************************************/
/*! exports provided: FollowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPage", function() { return FollowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var FollowingPage = /** @class */ (function () {
    function FollowingPage(location, tabs, requests, statusBar, route, storage) {
        this.location = location;
        this.tabs = tabs;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    FollowingPage.prototype.ngOnInit = function () {
    };
    FollowingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.storage.get("profileUserName").then(function (val) {
            _this.username = val;
            _this.results = _this.requests.getFollowing('https://uploaded.herokuapp.com/users/users', val);
            _this.results.subscribe();
        });
        this.storage.get("followingNum").then(function (val) {
            console.log(val);
            if (val == 1) {
                _this.slide.slideNext();
            }
        });
    };
    FollowingPage.prototype.viewProfile = function (user_id, email) {
        console.log("user", user_id);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    };
    FollowingPage.prototype.back = function () {
        // this.tabs.bottom = true;
        this.location.back();
    };
    FollowingPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"])
    ], FollowingPage.prototype, "slide", void 0);
    FollowingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! raw-loader!./following.page.html */ "./node_modules/raw-loader/index.js!./src/app/following/following.page.html"),
            styles: [__webpack_require__(/*! ./following.page.scss */ "./src/app/following/following.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], FollowingPage);
    return FollowingPage;
}());



/***/ })

}]);
//# sourceMappingURL=following-following-module-es5.js.map