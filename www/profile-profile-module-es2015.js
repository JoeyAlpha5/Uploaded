(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <ion-content >\n  \n  \n  \n  <!---upload button-->\n    <div id='progressDiv'>\n        <div id='Loader'></div>\n    </div>\n  \n    <div id=\"content\" *ngFor='let profile of ( userProfile | async)'>\n\n        <div id=\"bannerPlaceholder\"  *ngIf=\"profile.cover == undefined\">\n        </div>\n\n        <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover != undefined\" [ngStyle]=\"{'background-image': 'url(https://uploadedstream.storage.googleapis.com/' + profile.cover+ ')'}\">\n        </div>\n  \n        <div id='profileBlock'>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"><div  id='dp' [ngStyle]=\"{ 'background-image': 'url(https://uploadedstream.storage.googleapis.com/'+profile.image+')'}\" ></div></div></div>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"><div *ngIf=\"profile.image == undefined\" id='dp'><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"profile.image == undefined\"></ion-icon>  </div></div></div>\n            <p id='username'>{{ profile.username }} </p>\n            <!--<p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>-->\n            <p id='bio'>{{ profile.bio }}</p>\n            <span *ngIf=\"profile.website != '' \" (click)=\"openWebsite(profile.website)\" id=\"link\"><ion-icon name=\"musical-notes\" id=\"globe\"></ion-icon><!--{{ profile.website }}--></span>\n            <span id=\"location\" *ngIf=\"profile.location != '' \" ><ion-icon name=\"pin\" id=\"globe\"></ion-icon>{{ profile.location }}</span>\n            <p id='Following'> <span (click)=\"follow(profile.username,1)\"><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span (click)=\"follow(profile.username,0)\"><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n         <div id=\"followDiv\" *ngIf=\"following == false\"><p id='followBtn' (click)=\"Follow(profile.id,'Follow')\">Follow</p>   <ion-icon name=\"mail\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</ion-icon></div>\n        <div id=\"followDiv\" *ngIf=\"following == true\"><p id='followBtn' (click)=\"Follow(profile.id,'Unfollow')\">Unfollow</p> <ion-icon name=\"mail\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</ion-icon></div>\n        \n  \n        <div id='uploadedHeading'><span>Playlisted</span>  <span>Reposts</span> </div>\n        <ion-slides>\n            <ion-slide id=\"postCont\"> \n              <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                <div id=\"playlist\" *ngIf=\"item.playlisted == true\">\n                  <video class=\"searchVids\" poster=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480,du_10/{{item.post_file}}.png\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n                    <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480,du_10/{{item.post_file}}.mp4\" type=\"video/mp4\">\n                  </video>\n                  <!-- <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                    <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                  </div> -->\n                </div> \n              </div>\n            </ion-slide>\n\n            <ion-slide id=\"tagsCont\">\n                <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                    <div id=\"playlist\" *ngIf=\"item.reposted == true\"  [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + item.post_file + ')'}\" >\n                      <!-- <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                        <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                      </div> -->\n                    </div> \n                  </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n   \n  </ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 70px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\ndiv#followDiv {\n  width: 100%;\n  height: 35px;\n}\n#Following {\n  height: 28px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\ndiv#uploadedHeading span {\n  width: 50%;\n  float: left;\n  border-right: 1px solid #c7c6c6;\n}\n#postCont {\n  display: block;\n}\ndiv#playlists:empty {\n  display: none;\n}\np#followBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 80px;\n  height: 24px;\n  background: orange;\n  color: white;\n  padding-top: 3px;\n  border-radius: 7px;\n  cursor: pointer;\n  float: left;\n  margin-left: 6px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n#ufollowBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: #F44336;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 13px;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\nion-icon#messageBtn {\n  font-size: 22px;\n  float: left;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n#profileName {\n  font-size: 15px;\n  margin-top: 5px;\n  text-align: -webkit-center;\n}\np#messageBtn {\n  text-decoration: underline;\n  color: gray;\n  margin-bottom: 17px;\n  cursor: pointer;\n}\n#tagsCont {\n  display: block;\n}\ndiv#playlists {\n  width: 33%;\n  height: auto;\n  padding-bottom: 0px;\n  top: 0;\n  float: left;\n  left: 0;\n}\ndiv#playlists div#playlist {\n  width: 100%;\n  height: 115px;\n  background-size: cover !important;\n  left: 0;\n  background: black;\n}\nvideo.searchVids {\n  width: 100%;\n  height: 100%;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\nion-icon#profileIocn {\n  font-size: 80px;\n  color: white;\n}\n#link {\n  margin-left: 15px;\n  font-size: 12px;\n  text-decoration: none;\n  color: #FF9800;\n}\n#globe {\n  color: black;\n  font-size: 20px;\n}\nspan#location {\n  font-size: 12px;\n  margin-left: 15px;\n  color: #FF9800;\n}\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 120px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVQ7QUFDRjtBRExFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDQVA7RURDRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNFVDtBQUNGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNFSjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNHMUI7QURBQTtFQUNFLDBCQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0RKO0FETUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDSEY7QURPQTtFQUNFLGNBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTEY7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTkY7QURVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDUEY7QURVQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUEY7QURXQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNSRjtBRFdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ1RKO0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1ZGO0FEY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNYRjtBRGNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDWEY7QURlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNaRjtBRGdCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtBQ2JGO0FEZUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDYko7QURrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUZBQUE7RUFBQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIGRpdiNsb2FkZXJIb2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIGRpdiN2aWRlb1BsYWNlaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50e1xuICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xufVxuXG4jZHAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNzBweDtcblxuXG4gICNGb2xsb3dlcnN7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gICN1c2VybmFtZXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG59XG5cbmRpdiNmb2xsb3dEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jRm9sbG93aW5ne1xuICBoZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG59XG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcgc3BhbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzdjNmM2O1xufVxuXG5cbiNwb3N0Q29udHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdiNwbGF5bGlzdHM6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5wI2ZvbGxvd0J0biB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4jdWZvbGxvd0J0bntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbnAjYmlvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NDMxMzcyNTUpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbmlvbi1pY29uI21lc3NhZ2VCdG4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3Byb2ZpbGVOYW1le1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbnAjbWVzc2FnZUJ0biB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFnc0NvbnR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRvcDogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6IDA7XG5cblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgfVxufVxuXG52aWRlby5zZWFyY2hWaWRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNjaXJjbGV7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xpbmt7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiNnbG9iZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG5cbn1cblxuc3BhbiNsb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOjA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjs7XG5cbiAgc3BhbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEzN3B4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxufVxuXG4jb3V0ZXJDaXJjbGV7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbn1cblxuLy8gI2JvdHRvbUJhcntcbi8vICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDU3cHg7XG4vLyB9IiwiQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmRpdiNsb2FkZXJIb2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG5cbmRpdiN2aWRlb1BsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gIC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudCB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4jZHAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5kaXYjcHJvZmlsZUJsb2NrICNGb2xsb3dlcnMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI3VzZXJuYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjZm9sbG93RGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuI0ZvbGxvd2luZyB7XG4gIGhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jRm9sbG93aW5nIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcgc3BhbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzdjNmM2O1xufVxuXG4jcG9zdENvbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I3BsYXlsaXN0czplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnAjZm9sbG93QnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdWZvbGxvd0J0biB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG5wI1Bvc3RzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWljb24jbWVzc2FnZUJ0biB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jcHJvZmlsZU5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbnAjbWVzc2FnZUJ0biB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFnc0NvbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdG9wOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMDtcbn1cbmRpdiNwbGF5bGlzdHMgZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbnZpZGVvLnNlYXJjaFZpZHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcGxheWxpc3RQcmV2aWV3IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jY2lyY2xlIHtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiNnbG9iZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5zcGFuI2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5kaXYjYmFubmVyUGxhY2Vob2xkZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEzN3B4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuI291dGVyQ2lyY2xlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");








let ProfilePage = class ProfilePage {
    //profile_url = 'http://127.0.0.1:8000/users/users'
    constructor(iab, tabs, requests, statusBar, route, storage) {
        this.iab = iab;
        this.tabs = tabs;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.images_url = "https://res.cloudinary.com/uploaded/image/upload/v1567818053/";
        this.video_url = "https://res.cloudinary.com/uploaded/video/upload/v1567818053/";
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    ngOnInit() {
    }
    follow(username, num) {
        console.log(username, num);
        this.storage.set("profileUserName", username);
        this.storage.set("followingNum", num);
        this.route.navigate(['/home/tabs/following']);
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.tabs.bottom = true;
        // Put here the code you want to execute
        this.storage.get('mail').then((mail) => {
            console.log('Your email is', mail);
            // var profile_url =  'https://uploaded.herokuapp.com/users/users';
            if (mail == undefined) {
                this.route.navigate(['login']);
            }
            else {
                this.storage.get("user_id").then((val) => {
                    this.userProfile = this.requests.getUserProfile(this.profile_url, val, mail);
                    this.userProfile.subscribe(u => {
                        console.log(u);
                        this.following = u[0].already_following;
                    });
                    // this.userProfile.subscribe(profile => {
                    //   console.log("profile", profile);
                    //   this.renderProfile(profile);
                    // });
                    console.log("profile to get", val);
                    console.log("user's email", mail);
                    this.storage.get('userProfileEmail').then((userProfileEmail) => {
                        this.Playlists = this.requests.getProfilePlaylists(this.profile_url, userProfileEmail);
                    });
                });
            }
        });
    }
    Follow(user_id, fl) {
        this.storage.get('mail').then((mail) => {
            this.requests.Follow(this.profile_url, user_id, mail).subscribe(x => {
                console.log(fl);
                if (x == true) {
                    this.following = true;
                }
                else {
                    this.following = false;
                }
                // this.ionViewDidEnter();
            });
        });
    }
    Message(first_name, last_name, username, id) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    onDrag() {
        console.log("dragged");
    }
    openWebsite(website) {
        console.log(website);
        const browser = this.iab.create(website, '_system');
        browser.show();
    }
    viewUserFeed(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map