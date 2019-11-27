(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Upload</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-input (change)=\"changeListener($event)\" type=\"file\" accept=\"video/*\" id=\"uploadDesc\"></ion-input>\n  <ion-progress-bar *ngIf=\"displayLoading == true\" id=\"uploadProgress\" type=\"indeterminate\"></ion-progress-bar>\n  <div id=\"uploadImage\">\n    <ion-icon name=\"cloud-upload\" id=\"uploadIcon\"></ion-icon>\n    <p>Upload your video</p>\n    <span>Tap here to select a video from your device to</span>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Add to your feed: </ion-label>\n    <ion-toggle id=\"toggle\" (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <ion-label id=\"scheduleText\">Schedule Upload:</ion-label>\n  <div id=\"schedule\">\n    <ion-item>\n      <ion-label id=\"publishPrompt\">MMMM DD h:mm</ion-label>\n      <ion-datetime id=\"selectedMonthDay\" displayFormat=\"MMMM DD\" [(ngModel)]=\"todayDate\" min=\"{{todayDate}}\" placeholder=\"Select Date\"></ion-datetime>\n      <ion-datetime id=\"selectedTime\" displayFormat=\"h:mm A\" [(ngModel)]=\"Time\" placeholder=\"Select Time\"></ion-datetime>\n    </ion-item>\n  </div>\n  <div id=\"options\">\n    <ion-label id=\"label\">Music Genre: </ion-label>\n    <ion-select id=\"Select\" okText=\"Okay\" cancelText=\"Dismiss\">\n      <ion-select-option value=\"HipHop\">HipHop</ion-select-option>\n      <ion-select-option value=\"House\">House</ion-select-option>\n      <ion-select-option value=\"Jazz\">Jazz</ion-select-option>\n      <ion-select-option value=\"Indie\">Indie</ion-select-option>\n      <ion-select-option value=\"Popp\">Popp</ion-select-option>\n      <ion-select-option value=\"Rock\">Rock</ion-select-option>\n    </ion-select>\n  </div>\n\n  <ion-input type=\"text\"  id=\"uploadDescription\"\n    placeholder=\"Song Title\"></ion-input>\n\n  \n  <div id=\"taggedUsers\">\n    <ion-chip>\n      <ion-label>{{ Tags }}</ion-label>\n    </ion-chip>\n  </div>\n\n  <ion-input type=\"text\" id=\"uploadTag\" (ionChange)=\"getUsers()\" placeholder=\"Tag a friend\"></ion-input>\n  <ion-item button  *ngFor='let item of ( search_request | async)' (click)=\"SetTag(item.id,item.first_name)\">\n    {{ item.first_name }}  {{ item.last_name }}\n  </ion-item>\n\n  \n  <div id=\"uploadBtnDiv\">\n    <ion-button id=\"uploadBtn\" (click)=\"upload()\">Publish video</ion-button>\n  </div>\n\n\n\n</ion-content>"

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

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span, ion-label, input {\n  font-family: \"helvetica\" !important;\n}\n#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n}\nion-input#uploadDesc {\n  width: 250px;\n  margin-left: 10px;\n  float: left;\n  margin-top: 26px;\n}\n#uploadDesc .native-input sc-ion-input-md {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n}\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\nion-input#uploadDesc {\n  width: 100%;\n  position: absolute;\n  height: 182px;\n  opacity: 0;\n}\n#uploadDescription {\n  margin-top: 28px;\n  margin-bottom: 22px;\n  height: 80px;\n  background: #f7f7f7;\n  padding-left: 10px !important;\n  border-top: 8px solid white;\n}\n#uploadBtnDiv {\n  width: 100%;\n  margin-bottom: 100px;\n  text-align: -webkit-center;\n}\nion-label#scheduleText {\n  margin-left: 15px;\n  font-size: 13px;\n  color: black;\n}\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n.schedulePostFor {\n  width: 100%;\n  margin-top: 20px;\n  background: rgba(0, 0, 0, 0.03);\n}\n#publishPrompt {\n  font-size: 11px;\n}\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FDREY7QURLQTtFQUNFLG1DQUFBO0FDSEY7QURNRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDSEY7QURPQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDSkY7QURPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7QURPQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcbkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm8tUmVndWxhci50dGYpO1xufVxuXG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYUInO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByb0Rpc3BsYXktU2VtaWJvbGQudHRmKTtcbn1cblxuXG5wLCBzcGFuLGlvbi1sYWJlbCxpbnB1dHtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG59XG4gIFxuICAjZHAge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuaW9uLWlucHV0I3VwbG9hZERlc2Mge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG4jdXBsb2FkRGVzYyAubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1tZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNje1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbiN1cGxvYWREZXNjcmlwdGlvbntcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHdoaXRlO1xufVxuXG4jdXBsb2FkQnRuRGl2e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG5pb24tbGFiZWwjc2NoZWR1bGVUZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jdXBsb2FkSW1hZ2UgaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSWNvbntcbiAgZm9udC1zaXplOjc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSW1hZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuaW9uLWxhYmVsI0ZpbGVJbnB1dGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNvcHRpb25zICNsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdi5vcHRpb25zICNsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlI3RvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2NoZWR1bGVQb3N0Rm9ye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn1cblxuI3B1Ymxpc2hQcm9tcHR7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuZGl2I29wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCI7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCI7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvRGlzcGxheS1TZW1pYm9sZC50dGYpO1xufVxucCwgc3BhbiwgaW9uLWxhYmVsLCBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiICFpbXBvcnRhbnQ7XG59XG5cbiNkcCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG4jdXBsb2FkRGVzYyAubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1tZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmRpdiN1cGxvYWRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxODJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3VwbG9hZERlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHdoaXRlO1xufVxuXG4jdXBsb2FkQnRuRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuaW9uLWxhYmVsI3NjaGVkdWxlVGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI3VwbG9hZEltYWdlIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcbiAgZm9udC1zaXplOiA3NnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuI3VwbG9hZEljb24ge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSW1hZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuaW9uLWxhYmVsI0ZpbGVJbnB1dGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdiNvcHRpb25zICNsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmRpdi5vcHRpb25zICNsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlI3RvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2NoZWR1bGVQb3N0Rm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG59XG5cbiNwdWJsaXNoUHJvbXB0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");










let UploadPage = class UploadPage {
    constructor(tabs, requests, toastController, statusBar, route, loadingController, storage) {
        this.tabs = tabs;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displayLoading = false;
        this.addToPlaylist = false;
        this.tagged_users = [];
        this.tagged_ids = [];
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.todayDate = new Date().toISOString();
        this.Time = new Date().toISOString();
        this.Tags = "Tagged users: ";
    }
    ngOnInit() {
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "#fc8700";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
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
        //get video duration
        // var vid = <HTMLVideoElement>document.getElementById("videoPlaceHolder");
        // var videoElem = $("#placeholderSrc");
        // var URL = window.URL || window.webkitURL;
        // var src = URL.createObjectURL( this.file );
        // videoElem.attr("src", src)
        // vid.load();
        // console.log(vid, vid.duration);
        //
        //
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
        let selectedMonthDay = this.todayDate;
        let selectedTime = this.Time;
        let post_day = new Date(selectedMonthDay).getDate();
        let post_month = new Date(selectedMonthDay).getMonth();
        let selectedHours = new Date(selectedTime).getHours();
        let selectedMinutes = new Date(selectedTime).getMinutes();
        let publish_date = post_day + "/" + (post_month + 1) + "/" + selectedHours + ":" + selectedMinutes;
        console.log(publish_date, selectedTime);
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
            let upload = this.requests.Upload(this.profile_url, user_email, this.file, description, genre, this.addToPlaylist, publish_date, this.tagged_ids);
            this.presentLoadingWithOptions("Uploading, please wait...");
            this.Time = new Date().toISOString();
            upload.subscribe(x => {
                this.displayLoading = false;
                this.route.navigate(['/home/tabs/tab4']);
                console.log(x);
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
    getUsers() {
        this.storage.get("mail").then(val => {
            let input_text = jquery__WEBPACK_IMPORTED_MODULE_3__("#uploadTag").val();
            this.search_request = this.requests.getSearchResults(this.profile_url, input_text, val);
            this.search_request.subscribe(result => {
                console.log(result);
                console.log(input_text);
            });
        });
    }
    SetTag(id, first_name) {
        if (this.tagged_users.includes(first_name) == false) {
            if (this.Tags == "Tagged users: ") {
                this.Tags = this.Tags + first_name;
                this.tagged_users.push(first_name);
                this.tagged_ids.push(id);
            }
            else {
                this.Tags = this.Tags + "," + first_name;
                this.tagged_users.push(first_name);
                this.tagged_ids.push(id);
            }
        }
        console.log(first_name);
        console.log(this.tagged_users);
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
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=upload-upload-module-es2015.js.map