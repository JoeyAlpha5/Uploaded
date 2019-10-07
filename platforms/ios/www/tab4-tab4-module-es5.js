(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title id=\"profileName\" *ngFor='let profile of ( results| async)'> \n          {{ profile.first_name }} {{ profile.last_name }}\n      </ion-title>\n      <p id=\"settings\" (click)=\"showSettings()\">\n        Settings\n      </p>\n\n    </ion-toolbar>\n  </ion-header>\n  \n  <div id=\"videoPlaceholder\">\n\n  </div>\n\n<ion-content >\n\n  <div id=\"Settings\">\n      <p (click)=\"editProfile()\">Edit profile</p>\n      <hr>\n      <p (click)=\"logout()\">Logout</p>\n  </div>\n\n\n<!---upload button-->\n\n\n  <div id='progressDiv'>\n      <div id='Loader'></div>\n  </div>\n\n  <div id=\"content\" *ngFor='let profile of ( results | async)'>\n\n      <div id='profileBlock'>\n          <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(http://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ></div>\n          <div *ngIf=\"profile.image == undefined\" id='dp'></div>\n          <p id='username'>{{ profile.username }} </p>\n          <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n          <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n        <p id='bio'>{{ profile.bio }}</p>\n\n      <div id='uploadedHeading'>Uploaded playlists</div>\n      <div id=\"playlists\">\n        <div id=\"playlist\"  *ngFor='let item of ( Playlists | async)'  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n\n          <div id=\"playlistPreview\">\n            <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n          </div>\n        </div> \n      </div>\n  </div>\n <div id=\"bottomBar\"></div>\n\n <div id=\"editProfile\" *ngFor='let profile of ( results | async)'>\n    <div id=\"profile\">\n        <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ><div>Edit</div></div>\n        <div *ngIf=\"profile.image == undefined\" id='dp'><div>Edit</div></div><br>\n        <span>Username: </span><br>\n        <input type=\"text\" id=\"user_name\" value=\"{{ profile.username }}\" required><br><br>\n        <span>First Name: </span><br>\n        <input type=\"text\" id=\"first_name\" value=\"{{ profile.first_name }}\" required><br><br>\n        <span>Last Name: </span><br>\n        <input type=\"text\" id=\"last_name\" value=\"{{ profile.last_name }}\" required><br><br>\n        <span>Bio: </span><br>\n        <input type=\"text\" id=\"bioInput\" value=\"{{ profile.bio}}\" required><br><br>\n        <ion-button (click)=\"updateProfile()\">Save</ion-button>\n    </div>\n\n </div>\n\n <div id=\"closeMenu\" (click)=\"closeMenu()\"></div>\n</ion-content>"

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

module.exports = "div#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\n\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n\n#content {\n  text-align: -webkit-center;\n}\n\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  border-radius: 50%;\n  background-size: cover !important;\n}\n\np#settings {\n  float: right;\n  margin-right: 30px;\n  font-size: 13px;\n  cursor: pointer;\n}\n\ndiv#Settings {\n  width: 100px;\n  height: 102px;\n  float: right;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  top: 0;\n  z-index: 99999;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px 1px rgba(158, 158, 158, 0.53);\n  padding-top: 8px;\n  display: none;\n}\n\ndiv#Settings p {\n  font-size: 13px;\n  text-align: center;\n}\n\ndiv#Settings hr {\n  border: 1px dotted rgba(128, 128, 128, 0.05);\n  height: 0;\n}\n\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n}\n\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n}\n\n#Following {\n  height: 48px;\n  text-align: -webkit-center;\n  width: 100%;\n  padding-left: 27%;\n  font-size: 13px;\n}\n\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\n\ndiv#editProfile {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: #00000061;\n  top: 0;\n  z-index: 100;\n  text-align: -webkit-center;\n  display: none;\n}\n\ndiv#closeMenu {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  display: none;\n}\n\ndiv#profile {\n  width: 300px;\n  height: 435px;\n  background: white;\n  border-radius: 7px;\n  margin-top: 17%;\n  padding-top: 12px;\n}\n\ndiv#dp div {\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 50%;\n  padding-top: 29px;\n}\n\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n}\n\ndiv#profile input {\n  height: 31px;\n  border-radius: 5px;\n  border: 1px solid #9e9e9e38;\n  padding-left: 5px;\n  font-size: 13px;\n  width: 180px;\n}\n\ndiv#profile span {\n  color: gray;\n  font-size: 12px;\n  float: left;\n  margin-left: 62px;\n}\n\np#bio {\n  text-align: -webkit-center;\n  color: gray;\n  font-size: 13px;\n}\n\n#bioInput {\n  height: 57px;\n}\n\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 8px;\n  float: left;\n}\n\ndiv#logoutBtn {\n  border: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  top: 0;\n  float: right;\n  margin-right: 7px;\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n#fileUpload {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  opacity: 0;\n}\n\n#progressDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5098039216);\n  text-align: -webkit-center;\n  padding-top: 50%;\n  display: none;\n}\n\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\n\ndiv#playlists div#playlist {\n  width: 33%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\n\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\n\nspan#metric {\n  margin-left: 5px;\n}\n\n#bottomBar {\n  background: #000000;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBRFBFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRVA7RURERTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNJVDtBQUNGOztBREZFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFBd0IsbUNBQUE7QUNLMUI7O0FERkE7RUFDRSwwQkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNLRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDS0Y7O0FERkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURGQTtFQUNFLDRDQUFBO0VBQ0EsU0FBQTtBQ0tGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNJSjs7QURERTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURJQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFlBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVEY7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDVkY7O0FEWUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ1ZKOztBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNMb2FkZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICBkaXYjbG9hZGVySG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICBkaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudHtcbiAgdGV4dC1hbGlnbjotd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcbn1cblxucCNzZXR0aW5ncyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I1NldHRpbmdzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjUzKTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I1NldHRpbmdzIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2I1NldHRpbmdzIGhyIHtcbiAgYm9yZGVyOiAxcHggZG90dGVkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNSk7XG4gIGhlaWdodDogMDtcbn1cblxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAjRm9sbG93ZXJze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAjdXNlcm5hbWV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG5cblxuICB9XG5cbn1cblxuI0ZvbGxvd2luZ3tcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjclO1xuICBmb250LXNpemU6IDEzcHg7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbn1cblxuXG5kaXYjZWRpdFByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA2MTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjY2xvc2VNZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjcHJvZmlsZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTclO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuZGl2I2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5cbmRpdiNwcm9maWxlIGlucHV0IHtcbiAgaGVpZ2h0OiAzMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWUzODtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG5kaXYjcHJvZmlsZSBzcGFuIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6bGVmdDtcbiAgbWFyZ2luLWxlZnQ6NjJweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2Jpb0lucHV0e1xuICBoZWlnaHQ6NTdweDtcbn1cblxuZGl2I3VwbG9hZGVkSGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDkwMTk2MDc4NDMxMzcyNTUpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbiNwcm9maWxlTmFtZXtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cblxuXG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuXG4jZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3Byb2dyZXNzRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTA5ODAzOTIxNTY4NjI3NCk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG59XG5cblxuI3BsYXlsaXN0UHJldmlld3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jYm90dG9tQmFye1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn0iLCJkaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmRpdiNsb2FkZXJIb2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG5cbmRpdiN2aWRlb1BsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gIC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudCB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4jZHAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxucCNzZXR0aW5ncyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I1NldHRpbmdzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjUzKTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I1NldHRpbmdzIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2I1NldHRpbmdzIGhyIHtcbiAgYm9yZGVyOiAxcHggZG90dGVkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNSk7XG4gIGhlaWdodDogMDtcbn1cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5kaXYjcHJvZmlsZUJsb2NrICNGb2xsb3dlcnMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI3VzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI0ZvbGxvd2luZyB7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDI3JTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI0ZvbGxvd2luZyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYjZWRpdFByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA2MTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjY2xvc2VNZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYjcHJvZmlsZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTclO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuZGl2I2RwIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5kaXYjcHJvZmlsZSBpbnB1dCB7XG4gIGhlaWdodDogMzFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuZGl2I3Byb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNjJweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2Jpb0lucHV0IHtcbiAgaGVpZ2h0OiA1N3B4O1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYjbG9nb3V0QnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwcm9ncmVzc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwOTgwMzkyMTYpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNib3R0b21CYXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn0iXX0= */"

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







var Tab4Page = /** @class */ (function () {
    function Tab4Page(loadingController, requests, storage, route) {
        this.loadingController = loadingController;
        this.requests = requests;
        this.storage = storage;
        this.route = route;
    }
    Tab4Page.prototype.ngOnInit = function () {
    };
    Tab4Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.storage.get('mail').then(function (val) {
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (val == undefined) {
                _this.route.navigate(['']);
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
    Tab4Page.prototype.showSettings = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#closeMenu").show();
    };
    Tab4Page.prototype.closeMenu = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#closeMenu").hide();
    };
    Tab4Page.prototype.editProfile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#Settings").hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#editProfile").show();
    };
    Tab4Page.prototype.updateProfile = function () {
        var user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        var first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        var last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        var bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var Email = JSON.parse(localStorage.getItem('email'));
        var update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio);
        update.subscribe(function (x) { return console.log(x); });
        this.ionViewDidEnter();
    };
    //render user's profile
    // renderProfile(profile){
    //     $("#profileName").text(profile.first_name + " "+ profile.last_name);
    //     $("#username").text("@"+profile.username);
    //     $("#Posts").text(profile.total_posts + " Uploaded playlists");
    //     $("#Followers").text(profile.followers);
    //     $("#Followings").text(profile.following);
    //     $("#bio").text(profile.bio);
    //     $("#dp").css('background', 'url('+this.images_url+profile.image+'.jpg)');
    //     $("#dp").css('background-size', 'cover');
    // }
    Tab4Page.prototype.logout = function () {
        this.storage.clear();
        this.ionViewDidEnter();
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
    Tab4Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map