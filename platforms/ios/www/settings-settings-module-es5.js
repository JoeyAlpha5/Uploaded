(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" *ngFor='let profile of ( results | async)'>\n    <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"uploadImage\">\n      <ion-icon name=\"settings\" id=\"uploadIcon\"></ion-icon>\n      <p>Update settings</p>\n      <span>Edit app preferences below</span>\n    </div>\n    <p id=\"notifcationsHeading\">Profile Setiings</p>\n    <ion-card *ngFor='let profile of ( results | async)' id=\"editProfile\">\n    <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" >\n      <div>Edit</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div>\n    <div *ngIf=\"profile.image == undefined\" id='dp'>\n      <div>Edit</div>\n      <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    </div><br><br>\n\n    <ion-card-content>\n      <span>Username: </span><br>\n      <ion-input type=\"text\" id=\"user_name\" placeholder=\"Add username\" value=\"{{ profile.username }}\"></ion-input><br>\n      <span>First Name: </span><br>\n      <ion-input type=\"text\" id=\"first_name\" placeholder=\"Add first name\" value=\"{{ profile.first_name }}\"></ion-input><br>\n      <span>Last Name: </span><br>\n      <ion-input type=\"text\" id=\"last_name\" placeholder=\"Add last name\" value=\"{{ profile.last_name }}\"></ion-input><br>\n      <span>Bio: </span><br>\n      <ion-input type=\"text\" id=\"bioInput\" placeholder=\"Add bio\" value=\"{{ profile.bio}}\"></ion-input><br>\n    </ion-card-content>\n    </ion-card>\n\n\n\n\n\n\n    <p id=\"notifcationsHeading\">Notifications</p>\n   <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Like notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Repost notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Follow notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Post notifications</ion-label>\n    <ion-toggle id=\"toggle\" checked (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n\n  <div id=\"options\" class=\"logout\" (click)=\"logout()\">\n    Logout\n  </div>\n\n  <div id=\"uploadBtnDiv\"><ion-button id=\"uploadBtn\" (click)=\"updateProfile()\">Update</ion-button></div>\n\n    \n</ion-content>\n"

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
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
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

module.exports = "#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n  background: rgba(0, 0, 0, 0.0784313725);\n  padding: 11px;\n}\n\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\n\n#notifcationsHeading {\n  padding-left: 15px;\n  float: left;\n  width: 100%;\n}\n\n#uploadBtnDiv {\n  width: 100%;\n  text-align: -webkit-center;\n  padding-bottom: 100px;\n}\n\n.logout {\n  text-align: -webkit-center;\n  color: gray;\n  cursor: pointer;\n  padding-top: 20px;\n  margin-bottom: 20px;\n}\n\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\n\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\n\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n\nion-card#editProfile {\n  width: 100%;\n  height: auto;\n  margin-left: 0px;\n}\n\nion-card#editProfile span {\n  color: #000000 !important;\n  width: 100%;\n  float: left;\n}\n\n#uploadProfile {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRFI7O0FETUE7RUFDSSxVQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICNkcCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTM3MjU0OTAxOTYpO1xuICAgIHBhZGRpbmc6IDExcHg7XG59XG5cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuI25vdGlmY2F0aW9uc0hlYWRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jdXBsb2FkQnRuRGl2e1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmxvZ291dCB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3VwbG9hZEltYWdlIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEljb257XG4gIGZvbnQtc2l6ZTo3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEltYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1sYWJlbCNGaWxlSW5wdXRhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjb3B0aW9ucyAjbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYub3B0aW9ucyAjbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRvZ2dsZSN0b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuZGl2I29wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuaW9uLWNhcmQjZWRpdFByb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG5cbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5cbiN1cGxvYWRQcm9maWxle1xuICAgIG9wYWNpdHk6IDA7XG59IiwiI2RwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzg0MzEzNzI1KTtcbiAgcGFkZGluZzogMTFweDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuI25vdGlmY2F0aW9uc0hlYWRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3VwbG9hZEJ0bkRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4ubG9nb3V0IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jdXBsb2FkSW1hZ2UgaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSWNvbiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pb24tbGFiZWwjRmlsZUlucHV0YWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmRpdiNvcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbmlvbi1jYXJkI2VkaXRQcm9maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbmlvbi1jYXJkI2VkaXRQcm9maWxlIHNwYW4ge1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiN1cGxvYWRQcm9maWxlIHtcbiAgb3BhY2l0eTogMDtcbn0iXX0= */"

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










var SettingsPage = /** @class */ (function () {
    function SettingsPage(tabs, statusBar, toastController, storage, requests, route, loadingController) {
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
    }
    SettingsPage.prototype.ngOnInit = function () {
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
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
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
    SettingsPage.prototype.updateProfile = function () {
        var _this = this;
        var user_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#user_name").val();
        var first_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#first_name").val();
        var last_name = jquery__WEBPACK_IMPORTED_MODULE_2__("#last_name").val();
        var bio = jquery__WEBPACK_IMPORTED_MODULE_2__("#bioInput").val();
        console.log(user_name, first_name);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        this.storage.get('mail').then(function (Email) {
            var update = _this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio, _this.file);
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
                        // const { role, data } = await loading.onDidDismiss();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map