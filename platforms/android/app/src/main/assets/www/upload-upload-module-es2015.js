(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Upload</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor='let profile of ( results | async)'>\n\n    <div id=\"uploadImage\">\n        <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + profile.image+ '.jpg)'}\" ></div>\n        <div *ngIf=\"profile.image == undefined\" id='dp'></div>\n        <ion-input id=\"uploadDesc\" placeholder=\"Upload Description\"></ion-input>\n    </div>\n   <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Add to your feed: </ion-label>\n    <ion-toggle id=\"toggle\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\">\n      <ion-label id=\"label\">Music Genre: </ion-label>\n      <ion-select id=\"toggle\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"brown\">HipHop</ion-select-option>\n        <ion-select-option value=\"blonde\">House</ion-select-option>\n        <ion-select-option value=\"black\">Jazz</ion-select-option>\n        <ion-select-option value=\"red\">Indie</ion-select-option>\n        <ion-select-option value=\"red\">Popp</ion-select-option>\n        <ion-select-option value=\"red\">Rock</ion-select-option>\n      </ion-select>\n    </div>\n\n\n    <ion-label id=\"FileInputabel\">File: </ion-label>\n    <ion-input type=\"file\" id=\"uploadDesc\"></ion-input>\n\n  <div id=\"bottomBar\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.page */ "./src/app/upload/upload.page.ts");







const routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]
    }
];
let UploadPageModule = class UploadPageModule {
};
UploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]]
    })
], UploadPageModule);



/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bottomBar {\n  background: rgba(0, 0, 0, 0.38);\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 57px;\n}\n\n#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n}\n\nion-input#uploadDesc {\n  width: 250px;\n  margin-left: 10px;\n  float: left;\n  margin-top: 26px;\n}\n\ndiv#uploadImage {\n  width: 100%;\n  height: 70px;\n  float: left;\n}\n\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIiwic3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdHRvbUJhcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICB9XG5cbiAgI2RwIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG5cbn1cblxuaW9uLWxhYmVsI0ZpbGVJbnB1dGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNvcHRpb25zICNsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdi5vcHRpb25zICNsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlI3RvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5kaXYjb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufSIsIiNib3R0b21CYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTdweDtcbn1cblxuI2RwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tbGFiZWwjRmlsZUlucHV0YWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmRpdiNvcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/upload/upload.page.ts":
/*!***************************************!*\
  !*** ./src/app/upload/upload.page.ts ***!
  \***************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");



let UploadPage = class UploadPage {
    constructor(requests) {
        this.requests = requests;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        var Email = JSON.parse(localStorage.getItem('email'));
        var Password = localStorage.getItem('password');
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        if (Email == null && Password == null) {
            window.location.href = '';
            return;
        }
        else {
            this.results = this.requests.getProfile(profile_url, Email);
            // this.results.subscribe(profile => {
            //   console.log("profile", profile);
            //   this.renderProfile(profile);
            // });
        }
    }
};
UploadPage.ctorParameters = () => [
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] }
];
UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html"),
        styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=upload-upload-module-es2015.js.map