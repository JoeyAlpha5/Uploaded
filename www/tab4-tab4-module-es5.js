(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div id=\"Settings\">\n      <p (click)=\"showSettings()\">Edit profile</p>\n  </div>\n\n   <ion-icon name=\"settings\" id=\"settingsIcon\" (click)=\"notificationsPage()\"></ion-icon>\n\n  <div id=\"content\" *ngFor='let profile of ( results | async)'>\n\n    <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover == undefined\">\n    </div>\n\n    <div id=\"bannerPlaceholder\"*ngIf=\"profile.cover != undefined\"  [ngStyle]=\"{'background-image': 'url(https://uploadedstream.storage.googleapis.com/' + profile.cover+ ')'}\">\n    </div>\n\n<!--    <div id=\"croppImageDiv\" *ngIf=\"myImage\">\n      <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myImage\" *ngIf=\"myImage\"></angular-cropper>\n      <p (click)=\"save()\">Save</p>\n    </div>-->\n\n      <div id='profileBlock'>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"> <div id='dp' [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + profile.image+ ')'}\" ></div> </div></div>\n          <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"> <div id='dp'></div> </div></div>\n          <p id='username'>{{ profile.username }} </p>\n          <!--<p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>-->\n          <p id='bio'>{{ profile.bio }}</p>\n          <a *ngIf=\"profile.website != '' \" href=\"{{ profile.website }}\" id=\"link\"><ion-icon name=\"globe\" id=\"globe\"></ion-icon> {{ profile.website }}</a>\n          <span id=\"location\"><ion-icon name=\"pin\" id=\"globe\"></ion-icon>{{ profile.location }}</span>\n          <p id='Following'> <span>Followers:<br/><font id=\"Followers\">{{ profile.followers }}</font></span>  <span>Following:<br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n      </div>\n        \n\n      <div id='uploadedHeading'><span>Playlisted</span>  <span>Reposts</span> </div>\n        <ion-slides>\n            <ion-slide id=\"postCont\"> \n              <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                <div id=\"playlist\" *ngIf=\"item.playlisted == true\"  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n                  <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                    <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                  </div>\n                </div> \n              </div>\n            </ion-slide>\n\n            <ion-slide id=\"tagsCont\">\n                <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                    <div id=\"playlist\" *ngIf=\"item.reposted == true\"  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n                      <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                        <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                      </div>\n                    </div> \n                  </div>\n            </ion-slide>\n        </ion-slides>\n\n\n\n  </div>\n\n  <!--<div *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ><div>Edit</div></div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'><div>Edit</div></div><br>\n    <span>Username: </span><br>\n    <input type=\"text\" id=\"user_name\" value=\"{{ profile.username }}\"></ion-input><br><br>\n    <span>First Name: </span><br>\n    <input type=\"text\" id=\"first_name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n    <span>Last Name: </span><br>\n    <input type=\"text\" id=\"last_name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n    <span>Bio: </span><br>\n    <input type=\"text\" id=\"bioInput\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n    <ion-button (click)=\"updateProfile()\">Save</ion-button>\n  </div>-->\n\n  <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Upload profile picture</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br>\n    <ion-card-header>\n      <ion-card-title>{{ profile.username }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br><br>\n      <span>First Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br><br>\n      <span>Last Name: </span><br>\n      <ion-input type=\"text\" id=\"last_name\" placeholder=\"Add last name\" value=\"{{ profile.last_name }}\"></ion-input><br><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br><br>\n      <ion-button (click)=\"updateProfile()\">Save</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n <div id=\"Profileoverlay\" (click)=\"closeProfile()\"></div>\n\n <div id=\"closeMenu\" (click)=\"closeMenu()\"></div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");






// import { AngularCropperjsComponent } from 'angular-cropperjs';

var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
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
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\nfont {\n  font-family: \"helveticaB\";\n}\np, span {\n  font-family: \"helvetica\" !important;\n}\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  border-radius: 50%;\n  background-size: cover !important;\n  position: absolute;\n  z-index: 1;\n}\n#tagsCont {\n  display: block;\n}\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\ndiv#Settings {\n  position: absolute;\n  z-index: 99999;\n  right: 0px;\n  font-size: 13px;\n  margin-top: 113px;\n  margin-right: 10px;\n  color: black;\n}\nion-icon#settingsIcon {\n  position: absolute;\n  z-index: 99999;\n  right: 0;\n  margin-right: 10px;\n  color: white;\n  margin-top: 24px;\n  font-size: 23px;\n}\ndiv#uploadedHeading span {\n  width: 50%;\n  float: left;\n  border-right: 1px solid #c7c6c6;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 70px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  margin-left: 15px;\n  font-family: \"helveticaB\" !important;\n}\n#Following {\n  height: 48px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\nfont#Followings {\n  font-size: 16px;\n}\n#editProfile {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n  text-align: -webkit-center;\n  overflow: scroll;\n  display: none;\n  width: 300px;\n  height: 435px;\n  background: white;\n  border-radius: 7px;\n  margin-top: 17%;\n  text-align: left;\n}\n#editProfile #dp {\n  width: 100%;\n  height: 114px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 0 !important;\n}\n#editProfile #dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  padding-top: 29px;\n  border-radius: 0 !important;\n  padding-left: 15px;\n}\ndiv#Profileoverlay {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7607843137);\n  top: 0;\n  z-index: 9998;\n  text-align: -webkit-center;\n  display: none;\n}\ndiv#closeMenu {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  display: none;\n}\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 120px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n#link {\n  margin-left: 15px;\n  font-size: 12px;\n  text-decoration: none;\n}\n#globe {\n  color: black;\n}\nspan#location {\n  font-size: 12px;\n  margin-left: 5px;\n  color: #FF9800;\n}\ndiv#croppImageDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  z-index: 999999;\n  top: 0;\n}\ndiv#croppImageDiv p {\n  color: white;\n  margin-top: 40px;\n  width: 100%;\n  height: 40px;\n}\ndiv#dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 50%;\n  padding-top: 29px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\ndiv#profile input {\n  height: 31px;\n  border-radius: 5px;\n  border: 1px solid #9e9e9e38;\n  padding-left: 5px;\n  font-size: 13px;\n  width: 180px;\n}\ndiv#profile span {\n  color: gray;\n  font-size: 12px;\n  float: left;\n  margin-left: 62px;\n}\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 13px;\n}\n#bioInput {\n  height: 57px;\n}\nion-input#uploadDesc {\n  margin-left: 100px;\n  margin-top: 32px;\n  opacity: 0;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 6px;\n  font-size: 15px;\n}\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 8px;\n  float: left;\n}\n@media only screen and (max-height: 100px) {\n  #bottomBar {\n    display: none;\n  }\n}\ndiv#logoutBtn {\n  border: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  top: 0;\n  float: right;\n  margin-right: 7px;\n  font-size: 12px;\n  margin-top: 3px;\n}\n#fileUpload {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  opacity: 0;\n}\n#progressDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5098039216);\n  text-align: -webkit-center;\n  padding-top: 50%;\n  display: none;\n}\ndiv#playlists {\n  width: 33%;\n  height: auto;\n  padding-bottom: 20px;\n  top: 0;\n  float: left;\n  left: 0;\n}\ndiv#playlists div#playlist {\n  width: 100%;\n  height: 115px;\n  background-size: cover !important;\n  left: 0;\n}\n#postCont {\n  display: block;\n}\ndiv#playlists:empty {\n  display: none;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\nion-icon#message {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0FGO0FESUE7RUFDRSx5QkFBQTtBQ0ZGO0FES0E7RUFDRSxtQ0FBQTtBQ0ZGO0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNGSjtBREtFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRFA7RURFRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNDVDtBQUNGO0FESkU7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNEUDtFREVFO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0NUO0FBQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUF3QixtQ0FBQTtBQ0UxQjtBRENBO0VBQ0UsMEJBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFB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QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmRjtBRG1CQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRG9CQTtFQUNFO0lBQ0UsYUFBQTtFQ2pCRjtBQUNGO0FEc0JBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDckJGO0FEd0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ3JCRjtBRHdCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxPQUFBO0FDdEJKO0FEMEJBO0VBQ0UsY0FBQTtBQ3ZCRjtBRDBCQTtFQUNFLGFBQUE7QUN2QkY7QUQwQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUN2QkY7QUQwQkE7RUFDRSxnQkFBQTtBQ3ZCRjtBRDJCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3hCRiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYSc7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5cblxuZm9udHtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbn1cblxucCwgc3BhbntcbiAgZm9udC1mYW1pbHk6J2hlbHZldGljYScgIWltcG9ydGFudDtcbn1cblxuZGl2I0xvYWRlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIGRpdiNsb2FkZXJIb2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIGRpdiN2aWRlb1BsYWNlaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50e1xuICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xufVxuXG4jZHAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiN0YWdzQ29udHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjaXJjbGV7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuXG4jb3V0ZXJDaXJjbGV7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNTZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5cbmlvbi1pY29uI3NldHRpbmdzSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHNwYW4ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M3YzZjNjtcbn1cblxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbiAgI0ZvbGxvd2Vyc3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgI3VzZXJuYW1le1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhQicgIWltcG9ydGFudDtcbiAgfVxuXG59XG5cbiNGb2xsb3dpbmd7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbn1cblxuZm9udCNGb2xsb3dpbmdzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jZWRpdFByb2ZpbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICNkcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcblxuICAgIGRpdntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICAgIHBhZGRpbmctdG9wOiAyOXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgfVxuXG59XG5cblxuZGl2I1Byb2ZpbGVvdmVybGF5e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NjA3ODQzMTM3MjU0OTAyKTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2Nsb3NlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6MDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOztcblxuICBzcGFue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTM3cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuXG59XG5cbiNsaW5re1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnbG9iZXtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5zcGFuI2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuZGl2I2Nyb3BwSW1hZ2VEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogMDtcblxuICBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDsgXG4gIH1cbn1cblxuZGl2I2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OmxlZnQ7XG4gIG1hcmdpbi1sZWZ0OjYycHg7XG59XG5cbnAjYmlvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG5cbiNiaW9JbnB1dHtcbiAgaGVpZ2h0OjU3cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0MzEzNzI1NSk7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuXG4jcHJvZmlsZU5hbWV7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAxMDBweCkge1xuICAjYm90dG9tQmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbmRpdiNsb2dvdXRCdG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5cbiNmaWxlVXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4jcHJvZ3Jlc3NEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MDk4MDM5MjE1Njg2Mjc0KTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0b3A6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiAwO1xuXG5cbiAgZGl2I3BsYXlsaXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbiNwb3N0Q29udHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdiNwbGF5bGlzdHM6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuaW9uLWljb24jbWVzc2FnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm8tUmVndWxhci50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiO1xufVxuXG5wLCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCIgIWltcG9ydGFudDtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5kaXYjbG9hZGVySG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuXG5kaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI3RhZ3NDb250IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjaXJjbGUge1xuICB3aWR0aDogODZweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNvdXRlckNpcmNsZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNTZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiNzZXR0aW5nc0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyBzcGFuIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjN2M2YzY7XG59XG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI0ZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjdXNlcm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG59XG5cbiNGb2xsb3dpbmcge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI0ZvbGxvd2luZyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5mb250I0ZvbGxvd2luZ3Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNlZGl0UHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4jZWRpdFByb2ZpbGUgI2RwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuI2VkaXRQcm9maWxlICNkcCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIHBhZGRpbmctdG9wOiAyOXB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuZGl2I1Byb2ZpbGVvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzYwNzg0MzEzNyk7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5ODtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNjbG9zZU1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5kaXYjYmFubmVyUGxhY2Vob2xkZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEzN3B4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuI2xpbmsge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnbG9iZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiNsb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbmRpdiNjcm9wcEltYWdlRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDA7XG59XG5kaXYjY3JvcHBJbWFnZURpdiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5kaXYjZHAgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmctdG9wOiAyOXB4O1xufVxuXG5wI1Bvc3RzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNjJweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuI2Jpb0lucHV0IHtcbiAgaGVpZ2h0OiA1N3B4O1xufVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NCk7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAxMDBweCkge1xuICAjYm90dG9tQmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwcm9ncmVzc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwOTgwMzkyMTYpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRvcDogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6IDA7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG59XG5cbiNwb3N0Q29udCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYjcGxheWxpc3RzOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWljb24jbWVzc2FnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");











// import { AngularCropperjsComponent } from 'angular-cropperjs';
var Tab4Page = /** @class */ (function () {
    // @ViewChild('angularCropper',{static: false}) public angularCropper: AngularCropperjsComponent;
    // cropperOptions: any;
    // croppedImage = null;
    // myImage = null;
    // scaleValX = 1;
    // scaleValY = 1;
    function Tab4Page(tabs, loadingController, statusBar, actionSheetController, toastController, requests, storage, route) {
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
    Tab4Page.prototype.ngOnInit = function () {
    };
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
    Tab4Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "#fc8700";
    };
    Tab4Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.changeIconColors();
        this.tabs.bottom = true;
        this.storage.get('mail').then(function (val) {
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                _this.route.navigate(['login']);
            }
            else {
                _this.results = _this.requests.getProfile(profile_url, val);
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
                _this.Playlists = _this.requests.getProfilePlaylists(profile_url, val);
            }
        });
    };
    Tab4Page.prototype.doRefresh = function (event) {
        var _this = this;
        console.log(event);
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
            _this.ionViewDidEnter();
        }, 2000);
    };
    Tab4Page.prototype.Playlist = function (post_id) {
        this.presentActionSheet(post_id);
    };
    Tab4Page.prototype.viewPost = function (post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    };
    Tab4Page.prototype.showSettings = function () {
        // $("#Settings").show();
        // $("#closeMenu").show();
        this.route.navigate(['/home/tabs/settings']);
    };
    Tab4Page.prototype.closeMenu = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#closeMenu").hide();
    };
    Tab4Page.prototype.editProfile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show();
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").show());
    };
    Tab4Page.prototype.closeProfile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Profileoverlay").hide();
    };
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
    Tab4Page.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.updateProfile = function () {
        var user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        var first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        var last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        var bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        // this.storage.get('mail').then((Email) =>{
        //   let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio,this.file); 
        //   update.subscribe(x => console.log(x) );
        //   this.closeProfile();
        //   this.ionViewDidEnter();
        // });
    };
    Tab4Page.prototype.presentLoading = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading ' + message + ', Please wait...',
                            duration: 10000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // const { role, data } = await loading.onDidDismiss();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.viewUserFeed = function (username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    };
    Tab4Page.prototype.notificationsPage = function () {
        this.route.navigate(['/home/tabs/notifications']);
    };
    //present share options
    Tab4Page.prototype.presentActionSheet = function (post_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Post Actions',
                            buttons: [
                                {
                                    text: 'Delete',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log(post_id);
                                        var profile_url = 'https://uploaded.herokuapp.com/users/users';
                                        _this.requests.deletePost(profile_url, post_id).subscribe();
                                        _this.ionViewDidEnter();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //loading component
    Tab4Page.prototype.presentLoadingWithOptions = function (Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 1000,
                            message: Message,
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab4Page.ctorParameters = function () { return [
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map