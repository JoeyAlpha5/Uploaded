(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div id=\"Settings\">\n      <p (click)=\"editProfile()\">Edit profile</p>\n      <hr>\n      <p (click)=\"logout()\">Logout</p>\n  </div>\n\n\n  <div id=\"content\" *ngFor='let profile of ( results | async)'>\n\n    <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover == undefined\">\n      <span>Add cover photo</span>\n      <ion-input (change)=\"changeListener($event)\" placeholder=\"Upload Cover Image\" type=\"file\" accept=\"image/*\" id=\"uploadDesc\"></ion-input>\n    </div>\n\n    <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover != undefined\" [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.cover+ '.jpg)'}\">\n      <ion-input (change)=\"changeListener($event)\" placeholder=\"Upload Cover Image\" type=\"file\" accept=\"image/*\" id=\"uploadDesc\"></ion-input>\n    </div>\n\n\n\n      <div id='profileBlock'>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"> <div id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ></div> </div></div>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"> <div id='dp'></div> </div></div>\n          <p id='username'>{{ profile.username }} </p>\n          <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n          <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n      </div>\n        <p id='bio'>{{ profile.bio }}</p>\n\n      <div id='uploadedHeading'>Uploaded playlists</div>\n      <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n        <div id=\"playlist\" *ngIf=\"item.playlisted == true\"  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n\n          <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n            <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n          </div>\n        </div> \n      </div>\n  </div>\n\n  <!--<div *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ><div>Edit</div></div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'><div>Edit</div></div><br>\n    <span>Username: </span><br>\n    <input type=\"text\" id=\"user_name\" value=\"{{ profile.username }}\"></ion-input><br><br>\n    <span>First Name: </span><br>\n    <input type=\"text\" id=\"first_name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n    <span>Last Name: </span><br>\n    <input type=\"text\" id=\"last_name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n    <span>Bio: </span><br>\n    <input type=\"text\" id=\"bioInput\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n    <ion-button (click)=\"updateProfile()\">Save</ion-button>\n  </div>-->\n\n  <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br>\n    <ion-card-header>\n      <ion-card-title>{{ profile.username }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br><br>\n      <span>First Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n      <span>Last Name: </span><br>\n      <ion-input type=\"text\" id=\"last_name\" placeholder=\"Add last name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n      <ion-button (click)=\"updateProfile()\">Save</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n <div id=\"Profileoverlay\" (click)=\"closeProfile()\"></div>\n\n <div id=\"closeMenu\" (click)=\"closeMenu()\"></div>\n</ion-content>"

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

module.exports = "div#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\n\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n\n#content {\n  text-align: -webkit-center;\n}\n\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  border-radius: 50%;\n  background-size: cover !important;\n  position: absolute;\n  z-index: 1;\n}\n\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\n\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n\np#settings {\n  float: right;\n  margin-right: 30px;\n  font-size: 13px;\n  cursor: pointer;\n}\n\ndiv#Settings {\n  width: 100px;\n  height: 102px;\n  float: right;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  top: 0;\n  z-index: 99999;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px 1px rgba(158, 158, 158, 0.53);\n  padding-top: 8px;\n  display: none;\n}\n\ndiv#Settings p {\n  font-size: 13px;\n  text-align: center;\n}\n\ndiv#Settings hr {\n  border: 1px dotted rgba(128, 128, 128, 0.05);\n  height: 0;\n}\n\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 44px;\n}\n\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\n\n#Following {\n  height: 48px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\n\n#editProfile {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n  text-align: -webkit-center;\n  overflow: scroll;\n  display: none;\n  width: 300px;\n  height: 435px;\n  background: white;\n  border-radius: 7px;\n  margin-top: 17%;\n  text-align: left;\n}\n\n#editProfile #dp {\n  width: 100%;\n  height: 114px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 0 !important;\n}\n\n#editProfile #dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  padding-top: 29px;\n  border-radius: 0 !important;\n  padding-left: 15px;\n}\n\ndiv#Profileoverlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7607843137);\n  top: 0;\n  z-index: 9998;\n  text-align: -webkit-center;\n  display: none;\n}\n\ndiv#closeMenu {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  display: none;\n}\n\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 100px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n}\n\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n\ndiv#dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 50%;\n  padding-top: 29px;\n}\n\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\n\ndiv#profile input {\n  height: 31px;\n  border-radius: 5px;\n  border: 1px solid #9e9e9e38;\n  padding-left: 5px;\n  font-size: 13px;\n  width: 180px;\n}\n\ndiv#profile span {\n  color: gray;\n  font-size: 12px;\n  float: left;\n  margin-left: 62px;\n}\n\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 13px;\n}\n\n#bioInput {\n  height: 57px;\n}\n\nion-input#uploadDesc {\n  margin-left: 100px;\n  margin-top: 32px;\n  opacity: 0;\n}\n\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 8px;\n  float: left;\n}\n\n@media only screen and (max-height: 100px) {\n  #bottomBar {\n    display: none;\n  }\n}\n\ndiv#logoutBtn {\n  border: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  top: 0;\n  float: right;\n  margin-right: 7px;\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n#fileUpload {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  opacity: 0;\n}\n\n#progressDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5098039216);\n  text-align: -webkit-center;\n  padding-top: 50%;\n  display: none;\n}\n\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\n\ndiv#playlists div#playlist {\n  width: 32%;\n  height: 115px;\n  float: left;\n  margin-left: 1px;\n  background-size: cover !important;\n}\n\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\n\nspan#metric {\n  margin-left: 5px;\n}\n\nion-icon#message {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBRFBFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBREZFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNLMUI7O0FERkE7RUFDRSwwQkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDS0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUZBQUE7RUFBQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxrQkFB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RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ25CRjs7QURzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNuQkY7O0FEcUJFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ25CSjs7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7O0FEeUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDdEJGIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNMb2FkZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICBkaXYjbG9hZGVySG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICBkaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudHtcbiAgdGV4dC1hbGlnbjotd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4jY2lyY2xle1xuICB3aWR0aDogODZweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cblxuI291dGVyQ2lyY2xle1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNGRkMxMDcpLCB0bygjRkY1NzIyKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQzEwNywgI0ZGNTcyMik7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5wI3NldHRpbmdzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYjU2V0dGluZ3Mge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuNTMpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjU2V0dGluZ3MgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYjU2V0dGluZ3MgaHIge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA1KTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNDRweDtcblxuICAjRm9sbG93ZXJze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAjdXNlcm5hbWV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cblxuICB9XG5cbn1cblxuI0ZvbGxvd2luZ3tcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxufVxuXG5cbiNlZGl0UHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgI2Rwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTE0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuXG4gICAgZGl2e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAgICAgcGFkZGluZy10b3A6IDI5cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICB9XG5cbn1cblxuXG5kaXYjUHJvZmlsZW92ZXJsYXl7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc2MDc4NDMxMzcyNTQ5MDIpO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjY2xvc2VNZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjYmFubmVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDowO1xuXG4gIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbn1cblxuZGl2I2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OmxlZnQ7XG4gIG1hcmdpbi1sZWZ0OjYycHg7XG59XG5cbnAjYmlvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNiaW9JbnB1dHtcbiAgaGVpZ2h0OjU3cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0MzEzNzI1NSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuI3Byb2ZpbGVOYW1le1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMTAwcHgpIHtcbiAgI2JvdHRvbUJhcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuXG4jZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3Byb2dyZXNzRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTA5ODAzOTIxNTY4NjI3NCk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAzMiU7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbn1cblxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuaW9uLWljb24jbWVzc2FnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbiIsImRpdiNMb2FkZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuZGl2I2xvYWRlckhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cblxuZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjaXJjbGUge1xuICB3aWR0aDogODZweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNvdXRlckNpcmNsZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbnAjc2V0dGluZ3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiNTZXR0aW5ncyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC41Myk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNTZXR0aW5ncyBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdiNTZXR0aW5ncyBociB7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDUpO1xuICBoZWlnaHQ6IDA7XG59XG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNDRweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI0ZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjdXNlcm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuI0ZvbGxvd2luZyB7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jRm9sbG93aW5nIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNlZGl0UHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4jZWRpdFByb2ZpbGUgI2RwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuI2VkaXRQcm9maWxlICNkcCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIHBhZGRpbmctdG9wOiAyOXB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuZGl2I1Byb2ZpbGVvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzYwNzg0MzEzNyk7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5ODtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNjbG9zZU1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOiAwO1xufVxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmRpdiNkcCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNwcm9maWxlIGlucHV0IHtcbiAgaGVpZ2h0OiAzMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWUzODtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG5kaXYjcHJvZmlsZSBzcGFuIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA2MnB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jYmlvSW5wdXQge1xuICBoZWlnaHQ6IDU3cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAxMDBweCkge1xuICAjYm90dG9tQmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwcm9ncmVzc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwOTgwMzkyMTYpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMiU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pY29uI21lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufSJdfQ== */"

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











let Tab4Page = class Tab4Page {
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
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    ngOnInit() {
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "#fc8700";
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
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
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
        this.displayLoading = true;
        if (this.file == undefined) {
            let message = "Please select file to upload";
            this.presentLoadingWithOptions(message);
            this.displayLoading = false;
        }
        else {
            this.storage.get("mail").then((user_email) => {
                let upload = this.requests.UploadCoverImage(this.profile_url, user_email, this.file);
                this.presentLoadingWithOptions("Uploading, please wait...");
                upload.subscribe(x => {
                    this.route.navigate(['/home/tabs/tab4']);
                    console.log(x);
                    this.displayLoading = false;
                });
            });
        }
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
    updateProfile() {
        let user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        let first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        let last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        let bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        this.storage.get('mail').then((Email) => {
            let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio, this.file);
            update.subscribe(x => console.log(x));
            this.closeProfile();
            this.ionViewDidEnter();
        });
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