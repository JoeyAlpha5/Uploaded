(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <ion-content >\n  \n  \n  \n  <!---upload button-->\n    <div id='progressDiv'>\n        <div id='Loader'></div>\n    </div>\n  \n    <div id=\"content\" *ngFor='let profile of ( userProfile | async)'>\n\n        <div id=\"bannerPlaceholder\"  *ngIf=\"profile.cover == undefined\">\n        </div>\n\n        <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover != undefined\" [ngStyle]=\"{'background-image': 'url(https://uploadedstream.storage.googleapis.com/' + profile.cover+ ')'}\">\n        </div>\n  \n        <div id='profileBlock'>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"><div  id='dp' [ngStyle]=\"{ 'background-image': 'url(https://uploadedstream.storage.googleapis.com/'+profile.image+')'}\" ></div></div></div>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"><div *ngIf=\"profile.image == undefined\" id='dp'><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"profile.image == undefined\"></ion-icon>  </div></div></div>\n            <p id='username'>{{ profile.username }} </p>\n            <!--<p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>-->\n            <p id='bio'>{{ profile.bio }}</p>\n            <a *ngIf=\"profile.website != '' \" href=\"{{ profile.website }}\" id=\"link\"><ion-icon name=\"globe\" id=\"globe\"></ion-icon> {{ profile.website }}</a>\n            <span id=\"location\" *ngIf=\"profile.location != '' \" ><ion-icon name=\"pin\" id=\"globe\"></ion-icon>{{ profile.location }}</span>\n            <p id='Following'> <span (click)=\"follow(profile.username,1)\"><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span (click)=\"follow(profile.username,0)\"><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n         <div id=\"followDiv\" *ngIf=\"following == false\"><p id='followBtn' (click)=\"Follow(profile.id,'Follow')\">Follow</p>   <ion-icon name=\"mail\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</ion-icon></div>\n        <div id=\"followDiv\" *ngIf=\"following == true\"><p id='followBtn' (click)=\"Follow(profile.id,'Unfollow')\">Unfollow</p> <ion-icon name=\"mail\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</ion-icon></div>\n        \n  \n        <div id='uploadedHeading'><span>Playlisted</span>  <span>Reposts</span> </div>\n        <ion-slides>\n            <ion-slide id=\"postCont\"> \n              <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                <div id=\"playlist\" *ngIf=\"item.playlisted == true\"  [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + item.post_file + ')'}\" >\n                  <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                    <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                  </div>\n                </div> \n              </div>\n            </ion-slide>\n\n            <ion-slide id=\"tagsCont\">\n                <div id=\"playlists\" *ngFor='let item of ( Playlists | async)' >\n                    <div id=\"playlist\" *ngIf=\"item.reposted == true\"  [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + item.post_file + ')'}\" >\n                      <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\" (press)=\"Playlist(item.id)\">\n                        <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n                      </div>\n                    </div> \n                  </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n   \n  </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
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
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 70px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\ndiv#followDiv {\n  width: 100%;\n  height: 35px;\n}\n#Following {\n  height: 28px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\ndiv#uploadedHeading span {\n  width: 50%;\n  float: left;\n  border-right: 1px solid #c7c6c6;\n}\n#postCont {\n  display: block;\n}\ndiv#playlists:empty {\n  display: none;\n}\np#followBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 80px;\n  height: 24px;\n  background: orange;\n  color: white;\n  padding-top: 3px;\n  border-radius: 7px;\n  cursor: pointer;\n  float: left;\n  margin-left: 6px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n#ufollowBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: #F44336;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\np#bio {\n  text-align: left;\n  margin-left: 15px;\n  color: gray;\n  font-size: 13px;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\nion-icon#messageBtn {\n  font-size: 22px;\n  float: left;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n#profileName {\n  font-size: 15px;\n  margin-top: 5px;\n  text-align: -webkit-center;\n}\np#messageBtn {\n  text-decoration: underline;\n  color: gray;\n  margin-bottom: 17px;\n  cursor: pointer;\n}\n#tagsCont {\n  display: block;\n}\ndiv#playlists {\n  width: 33%;\n  height: auto;\n  padding-bottom: 20px;\n  top: 0;\n  float: left;\n  left: 0;\n}\ndiv#playlists div#playlist {\n  width: 100%;\n  height: 115px;\n  background-size: cover !important;\n  left: 0;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\nion-icon#profileIocn {\n  font-size: 80px;\n  color: white;\n}\n#link {\n  margin-left: 15px;\n  font-size: 12px;\n  text-decoration: none;\n}\n#globe {\n  color: black;\n}\nspan#location {\n  font-size: 12px;\n  margin-left: 5px;\n  color: #FF9800;\n}\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 120px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVQ7QUFDRjtBRExFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDQVA7RURDRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNFVDtBQUNGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNFSjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNHMUI7QURBQTtFQUNFLDBCQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0RKO0FETUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDSEY7QURPQTtFQUNFLGNBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTEY7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTkY7QURVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDUEY7QURVQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUEY7QURXQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNSRjtBRFdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLE9BQUE7QUNUSjtBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWEY7QURjQTtFQUNFLGdCQUFBO0FDWEY7QURjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDWEY7QURjQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDWEY7QURjQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7QUNYRjtBRGNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1hGO0FEZUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7QUNaRjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICBkaXYjbG9hZGVySG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICBkaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudHtcbiAgdGV4dC1hbGlnbjotd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cblxuICAjRm9sbG93ZXJze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAjdXNlcm5hbWV7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxufVxuXG5kaXYjZm9sbG93RGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuI0ZvbGxvd2luZ3tcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHNwYW4ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M3YzZjNjtcbn1cblxuXG4jcG9zdENvbnR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYjcGxheWxpc3RzOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxucCNmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuI3Vmb2xsb3dCdG57XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG5wI1Bvc3RzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA5MDE5NjA3ODQzMTM3MjU1KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5pb24taWNvbiNtZXNzYWdlQnRuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNwcm9maWxlTmFtZXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG5wI21lc3NhZ2VCdG4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RhZ3NDb250e1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdG9wOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMDtcblxuXG4gIGRpdiNwbGF5bGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5cbiNwbGF5bGlzdFByZXZpZXd7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI2NpcmNsZXtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbGlua3tcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZ2xvYmV7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiNsb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cblxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6MDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOztcblxuICBzcGFue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTM3cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuXG59XG5cbiNvdXRlckNpcmNsZXtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcblxufVxuXG4vLyAjYm90dG9tQmFye1xuLy8gICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNTdweDtcbi8vIH0iLCJAa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuZGl2I2xvYWRlckhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cblxuZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbmRpdiNwcm9maWxlQmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI0ZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjdXNlcm5hbWUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNmb2xsb3dEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jRm9sbG93aW5nIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNGb2xsb3dpbmcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyBzcGFuIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjN2M2YzY7XG59XG5cbiNwb3N0Q29udCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYjcGxheWxpc3RzOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxucCNmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN1Zm9sbG93QnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbnAjYmlvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA5MDE5NjA3ODQpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taWNvbiNtZXNzYWdlQnRuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNwcm9maWxlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxucCNtZXNzYWdlQnRuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0YWdzQ29udCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdG9wOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMDtcbn1cbmRpdiNwbGF5bGlzdHMgZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbn1cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI2NpcmNsZSB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xpbmsge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnbG9iZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiNsb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbmRpdiNiYW5uZXJQbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5kaXYjYmFubmVyUGxhY2Vob2xkZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEzN3B4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuI291dGVyQ2lyY2xlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjRkZDMTA3KSwgdG8oI0ZGNTcyMikpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkMxMDcsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");







var ProfilePage = /** @class */ (function () {
    //profile_url = 'http://127.0.0.1:8000/users/users'
    function ProfilePage(tabs, requests, statusBar, route, storage) {
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
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.follow = function (username, num) {
        console.log(username, num);
        this.storage.set("profileUserName", username);
        this.storage.set("followingNum", num);
        this.route.navigate(['/home/tabs/following']);
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.tabs.bottom = true;
        // Put here the code you want to execute
        this.storage.get('mail').then(function (mail) {
            console.log('Your email is', mail);
            // var profile_url =  'https://uploaded.herokuapp.com/users/users';
            if (mail == undefined) {
                _this.route.navigate(['login']);
            }
            else {
                _this.storage.get("user_id").then(function (val) {
                    _this.userProfile = _this.requests.getUserProfile(_this.profile_url, val, mail);
                    _this.userProfile.subscribe(function (u) {
                        console.log(u);
                        _this.following = u[0].already_following;
                    });
                    // this.userProfile.subscribe(profile => {
                    //   console.log("profile", profile);
                    //   this.renderProfile(profile);
                    // });
                    console.log("profile to get", val);
                    console.log("user's email", mail);
                    _this.storage.get('userProfileEmail').then(function (userProfileEmail) {
                        _this.Playlists = _this.requests.getProfilePlaylists(_this.profile_url, userProfileEmail);
                    });
                });
            }
        });
    };
    ProfilePage.prototype.Follow = function (user_id, fl) {
        var _this = this;
        this.storage.get('mail').then(function (mail) {
            _this.requests.Follow(_this.profile_url, user_id, mail).subscribe(function (x) {
                console.log(fl);
                if (x == true) {
                    _this.following = true;
                }
                else {
                    _this.following = false;
                }
                // this.ionViewDidEnter();
            });
        });
    };
    ProfilePage.prototype.Message = function (first_name, last_name, username, id) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    };
    ProfilePage.prototype.viewPost = function (post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    };
    ProfilePage.prototype.onDrag = function () {
        console.log("dragged");
    };
    ProfilePage.prototype.viewUserFeed = function (username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map