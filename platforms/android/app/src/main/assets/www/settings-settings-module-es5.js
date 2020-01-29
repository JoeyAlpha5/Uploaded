(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back\" id=\"backBtn\" (click)=\"back()\"></ion-icon>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" *ngFor='let profile of ( results | async)'>\n    <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n    <p id=\"notifcationsHeading\">Profile Setiings</p>\n    <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div id=\"coverImg\" *ngIf=\"profile.cover != undefined\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/' + profile.cover+ '.jpg)'}\">\n       <ion-input (change)=\"changeImageListener($event)\" placeholder=\"Upload Cover Image\" type=\"file\" accept=\"image/*\" id=\"uploadDesc\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <ion-icon name=\"camera\" id=\"cameraIcon\"></ion-icon>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <ion-icon name=\"camera\" id=\"cameraIcon\"></ion-icon>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br><br>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" [(ngModel)]=\"username\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br>\n      <span>Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" [(ngModel)]=\"name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" [(ngModel)]=\"bio\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br>\n      <span>Website: </span><br>\n      <ion-input type=\"text\" id=\"website\" [(ngModel)]=\"website\" placeholder=\"Add website\" value=\"{{ profile.website }}\"></ion-input><br>\n      <span>Location: </span><br>\n      <ion-input type=\"text\"  (ionChange)=\"location()\" [(ngModel)]=\"locations\" id=\"location\" placeholder=\"Add location\" value=\"{{ profile.location }}\"></ion-input><br>\n\n      <ion-item *ngFor='let place of ( places | async)' (click)=\"SetLocation(place.description)\">\n        {{ place.description }}\n      </ion-item>\n\n\n    <div id=\"croppImageDiv\" *ngIf=\"myImage\">\n      <!-- <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myImage\" *ngIf=\"myImage\"></angular-cropper> -->\n      <p (click)=\"save()\">Save</p>\n    </div>\n\n    </ion-card-content>\n    </ion-card>\n\n\n\n\n\n\n  <!--<p id=\"notifcationsHeading\">Notifications</p>\n   <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Like notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Repost notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Follow notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Post notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>-->\n\n  <div id=\"options\" class=\"logout\" (click)=\"logout()\">\n    Logout\n  </div>\n\n  <div id=\"uploadBtnDiv\"><ion-button id=\"uploadBtn\" (click)=\"updateProfile()\">Update</ion-button></div>\n\n    \n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");





// import { AngularCropperjsComponent } from 'angular-cropperjs';


var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            exports: [
            // AngularCropperjsComponent,
            ],
            declarations: [
                _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"],
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 80px !important;\n  height: 80px !important;\n  margin-left: 15px;\n  margin-top: 90px;\n  background: rgba(0, 0, 0, 0.0784313725);\n  padding: 11px;\n  position: absolute;\n  position: absolute;\n  color: white;\n  font-size: 30px;\n  padding: 23px;\n  padding-top: 27px;\n}\n\n#cameraIcon {\n  position: absolute;\n}\n\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\n\n#notifcationsHeading {\n  padding-left: 15px;\n  float: left;\n  width: 100%;\n}\n\n#uploadBtnDiv {\n  width: 100%;\n  text-align: -webkit-center;\n  padding-bottom: 100px;\n}\n\nion-card-content.md.card-content-md.hydrated {\n  margin-top: 150px;\n}\n\nion-icon#backBtn {\n  float: left;\n  margin-left: 15px;\n  margin-top: 3px;\n  font-size: 23px;\n}\n\nion-title.md.title-md.hydrated {\n  padding-left: 8px;\n}\n\ndiv#coverImg {\n  width: 100%;\n  height: 150px;\n  background: gainsboro;\n  position: absolute;\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.logout {\n  text-align: -webkit-center;\n  color: gray;\n  cursor: pointer;\n  padding-top: 20px;\n  margin-bottom: 20px;\n}\n\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\n\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\n\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n\nion-card#editProfile {\n  width: 100%;\n  height: auto;\n  margin-left: 0px;\n}\n\nion-card#editProfile span {\n  color: #000000 !important;\n  width: 100%;\n  float: left;\n}\n\n#uploadProfile {\n  opacity: 0;\n}\n\ndiv#croppImageDiv {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n}\n\ndiv#croppImageDiv p {\n  color: white;\n  margin-top: 40px;\n  width: 100%;\n  height: 40px;\n  text-align: -webkit-center;\n}\n\nion-input#uploadDesc {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0EsaUJBQUE7QUNBQTs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUNBRjs7QURHQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0RSOztBRE1BO0VBQ0ksVUFBQTtBQ0hKOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNIRjs7QURLRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNISjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAjZHAge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzg0MzEzNzI1NDkwMTk2KTtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuXG5cbiNjYW1lcmFJY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNub3RpZmNhdGlvbnNIZWFkaW5ne1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3VwbG9hZEJ0bkRpdntcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQubWQuY2FyZC1jb250ZW50LW1kLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbmlvbi1pY29uI2JhY2tCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tdGl0bGUubWQudGl0bGUtbWQuaHlkcmF0ZWQge1xucGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbmRpdiNjb3ZlckltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmxvZ291dCB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3VwbG9hZEltYWdlIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEljb257XG4gIGZvbnQtc2l6ZTo3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEltYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1sYWJlbCNGaWxlSW5wdXRhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjb3B0aW9ucyAjbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYub3B0aW9ucyAjbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRvZ2dsZSN0b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuZGl2I29wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuaW9uLWNhcmQjZWRpdFByb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG5cbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5cbiN1cGxvYWRQcm9maWxle1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmRpdiNjcm9wcEltYWdlRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7IFxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB9XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbn1cblxuIiwiI2RwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzg0MzEzNzI1KTtcbiAgcGFkZGluZzogMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAyM3B4O1xuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cblxuI2NhbWVyYUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNub3RpZmNhdGlvbnNIZWFkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN1cGxvYWRCdG5EaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudC5tZC5jYXJkLWNvbnRlbnQtbWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuaW9uLWljb24jYmFja0J0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi10aXRsZS5tZC50aXRsZS1tZC5oeWRyYXRlZCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG5kaXYjY292ZXJJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvdXQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiN1cGxvYWRJbWFnZSBpb24taWNvbi5tZC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJY29uIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEltYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1sYWJlbCNGaWxlSW5wdXRhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjb3B0aW9ucyAjbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYub3B0aW9ucyAjbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRvZ2dsZSN0b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuZGl2I29wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuaW9uLWNhcmQjZWRpdFByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuaW9uLWNhcmQjZWRpdFByb2ZpbGUgc3BhbiB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI3VwbG9hZFByb2ZpbGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjY3JvcHBJbWFnZURpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuZGl2I2Nyb3BwSW1hZ2VEaXYgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");











// import { AngularCropperjsComponent } from 'angular-cropperjs';
var SettingsPage = /** @class */ (function () {
    // @ViewChild('angularCropper',{static: false}) public angularCropper: AngularCropperjsComponent;
    // cropperOptions: any;
    // croppedImage = null;
    // myImage = null;
    // scaleValX = 1;
    // scaleValY = 1;
    function SettingsPage(platform, tabs, statusBar, toastController, storage, requests, route, loadingController) {
        var _this = this;
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
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.platform.backButton.subscribeWithPriority(0, function () {
            _this.route.navigate(['/home/tabs/tab4']);
        });
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
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.back = function () {
        this.route.navigate(['/home/tabs/tab4']);
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.storage.get('mail').then(function (val) {
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.results = _this.requests.getProfile(profile_url, val);
                _this.results.subscribe(function (x) {
                    console.log(x);
                    _this.locations = x[0].location;
                    _this.name = x[0].first_name;
                    _this.website = x[0].website;
                    _this.bio = x[0].bio;
                    _this.username = x[0].username;
                });
            }
        });
    };
    SettingsPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
    };
    SettingsPage.prototype.presentToast = function (message) {
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
    SettingsPage.prototype.location = function () {
        var input = this.locations;
        console.log(input);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.places = this.requests.getPlaces(profile_url, input);
    };
    SettingsPage.prototype.SetLocation = function (description) {
        console.log(description);
        jquery__WEBPACK_IMPORTED_MODULE_2__("#location").val(description);
        this.locations = description;
        this.places = null;
    };
    SettingsPage.prototype.updateProfile = function () {
        var _this = this;
        var user_name = this.username;
        var first_name = this.name;
        var location = this.locations;
        var website = this.website;
        var bio = this.bio;
        console.log("username and first name ", user_name, first_name, location, bio, website);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.storage.get('mail').then(function (Email) {
            var update = _this.requests.updateProfile(profile_url, Email, user_name, first_name, website, bio, location, _this.file);
            update.subscribe(function (x) { return console.log(x); });
            _this.ionViewDidEnter();
        });
    };
    SettingsPage.prototype.logout = function () {
        this.storage.clear();
        this.ionViewDidEnter();
    };
    SettingsPage.prototype.presentLoading = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Updating ' + message + ', Please wait...',
                            duration: 10000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changeImageListener = function ($event) {
        var _this = this;
        this.fil = $event.target.files[0];
        this.presentTast("File selected: " + this.fil.name);
        this.displayLoading = true;
        if (this.fil == undefined) {
            var message = "Please select file to upload";
            this.presentLoading(message);
            this.displayLoading = false;
        }
        else {
            this.storage.get("mail").then(function (user_email) {
                var upload = _this.requests.UploadCoverImage(_this.profile_url, user_email, _this.fil);
                upload.subscribe(function (x) {
                    // this.cropImage(x);
                    console.log(x);
                    _this.displayLoading = false;
                });
            });
        }
    };
    SettingsPage.prototype.presentTast = function (message) {
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
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map