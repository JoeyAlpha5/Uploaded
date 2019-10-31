(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div id=\"Settings\">\n      <p (click)=\"showSettings()\">Edit profile</p>\n  </div>\n\n   <ion-icon name=\"settings\" id=\"settingsIcon\" (click)=\"notificationsPage()\"></ion-icon>\n\n  <div id=\"content\" *ngFor='let profile of ( results | async)'>\n\n    <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover == undefined\">\n    </div>\n\n    <div id=\"bannerPlaceholder\"*ngIf=\"profile.cover != undefined\"  [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.cover+ '.jpg)'}\">\n    </div>\n\n<!--    <div id=\"croppImageDiv\" *ngIf=\"myImage\">\n      <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myImage\" *ngIf=\"myImage\"></angular-cropper>\n      <p (click)=\"save()\">Save</p>\n    </div>-->\n\n      <div id='profileBlock'>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"> <div id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ></div> </div></div>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"> <div id='dp'></div> </div></div>\n          <p id='username'>{{ profile.username }} </p>\n          <!--<p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>-->\n          <p id='bio'>{{ profile.bio }}</p>\n          <a *ngIf=\"profile.website != '' \" href=\"{{ profile.website }}\" id=\"link\"><ion-icon name=\"globe\" id=\"globe\"></ion-icon> {{ profile.website }}</a>\n          <span id=\"location\"><ion-icon name=\"pin\" id=\"globe\"></ion-icon>{{ profile.location }}</span>\n          <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n      </div>\n        \n\n      <div id='uploadedHeading'>Uploaded playlists</div>\n      <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n        <div id=\"playlist\" *ngIf=\"item.playlisted == true\"  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n\n          <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n            <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n          </div>\n        </div> \n      </div>\n  </div>\n\n  <!--<div *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ><div>Edit</div></div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'><div>Edit</div></div><br>\n    <span>Username: </span><br>\n    <input type=\"text\" id=\"user_name\" value=\"{{ profile.username }}\"></ion-input><br><br>\n    <span>First Name: </span><br>\n    <input type=\"text\" id=\"first_name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n    <span>Last Name: </span><br>\n    <input type=\"text\" id=\"last_name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n    <span>Bio: </span><br>\n    <input type=\"text\" id=\"bioInput\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n    <ion-button (click)=\"updateProfile()\">Save</ion-button>\n  </div>-->\n\n  <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br>\n    <ion-card-header>\n      <ion-card-title>{{ profile.username }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br><br>\n      <span>First Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n      <span>Last Name: </span><br>\n      <ion-input type=\"text\" id=\"last_name\" placeholder=\"Add last name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n      <ion-button (click)=\"updateProfile()\">Save</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n <div id=\"Profileoverlay\" (click)=\"closeProfile()\"></div>\n\n <div id=\"closeMenu\" (click)=\"closeMenu()\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\n\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n\n#content {\n  text-align: -webkit-center;\n}\n\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  border-radius: 50%;\n  background-size: cover !important;\n  position: absolute;\n  z-index: 1;\n}\n\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\n\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n\ndiv#Settings {\n  position: absolute;\n  z-index: 99999;\n  right: 0px;\n  font-size: 13px;\n  margin-top: 113px;\n  margin-right: 10px;\n  color: black;\n}\n\nion-icon#settingsIcon {\n  position: absolute;\n  z-index: 99999;\n  right: 0;\n  margin-right: 10px;\n  color: white;\n  margin-top: 24px;\n  font-size: 23px;\n}\n\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 70px;\n}\n\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\n\n#Following {\n  height: 48px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\n\n#editProfile {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n  text-align: -webkit-center;\n  overflow: scroll;\n  display: none;\n  width: 300px;\n  height: 435px;\n  background: white;\n  border-radius: 7px;\n  margin-top: 17%;\n  text-align: left;\n}\n\n#editProfile #dp {\n  width: 100%;\n  height: 114px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 0 !important;\n}\n\n#editProfile #dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  padding-top: 29px;\n  border-radius: 0 !important;\n  padding-left: 15px;\n}\n\ndiv#Profileoverlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7607843137);\n  top: 0;\n  z-index: 9998;\n  text-align: -webkit-center;\n  display: none;\n}\n\ndiv#closeMenu {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  display: none;\n}\n\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 120px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\n\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n\n#link {\n  margin-left: 15px;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n#globe {\n  color: black;\n}\n\nspan#location {\n  font-size: 12px;\n  margin-left: 5px;\n  color: #FF9800;\n}\n\ndiv#croppImageDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  z-index: 999999;\n  top: 0;\n}\n\ndiv#croppImageDiv p {\n  color: white;\n  margin-top: 40px;\n  width: 100%;\n  height: 40px;\n}\n\ndiv#dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 50%;\n  padding-top: 29px;\n}\n\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\n\ndiv#profile input {\n  height: 31px;\n  border-radius: 5px;\n  border: 1px solid #9e9e9e38;\n  padding-left: 5px;\n  font-size: 13px;\n  width: 180px;\n}\n\ndiv#profile span {\n  color: gray;\n  font-size: 12px;\n  float: left;\n  margin-left: 62px;\n}\n\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 13px;\n}\n\n#bioInput {\n  height: 57px;\n}\n\nion-input#uploadDesc {\n  margin-left: 100px;\n  margin-top: 32px;\n  opacity: 0;\n}\n\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 8px;\n  float: left;\n}\n\n@media only screen and (max-height: 100px) {\n  #bottomBar {\n    display: none;\n  }\n}\n\ndiv#logoutBtn {\n  border: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  top: 0;\n  float: right;\n  margin-right: 7px;\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n#fileUpload {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  opacity: 0;\n}\n\n#progressDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5098039216);\n  text-align: -webkit-center;\n  padding-top: 50%;\n  display: none;\n}\n\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\n\ndiv#playlists div#playlist {\n  width: 32%;\n  height: 115px;\n  float: left;\n  margin-left: 1px;\n  background-size: cover !important;\n}\n\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\n\nspan#metric {\n  margin-left: 5px;\n}\n\nion-icon#message {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBRFBFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBREZFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNLMUI7O0FERkE7RUFDRSwwQkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDS0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUZBQUE7RUFBQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsY0FB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a0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJGOztBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDckJGOztBRHdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDckJGOztBRHVCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNyQko7O0FEMEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDdkJGOztBRDBCQTtFQUNFLGdCQUFBO0FDdkJGOztBRDJCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3hCRiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjTG9hZGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgZGl2I2xvYWRlckhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnR7XG4gIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI2NpcmNsZXtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbiNvdXRlckNpcmNsZXtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I1NldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxuaW9uLWljb24jc2V0dGluZ3NJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gICNGb2xsb3dlcnN7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gICN1c2VybmFtZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuXG4gIH1cblxufVxuXG4jRm9sbG93aW5ne1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG59XG5cblxuI2VkaXRQcm9maWxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDE3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAjZHB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMTRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG5cbiAgICBkaXZ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gICAgICBwYWRkaW5nLXRvcDogMjlweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuXG4gIH1cblxufVxuXG5cbmRpdiNQcm9maWxlb3ZlcmxheXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzYwNzg0MzEzNzI1NDkwMik7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5ODtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNjbG9zZU1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOjA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjs7XG5cbiAgc3BhbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEzN3B4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxufVxuXG4jbGlua3tcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZ2xvYmV7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiNsb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbmRpdiNjcm9wcEltYWdlRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDA7XG5cbiAgcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7IFxuICB9XG59XG5cbmRpdiNkcCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cblxuZGl2I3Byb2ZpbGUgaW5wdXQge1xuICBoZWlnaHQ6IDMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzllOWU5ZTM4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTgwcHg7XG59XG5cbmRpdiNwcm9maWxlIHNwYW4ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDpsZWZ0O1xuICBtYXJnaW4tbGVmdDo2MnB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jYmlvSW5wdXR7XG4gIGhlaWdodDo1N3B4O1xufVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NDMxMzcyNTUpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbiNwcm9maWxlTmFtZXtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDEwMHB4KSB7XG4gICNib3R0b21CYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuZGl2I2xvZ291dEJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cblxuI2ZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwcm9ncmVzc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwOTgwMzkyMTU2ODYyNzQpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgZGl2I3BsYXlsaXN0IHtcbiAgICB3aWR0aDogMzIlO1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuaW9uLWljb24jbWVzc2FnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbiIsImRpdiNMb2FkZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuZGl2I2xvYWRlckhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cblxuZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjaXJjbGUge1xuICB3aWR0aDogODZweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNvdXRlckNpcmNsZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNTZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiNzZXR0aW5nc0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjRm9sbG93ZXJzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5kaXYjcHJvZmlsZUJsb2NrICN1c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jRm9sbG93aW5nIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNGb2xsb3dpbmcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2VkaXRQcm9maWxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDE3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNlZGl0UHJvZmlsZSAjZHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4jZWRpdFByb2ZpbGUgI2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjUHJvZmlsZW92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NjA3ODQzMTM3KTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2Nsb3NlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTM3cHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2dsb2JlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5zcGFuI2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuZGl2I2Nyb3BwSW1hZ2VEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogMDtcbn1cbmRpdiNjcm9wcEltYWdlRGl2IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmRpdiNkcCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNwcm9maWxlIGlucHV0IHtcbiAgaGVpZ2h0OiAzMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWUzODtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG5kaXYjcHJvZmlsZSBzcGFuIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA2MnB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jYmlvSW5wdXQge1xuICBoZWlnaHQ6IDU3cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAxMDBweCkge1xuICAjYm90dG9tQmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwcm9ncmVzc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwOTgwMzkyMTYpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMiU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pY29uI21lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");











// import { AngularCropperjsComponent } from 'angular-cropperjs';
let Tab4Page = class Tab4Page {
    // @ViewChild('angularCropper',{static: false}) public angularCropper: AngularCropperjsComponent;
    // cropperOptions: any;
    // croppedImage = null;
    // myImage = null;
    // scaleValX = 1;
    // scaleValY = 1;
    constructor(tabs, loadingController, statusBar, actionSheetController, toastController, requests, storage, route) {
        this.tabs = tabs;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.requests = requests;
        this.storage = storage;
        this.route = route;
        this.displayLoading = false;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        //cropper options
        // this.cropperOptions = {
        //   dragMode: 'crop',
        //   aspectRatio: 3,
        //   autoCrop: true,
        //   movable: true,
        //   zoomable: false,
        //   scalable: false,
        //   autoCropArea: 1,
        // };
    }
    ngOnInit() {
    }
    // cropImage(image){
    //   this.myImage = 'https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+image+'.png';
    // }
    // //crop options
    // reset() {
    //   this.angularCropper.cropper.reset();
    // }
    // clear() {
    //   this.angularCropper.cropper.clear();
    // }
    // rotate() {
    //   this.angularCropper.cropper.rotate(90);
    // }
    // zoom(zoomIn: boolean) {
    //   let factor = zoomIn ? 0.1 : -0.1;
    //   this.angularCropper.cropper.zoom(factor);
    // }
    // scaleX() {
    //   this.scaleValX = this.scaleValX * -1;
    //   this.angularCropper.cropper.scaleX(this.scaleValX);
    // }
    // scaleY() {
    //   this.scaleValY = this.scaleValY * -1;
    //   this.angularCropper.cropper.scaleY(this.scaleValY);
    // }
    // move(x, y) {
    //   this.angularCropper.cropper.move(x, y);
    // }
    // downloadImage(data, filename = 'untitled.jpeg'){
    //   var a = document.createElement('a');
    //   a.href = data;
    //   a.download = filename;
    //   this.storage.get("mail").then((user_email)=>{
    //     let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,data.substring(23));
    //      upload.subscribe(x => {
    //        this.cropImage(x);
    //         this.ionViewDidEnter();
    //         console.log(x)
    //         this.displayLoading = false;
    //       });
    //     });
    //   // document.body.appendChild(a);
    //   // a.click();
    // }
    // save() {
    //     let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    //     this.croppedImage = croppedImgB64String;
    //     console.log(this.croppedImage);
    //     this.downloadImage(croppedImgB64String, 'my-canvas.jpeg');
    //     this.dataURLtoFile(croppedImgB64String, 'my-canvas.jpeg');
    // }
    // dataURLtoFile(dataurl, filename) {
    //   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //   while(n--){
    //       u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   let file  = new File([u8arr], filename, {type:mime});
    //   this.storage.get("mail").then((user_email)=>{
    //     let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,file);
    //     upload.subscribe(x => {
    //       this.cropImage(x);
    //        this.ionViewDidEnter();
    //        console.log(x)
    //        this.displayLoading = false;
    //        this.myImage = null;
    //     });
    //   });
    //   console.log(file);
    // }
    //
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "#fc8700";
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.changeIconColors();
        this.tabs.bottom = true;
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.results = this.requests.getProfile(profile_url, val);
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
                this.Playlists = this.requests.getProfilePlaylists(profile_url, val);
            }
        });
    }
    doRefresh(event) {
        console.log(event);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
            this.ionViewDidEnter();
        }, 2000);
    }
    Playlist(post_id) {
        this.presentActionSheet(post_id);
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    showSettings() {
        // $("#Settings").show();
        // $("#closeMenu").show();
        this.route.navigate(['/home/tabs/settings']);
    }
    closeMenu() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#closeMenu").hide();
    }
    editProfile() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show();
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show());
    }
    closeProfile() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").hide();
    }
    // file: File;
    // changeListener($event): void{
    //   this.file = $event.target.files[0];
    //   this.presentToast("File selected: "+ this.file.name);
    //   this.displayLoading = true;
    //   if(this.file == undefined){
    //     let message = "Please select file to upload";
    //     this.presentLoadingWithOptions(message)
    //     this.displayLoading = false;
    //   }else{
    //     this.storage.get("mail").then((user_email)=>{
    //       let upload = this.requests.UploadCoverImage(this.profile_url,user_email,this.file);
    //       this.presentLoadingWithOptions("Loading, please wait...");
    //       upload.subscribe(x => {
    //         this.cropImage(x);
    //          this.route.navigate(['/home/tabs/tab4']);
    //          console.log(x)
    //          this.displayLoading = false;
    //       });
    //     });
    //   }
    // }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    updateProfile() {
        let user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        let first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        let last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        let bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        // this.storage.get('mail').then((Email) =>{
        //   let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio,this.file); 
        //   update.subscribe(x => console.log(x) );
        //   this.closeProfile();
        //   this.ionViewDidEnter();
        // });
    }
    presentLoading(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Uploading ' + message + ', Please wait...',
                duration: 10000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    viewUserFeed(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
    notificationsPage() {
        this.route.navigate(['/home/tabs/notifications']);
    }
    //present share options
    presentActionSheet(post_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Post Actions',
                buttons: [
                    {
                        text: 'Delete',
                        icon: 'trash',
                        handler: () => {
                            console.log(post_id);
                            let profile_url = 'https://uploaded.herokuapp.com/users/users';
                            this.requests.deletePost(profile_url, post_id).subscribe();
                            this.ionViewDidEnter();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    //loading component
    presentLoadingWithOptions(Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 1000,
                message: Message,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map