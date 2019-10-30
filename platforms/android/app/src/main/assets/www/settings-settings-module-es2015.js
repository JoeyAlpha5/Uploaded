(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back\" id=\"backBtn\" (click)=\"back()\"></ion-icon>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" *ngFor='let profile of ( results | async)'>\n    <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"uploadImage\">\n      <ion-icon name=\"person\" id=\"uploadIcon\"></ion-icon>\n      <p>Update Profile</p>\n      <span>Edit app preferences below</span>\n    </div>\n    <p id=\"notifcationsHeading\">Profile Setiings</p>\n    <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Edit</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Edit</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br><br>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" [(ngModel)]=\"username\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br>\n      <span>Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" [(ngModel)]=\"name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" [(ngModel)]=\"bio\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br>\n      <span>Website: </span><br>\n      <ion-input type=\"text\" id=\"website\" [(ngModel)]=\"website\" placeholder=\"Add website\" value=\"{{ profile.website }}\"></ion-input><br>\n      <span>Location: </span><br>\n      <ion-input type=\"text\"  (ionChange)=\"location()\" [(ngModel)]=\"locations\" id=\"location\" placeholder=\"Add location\" value=\"{{ profile.location }}\"></ion-input><br>\n\n      <ion-item *ngFor='let place of ( places | async)' (click)=\"SetLocation(place.description)\">\n        {{ place.description }}\n      </ion-item>\n\n    </ion-card-content>\n    </ion-card>\n\n\n\n\n\n\n  <!--<p id=\"notifcationsHeading\">Notifications</p>\n   <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Like notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Repost notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Follow notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Post notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>-->\n\n  <div id=\"options\" class=\"logout\" (click)=\"logout()\">\n    Logout\n  </div>\n\n  <div id=\"uploadBtnDiv\"><ion-button id=\"uploadBtn\" (click)=\"updateProfile()\">Update</ion-button></div>\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n  background: rgba(0, 0, 0, 0.0784313725);\n  padding: 11px;\n}\n\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\n\n#notifcationsHeading {\n  padding-left: 15px;\n  float: left;\n  width: 100%;\n}\n\n#uploadBtnDiv {\n  width: 100%;\n  text-align: -webkit-center;\n  padding-bottom: 100px;\n}\n\nion-icon#backBtn {\n  float: left;\n  margin-left: 15px;\n  margin-top: 3px;\n  font-size: 23px;\n}\n\nion-title.md.title-md.hydrated {\n  padding-left: 8px;\n}\n\n.logout {\n  text-align: -webkit-center;\n  color: gray;\n  cursor: pointer;\n  padding-top: 20px;\n  margin-bottom: 20px;\n}\n\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\n\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\n\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n\nion-card#editProfile {\n  width: 100%;\n  height: auto;\n  margin-left: 0px;\n}\n\nion-card#editProfile span {\n  color: #000000 !important;\n  width: 100%;\n  float: left;\n}\n\n#uploadProfile {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNBLGlCQUFBO0FDQUE7O0FER0E7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNEUjs7QURNQTtFQUNJLFVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI2RwIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxMzcyNTQ5MDE5Nik7XG4gICAgcGFkZGluZzogMTFweDtcbn1cblxuXG5kaXYjdXBsb2FkSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4jbm90aWZjYXRpb25zSGVhZGluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN1cGxvYWRCdG5EaXZ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG5pb24taWNvbiNiYWNrQnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaW9uLXRpdGxlLm1kLnRpdGxlLW1kLmh5ZHJhdGVkIHtcbnBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ubG9nb3V0IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jdXBsb2FkSW1hZ2UgaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSWNvbntcbiAgZm9udC1zaXplOjc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSW1hZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuaW9uLWxhYmVsI0ZpbGVJbnB1dGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNvcHRpb25zICNsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdi5vcHRpb25zICNsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlI3RvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5kaXYjb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5pb24tY2FyZCNlZGl0UHJvZmlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG5cblxuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG59XG5cblxuI3VwbG9hZFByb2ZpbGV7XG4gICAgb3BhY2l0eTogMDtcbn0iLCIjZHAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTM3MjUpO1xuICBwYWRkaW5nOiAxMXB4O1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4jbm90aWZjYXRpb25zSGVhZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdXBsb2FkQnRuRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbmlvbi1pY29uI2JhY2tCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdGl0bGUubWQudGl0bGUtbWQuaHlkcmF0ZWQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxvZ291dCB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3VwbG9hZEltYWdlIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEljb24ge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSW1hZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuaW9uLWxhYmVsI0ZpbGVJbnB1dGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNvcHRpb25zICNsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdi5vcHRpb25zICNsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlI3RvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5kaXYjb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5pb24tY2FyZCNlZGl0UHJvZmlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5pb24tY2FyZCNlZGl0UHJvZmlsZSBzcGFuIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jdXBsb2FkUHJvZmlsZSB7XG4gIG9wYWNpdHk6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");











let SettingsPage = class SettingsPage {
    constructor(platform, tabs, statusBar, toastController, storage, requests, route, loadingController) {
        this.platform = platform;
        this.tabs = tabs;
        this.statusBar = statusBar;
        this.toastController = toastController;
        this.storage = storage;
        this.requests = requests;
        this.route = route;
        this.loadingController = loadingController;
        this.displayLoading = false;
        this.Bottom = true;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.route.navigate(['/home/tabs/tab4']);
        });
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/home/tabs/tab4']);
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.results = this.requests.getProfile(profile_url, val);
                this.results.subscribe(x => {
                    console.log(x);
                    this.locations = x[0].location;
                    this.name = x[0].first_name;
                    this.website = x[0].website;
                    this.bio = x[0].bio;
                    this.username = x[0].username;
                });
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
            }
        });
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
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
    location() {
        var input = this.locations;
        console.log(input);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.places = this.requests.getPlaces(profile_url, input);
        //this.places.subscribe();
    }
    SetLocation(description) {
        console.log(description);
        jquery__WEBPACK_IMPORTED_MODULE_2__("#location").val(description);
        this.locations = description;
        this.places = null;
    }
    updateProfile() {
        let user_name = this.username;
        let first_name = this.name;
        let location = this.locations;
        let website = this.website;
        let bio = this.bio;
        console.log("username and first name ", user_name, first_name, location, bio, website);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        this.storage.get('mail').then((Email) => {
            let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, website, bio, location, this.file);
            update.subscribe(x => console.log(x));
            this.ionViewDidEnter();
        });
    }
    logout() {
        this.storage.clear();
        this.ionViewDidEnter();
    }
    presentLoading(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Updating ' + message + ', Please wait...',
                duration: 10000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map