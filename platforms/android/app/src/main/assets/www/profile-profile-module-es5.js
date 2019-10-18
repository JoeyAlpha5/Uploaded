(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title id=\"profileName\" *ngFor='let profile of ( userProfile | async)'> \n          {{ profile.first_name }} {{ profile.last_name }}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <div id=\"videoPlaceholder\">\n\n  </div>\n  \n  <ion-content >\n  \n  \n  \n  <!---upload button-->\n    <div id='progressDiv'>\n        <div id='Loader'></div>\n    </div>\n  \n    <div id=\"content\" *ngFor='let profile of ( userProfile | async)'>\n  \n        <div id='profileBlock'>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image != undefined\"><div id=\"circle\"><div  id='dp' [ngStyle]=\"{ 'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+profile.image+'.jpg)'}\" ></div></div></div>\n             <div id=\"outerCircle\" (click)=\"viewUserFeed(profile.username)\" *ngIf=\"profile.image == undefined\"><div id=\"circle\"><div *ngIf=\"profile.image == undefined\" id='dp'><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"profile.image == undefined\"></ion-icon>  </div></div></div>\n            <p id='username'>{{ profile.username }} </p>\n            <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n            <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n        <p id='bio'>{{ profile.bio }}</p>\n        <p *ngIf=\"profile.already_following == false\" id='followBtn' (click)=\"Follow(profile.id,'Follow')\">Follow</p>\n        <p *ngIf=\"profile.already_following == true\" id='followBtn' (click)=\"Follow(profile.id,'Unfollow')\">Unfollow</p>\n        <p *ngIf=\"profile.already_following == true\" id='messageBtn' (click)=\"Message(profile.first_name, profile.last_name,profile.username,profile.id)\">Message</p>\n  \n        <div id='uploadedHeading'>Uploaded playlists</div>\n        <div id=\"playlists\" *ngFor='let item of ( Playlists | async)'>\n            <div id=\"playlist\" *ngIf=\"item.playlisted == true\" [ngStyle]=\"{ 'background': 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n    \n              <div id=\"playlistPreview\" (click)=\"viewPost(item.id)\">\n                <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n              </div>\n            </div> \n        </div>\n    </div>\n   \n  </ion-content>"

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

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 50%;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n}\n#Following {\n  height: 28px;\n  text-align: -webkit-center;\n  width: 100%;\n  padding-left: 27%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\np#followBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: orange;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\n#ufollowBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: #F44336;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n}\np#bio {\n  text-align: -webkit-center;\n  color: gray;\n  font-size: 13px;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n#profileName {\n  font-size: 15px;\n  margin-top: 5px;\n  text-align: -webkit-center;\n}\np#messageBtn {\n  text-decoration: underline;\n  color: gray;\n  margin-bottom: 17px;\n  cursor: pointer;\n}\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 32%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n  margin-left: 1px;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\n#circle {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  background: white;\n  padding-top: 3px;\n}\nion-icon#profileIocn {\n  font-size: 80px;\n  color: white;\n}\n#outerCircle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#FFC107), to(#FF5722));\n  background: linear-gradient(to right, #FFC107, #FF5722);\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVQ7QUFDRjtBRExFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDQVA7RURDRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNFVDtBQUNGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNFSjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNHMUI7QURBQTtFQUNFLDBCQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDR0Y7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHRjtBRERFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNHSjtBREFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FES0E7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRkY7QURJRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0pGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNMRjtBRFFBO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ05GO0FEVUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDUEY7QURVQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNWRjtBRFlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNaRjtBRGVBO0VBQ0UsZ0JBQUE7QUNaRjtBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNaRjtBRGdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsZ0JBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIGRpdiNsb2FkZXJIb2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIGRpdiN2aWRlb1BsYWNlaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50e1xuICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xufVxuXG4jZHAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAjRm9sbG93ZXJze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAjdXNlcm5hbWV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG5cblxuICB9XG5cbn1cblxuI0ZvbGxvd2luZ3tcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjclO1xuICBmb250LXNpemU6IDEzcHg7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbn1cblxucCNmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG5cbiN1Zm9sbG93QnRue1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbmRpdiN1cGxvYWRlZEhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA5MDE5NjA3ODQzMTM3MjU1KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG4jcHJvZmlsZU5hbWV7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxucCNtZXNzYWdlQnRuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gIGRpdiNwbGF5bGlzdCB7XG4gICAgd2lkdGg6IDMyJTtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogIDFweDtcbn1cbn1cblxuXG4jcGxheWxpc3RQcmV2aWV3e1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNjaXJjbGV7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuI291dGVyQ2lyY2xle1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQzEwNyAsICNGRjU3MjIpO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4vLyAjYm90dG9tQmFye1xuLy8gICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNTdweDtcbi8vIH0iLCJAa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuZGl2I2xvYWRlckhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cblxuZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI0ZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjdXNlcm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jRm9sbG93aW5nIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjclO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jRm9sbG93aW5nIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnAjZm9sbG93QnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuI3Vmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG5wI21lc3NhZ2VCdG4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMiU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNjaXJjbGUge1xuICB3aWR0aDogODZweDtcbiAgaGVpZ2h0OiA4NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jb3V0ZXJDaXJjbGUge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQzEwNywgI0ZGNTcyMik7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59Il19 */"

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