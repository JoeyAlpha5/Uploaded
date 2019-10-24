(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <ion-content >\n  \n  \n  \n  <!---upload button-->\n    <div id='progressDiv'>\n        <div id='Loader'></div>\n    </div>\n  \n    <div id=\"content\" *ngFor='let profile of ( userProfile | async)'>\n\n\n        <div id=\"bannerPlaceholder\"  *ngIf=\"profile.cover == undefined\">\n        </div>\n\n        <div id=\"bannerPlaceholder\" *ngIf=\"profile.cover != undefined\" [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.cover+ '.jpg)'}\">\n        </div>\n  \n        <div id='profileBlock'>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"><div  id='dp' [ngStyle]=\"{ 'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+profile.image+'.jpg)'}\" ></div></div></div>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"><div *ngIf=\"profile.image == undefined\" id='dp'><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"profile.image == undefined\"></ion-icon>  </div></div></div>\n            <p id='username'>{{ profile.username }} </p>\n            <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n            <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n        <p id='bio'>{{ profile.bio }}</p>\n         <div id=\"followDiv\" *ngIf=\"profile.already_following == false\"><p id='followBtn' (click)=\"Follow(profile.id,'Follow')\">Follow</p></div>\n        <div id=\"followDiv\" *ngIf=\"profile.already_following == true\"><p id='followBtn' (click)=\"Follow(profile.id,'Unfollow')\">Unfollow</p></div>\n        <p *ngIf=\"profile.already_following == true\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</p>\n  \n        <div id='uploadedHeading'>Uploaded playlists</div>\n        <div id=\"playlists\" *ngFor='let item of ( Playlists | async)'>\n            <div id=\"playlist\" *ngIf=\"item.playlisted == true\" [ngStyle]=\"{ 'background': 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n    \n              <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\">\n                <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n              </div>\n            </div> \n        </div>\n    </div>\n   \n  </ion-content>"

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

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  background: transparent;\n  text-align: left;\n  margin-top: 44px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  margin-bottom: 5px;\n  font-size: 13px;\n  margin-left: 15px;\n}\ndiv#followDiv {\n  width: 100%;\n  height: 35px;\n}\n#Following {\n  height: 28px;\n  text-align: -webkit-center;\n  width: 100%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\np#followBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 80px;\n  height: 24px;\n  background: orange;\n  color: white;\n  padding-top: 3px;\n  border-radius: 7px;\n  cursor: pointer;\n  float: left;\n  margin-left: 6px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n#ufollowBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: #F44336;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n  margin-left: 15px;\n}\np#bio {\n  text-align: -webkit-center;\n  color: gray;\n  font-size: 13px;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n#profileName {\n  font-size: 15px;\n  margin-top: 5px;\n  text-align: -webkit-center;\n}\np#messageBtn {\n  text-decoration: underline;\n  color: gray;\n  margin-bottom: 17px;\n  cursor: pointer;\n}\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 32%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n  margin-left: 1px;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n  position: absolute;\n  z-index: 1;\n}\nion-icon#profileIocn {\n  font-size: 80px;\n  color: white;\n}\ndiv#bannerPlaceholder {\n  width: 100%;\n  height: 100px;\n  background-color: #c7c6c6 !important;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  top: 0;\n  background-position: center;\n}\ndiv#bannerPlaceholder span {\n  position: absolute;\n  margin-left: 137px;\n  margin-top: 32px;\n  color: gray;\n}\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVQ7QUFDRjtBRExFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDQVA7RURDRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNFVDtBQUNGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNFSjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNHMUI7QURBQTtFQUNFLDBCQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0RKO0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0pGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEU0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDTkY7QURTQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ05GO0FEWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNURjtBRFdFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNYRjtBRGNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNYRjtBRGVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0FDWkY7QURjRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNaSjtBRGlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgZGl2I2xvYWRlckhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnR7XG4gIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0NHB4O1xuXG5cbiAgI0ZvbGxvd2Vyc3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgI3VzZXJuYW1le1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbn1cblxuZGl2I2ZvbGxvd0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNGb2xsb3dpbmd7XG4gIGhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbn1cblxucCNmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuI3Vmb2xsb3dCdG57XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG5wI1Bvc3RzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA5MDE5NjA3ODQzMTM3MjU1KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG4jcHJvZmlsZU5hbWV7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxucCNtZXNzYWdlQnRuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gIGRpdiNwbGF5bGlzdCB7XG4gICAgd2lkdGg6IDMyJTtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogIDFweDtcbn1cbn1cblxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNjaXJjbGV7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5kaXYjYmFubmVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDowO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7O1xuXG4gIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbn1cblxuI291dGVyQ2lyY2xle1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNGRkMxMDcpLCB0bygjRkY1NzIyKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQzEwNywgI0ZGNTcyMik7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG59XG5cbi8vICNib3R0b21CYXJ7XG4vLyAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA1N3B4O1xuLy8gfSIsIkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5kaXYjbG9hZGVySG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuXG5kaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiN2aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAvKiBzY2FsZSB1cCB0byBoaWRlIHRoZSBlZGdlIGJsdXIgKi9cbn1cblxuI2NvbnRlbnQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0NHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjRm9sbG93ZXJzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5kaXYjcHJvZmlsZUJsb2NrICN1c2VybmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I2ZvbGxvd0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNGb2xsb3dpbmcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI0ZvbGxvd2luZyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5wI2ZvbGxvd0J0biB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3Vmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NCk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNwcm9maWxlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxucCNtZXNzYWdlQnRuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuZGl2I3BsYXlsaXN0cyBkaXYjcGxheWxpc3Qge1xuICB3aWR0aDogMzIlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG4jcGxheWxpc3RQcmV2aWV3IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jY2lyY2xlIHtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYjYmFubmVyUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuZGl2I2Jhbm5lclBsYWNlaG9sZGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxMzdweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbiNvdXRlckNpcmNsZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI0ZGQzEwNyksIHRvKCNGRjU3MjIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZDMTA3LCAjRkY1NzIyKTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

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
        this.images_url = "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
        this.video_url = "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.tabs.bottom = true;
        // Put here the code you want to execute
        this.storage.get('mail').then(function (mail) {
            console.log('Your email is', mail);
            // var profile_url =  'https://uploaded.herokuapp.com/users/users';
            if (mail == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.storage.get("user_id").then(function (val) {
                    _this.userProfile = _this.requests.getUserProfile(_this.profile_url, val, mail);
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
                _this.ionViewDidEnter();
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