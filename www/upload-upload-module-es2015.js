(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Upload</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-input (change)=\"changeListener($event)\" type=\"file\" accept=\"video/*\" id=\"uploadDesc\"></ion-input>\n    <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"uploadImage\">\n      <ion-icon name=\"cloud-upload\" id=\"uploadIcon\"></ion-icon>\n      <p>Upload your video</p>\n      <span>Tap here to select a video from your device to</span>\n    </div>\n   <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Add to your feed: </ion-label>\n    <ion-toggle id=\"toggle\" (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <div id=\"options\">\n      <ion-label id=\"label\">Music Genre: </ion-label>\n      <ion-select id=\"Select\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"HipHop\">HipHop</ion-select-option>\n        <ion-select-option value=\"House\">House</ion-select-option>\n        <ion-select-option value=\"Jazz\">Jazz</ion-select-option>\n        <ion-select-option value=\"Indie\">Indie</ion-select-option>\n        <ion-select-option value=\"Popp\">Popp</ion-select-option>\n        <ion-select-option value=\"Rock\">Rock</ion-select-option>\n      </ion-select>\n    </div>\n\n    <ion-input type=\"text\" id=\"uploadDescription\" placeholder=\"Upload description\"></ion-input>\n\n    <div id=\"uploadBtnDiv\"><ion-button id=\"uploadBtn\" (click)=\"upload()\">Publish video</ion-button></div>\n\n    \n    \n\n  <div id=\"bottomBar\"></div>\n</ion-content>\n"

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

module.exports = "#bottomBar {\n  background: #000000;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 60px;\n}\n\n#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n}\n\nion-input#uploadDesc {\n  width: 250px;\n  margin-left: 10px;\n  float: left;\n  margin-top: 26px;\n}\n\n#uploadDesc .native-input sc-ion-input-md {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\n\nion-input#uploadDesc {\n  width: 100%;\n  position: absolute;\n  height: 182px;\n  opacity: 0;\n}\n\n#uploadDescription {\n  margin-top: 28px;\n  margin-bottom: 22px;\n  height: 80px;\n  margin-left: 15px;\n}\n\n#uploadBtnDiv {\n  width: 100%;\n  text-align: -webkit-center;\n}\n\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\n\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\n\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\n\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\n\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\n\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3R0b21CYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gICNkcCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbiN1cGxvYWREZXNjIC5uYXRpdmUtaW5wdXQgc2MtaW9uLWlucHV0LW1kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuaW9uLWlucHV0I3VwbG9hZERlc2N7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTgycHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuI3VwbG9hZERlc2NyaXB0aW9ue1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jdXBsb2FkQnRuRGl2e1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiN1cGxvYWRJbWFnZSBpb24taWNvbi5tZC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJY29ue1xuICBmb250LXNpemU6NzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pb24tbGFiZWwjRmlsZUlucHV0YWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmRpdiNvcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59IiwiI2JvdHRvbUJhciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jZHAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLWlucHV0I3VwbG9hZERlc2Mge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuI3VwbG9hZERlc2MgLm5hdGl2ZS1pbnB1dCBzYy1pb24taW5wdXQtbWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTgycHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiN1cGxvYWREZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiN1cGxvYWRCdG5EaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiN1cGxvYWRJbWFnZSBpb24taWNvbi5tZC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJY29uIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEltYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1sYWJlbCNGaWxlSW5wdXRhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYjb3B0aW9ucyAjbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5kaXYub3B0aW9ucyAjbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRvZ2dsZSN0b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuZGl2I29wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn0iXX0= */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let UploadPage = class UploadPage {
    constructor(requests, toastController, route, loadingController, storage) {
        this.requests = requests;
        this.toastController = toastController;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displayLoading = false;
        this.addToPlaylist = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (this.email == undefined) {
                this.route.navigate(['']);
            }
        });
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
    }
    addPlaylist($event) {
        console.log($event.target.checked);
        this.addToPlaylist = $event.target.checked;
        if (this.addToPlaylist == true) {
            this.presentToast("Upload will be made available on your profile");
        }
    }
    upload() {
        console.log("file ", this.file);
        console.log("Add to playlist ", this.addToPlaylist);
        console.log(jquery__WEBPACK_IMPORTED_MODULE_3__("#Select").val());
        let genre = jquery__WEBPACK_IMPORTED_MODULE_3__("#Select").val();
        let video_name;
        let description = jquery__WEBPACK_IMPORTED_MODULE_3__("#uploadDescription").val();
        let message = "";
        if (this.file == undefined) {
            message = "Please select file to upload";
            this.presentLoadingWithOptions(message);
        }
        else if (description == undefined || description == "") {
            message = "Please provide a description for your upload";
            this.presentLoadingWithOptions(message);
        }
        else if (genre == "") {
            message = "Please select a genre for your upload";
            this.presentLoadingWithOptions(message);
        }
        else {
            var user_email = this.email;
            video_name = this.file.name;
            this.displayLoading = true;
            let upload = this.requests.Upload(this.profile_url, user_email, this.file, description, genre, this.addToPlaylist);
            this.presentLoadingWithOptions("Uploading, please wait...");
            upload.subscribe(x => {
                this.route.navigate(['/home/tabs/tab4']);
                console.log(x);
                this.displayLoading = false;
            });
        }
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
    //loading component
    presentLoadingWithOptions(Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 1000,
                message: Message,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
UploadPage.ctorParameters = () => [
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html"),
        styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=upload-upload-module-es2015.js.map