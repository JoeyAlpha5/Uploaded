(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Upload Video</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar id=\"progressBar\" value=\"{{progress}}\"></ion-progress-bar>\n  <ion-input (change)=\"changeListener($event)\" type=\"file\"  id=\"uploadDesc\" accept=\"video/*\"></ion-input>\n  <!-- <div id=\"uploadImage\" (click)=\"selectVideo()\"> -->\n    <div id=\"uploadImage\">\n    <ion-icon name=\"cloud-upload\" id=\"uploadIcon\"></ion-icon>\n    <p>Upload your video</p>\n    <span>Tap here to select a video from your device to</span>\n  </div>\n  <div id=\"options\" class=\"options\">\n    <ion-label id=\"label\">Add to your feed: </ion-label>\n    <ion-toggle id=\"toggle\" (ionChange)=\"addPlaylist($event)\" color=\"dark\"></ion-toggle>\n  </div>\n  <ion-label id=\"scheduleText\">Schedule Upload:</ion-label>\n  <div id=\"schedule\">\n    <ion-item>\n      <ion-label id=\"publishPrompt\">MMMM DD h:mm</ion-label>\n      <ion-datetime id=\"selectedMonthDay\" displayFormat=\"MMMM DD\" [(ngModel)]=\"todayDate\" min=\"{{todayDate}}\" placeholder=\"Select Date\"></ion-datetime>\n      <ion-datetime id=\"selectedTime\" displayFormat=\"h:mm A\" [(ngModel)]=\"Time\" placeholder=\"Select Time\"></ion-datetime>\n    </ion-item>\n  </div>\n  <div id=\"options\">\n    <ion-label id=\"label\">Music Genre: </ion-label>\n    <ion-select id=\"Select\" okText=\"Okay\" cancelText=\"Dismiss\">\n      <ion-select-option value=\"HipHop\">HipHop</ion-select-option>\n      <ion-select-option value=\"House\">House</ion-select-option>\n      <ion-select-option value=\"Jazz\">Jazz</ion-select-option>\n      <ion-select-option value=\"Indie\">Indie</ion-select-option>\n      <ion-select-option value=\"Popp\">Popp</ion-select-option>\n      <ion-select-option value=\"Rock\">Rock</ion-select-option>\n    </ion-select>\n  </div>\n\n  <ion-input type=\"text\"  id=\"uploadDescription\"\n    placeholder=\"Song Title\"></ion-input>\n\n  \n  <div id=\"taggedUsers\">\n    <ion-chip>\n      <ion-label>{{ Tags }}</ion-label>\n    </ion-chip>\n  </div>\n\n  <ion-input type=\"text\" id=\"uploadTag\" (ionChange)=\"getUsers()\" placeholder=\"Tag friends\"></ion-input>\n  <ion-item button  *ngFor='let item of ( search_request | async)' (click)=\"SetTag(item.id,item.first_name)\">\n    {{ item.first_name }}  {{ item.last_name }}\n  </ion-item>\n\n  \n  <div id=\"uploadBtnDiv\">\n\n      <ion-item *ngFor=\"let img of videos_array; index as pos\" text-wrap>\n        <ion-label>\n            Publish upload\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img,pos)\">\n          <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n        </ion-button>\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    <!-- <ion-button id=\"uploadBtn\" (click)=\"upload()\">Publish video</ion-button> -->\n  </div>\n\n  <div id=\"videoToUpload\">\n\n  </div>\n  \n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.page */ "./src/app/upload/upload.page.ts");







var routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]
    }
];
var UploadPageModule = /** @class */ (function () {
    function UploadPageModule() {
    }
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
    return UploadPageModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span, ion-label, input {\n  font-family: \"helvetica\" !important;\n}\ndiv#videoToUpload {\n  height: 50px;\n  overflow: hidden;\n  opacity: 0;\n}\nion-progress-bar#progressBar {\n  position: fixed;\n  top: 0;\n  margin-top: 55px;\n}\n#dp {\n  border-radius: 50%;\n  background-size: cover !important;\n  float: left;\n  width: 50px !important;\n  height: 50px !important;\n  margin-left: 15px;\n  margin-top: 15px;\n}\nion-input#uploadDesc {\n  width: 250px;\n  margin-left: 10px;\n  float: left;\n  margin-top: 26px;\n}\n#uploadDesc .native-input sc-ion-input-md {\n  width: 100%;\n  height: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n}\ndiv#uploadImage {\n  width: 100%;\n  height: 182px;\n  float: left;\n  background: #f7f7f7;\n  text-align: -webkit-center;\n}\nion-input#uploadDesc {\n  width: 100%;\n  position: absolute;\n  height: 182px;\n  opacity: 0;\n}\n#uploadDescription {\n  margin-top: 28px;\n  margin-bottom: 22px;\n  height: 80px;\n  background: #f7f7f7;\n  padding-left: 10px !important;\n  border-top: 8px solid white;\n}\n#uploadBtnDiv {\n  width: 100%;\n  margin-bottom: 100px;\n  text-align: -webkit-center;\n}\nion-label#scheduleText {\n  margin-left: 15px;\n  font-size: 13px;\n  color: black;\n}\n#uploadImage ion-icon.md.hydrated {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n#uploadIcon {\n  font-size: 76px;\n  margin-top: 18px;\n  color: #FF9800;\n}\n#uploadImage p {\n  margin: 0;\n  margin-bottom: 7px;\n  font-weight: bold;\n}\ndiv#uploadImage span {\n  font-size: 13px;\n  opacity: 0.6;\n}\nion-label#FileInputabel {\n  text-align: left;\n  float: left;\n  margin-top: 20px;\n  margin-left: 15px;\n}\ndiv#options #label {\n  font-size: 13px;\n  margin-left: 15px;\n}\ndiv.options #label {\n  float: left;\n  margin-top: 20px;\n}\nion-toggle#toggle {\n  float: right;\n  margin-top: 8px;\n}\n.schedulePostFor {\n  width: 100%;\n  margin-top: 20px;\n  background: rgba(0, 0, 0, 0.03);\n}\n#publishPrompt {\n  font-size: 11px;\n}\ndiv#options {\n  width: 100%;\n  height: 53px;\n  float: left;\n  background: rgba(0, 0, 0, 0.03);\n  margin-top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0FDREY7QURLQTtFQUNFLG1DQUFBO0FDSEY7QURNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNIRjtBREtBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ0ZGO0FETUU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0hGO0FET0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0pGO0FET0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pGO0FET0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYSc7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5cblxucCwgc3Bhbixpb24tbGFiZWwsaW5wdXR7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJyAhaW1wb3J0YW50O1xufVxuXG5kaXYjdmlkZW9Ub1VwbG9hZCB7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbmlvbi1wcm9ncmVzcy1iYXIjcHJvZ3Jlc3NCYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTVweDtcbn1cblxuXG4gICNkcCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG5pb24taW5wdXQjdXBsb2FkRGVzYyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbiN1cGxvYWREZXNjIC5uYXRpdmUtaW5wdXQgc2MtaW9uLWlucHV0LW1kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuaW9uLWlucHV0I3VwbG9hZERlc2N7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTgycHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuI3VwbG9hZERlc2NyaXB0aW9ue1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiA4cHggc29saWQgd2hpdGU7XG59XG5cbiN1cGxvYWRCdG5EaXZ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbmlvbi1sYWJlbCNzY2hlZHVsZVRleHQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiN1cGxvYWRJbWFnZSBpb24taWNvbi5tZC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJY29ue1xuICBmb250LXNpemU6NzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pb24tbGFiZWwjRmlsZUlucHV0YWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zY2hlZHVsZVBvc3RGb3J7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xufVxuXG4jcHVibGlzaFByb21wdHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm8tUmVndWxhci50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5wLCBzcGFuLCBpb24tbGFiZWwsIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCIgIWltcG9ydGFudDtcbn1cblxuZGl2I3ZpZGVvVG9VcGxvYWQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIjcHJvZ3Jlc3NCYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTVweDtcbn1cblxuI2RwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWREZXNjIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbiN1cGxvYWREZXNjIC5uYXRpdmUtaW5wdXQgc2MtaW9uLWlucHV0LW1kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuZGl2I3VwbG9hZEltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuaW9uLWlucHV0I3VwbG9hZERlc2Mge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4MnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4jdXBsb2FkRGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiA4cHggc29saWQgd2hpdGU7XG59XG5cbiN1cGxvYWRCdG5EaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG5pb24tbGFiZWwjc2NoZWR1bGVUZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jdXBsb2FkSW1hZ2UgaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDc2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4jdXBsb2FkSWNvbiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgY29sb3I6ICNGRjk4MDA7XG59XG5cbiN1cGxvYWRJbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjdXBsb2FkSW1hZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pb24tbGFiZWwjRmlsZUlucHV0YWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2I29wdGlvbnMgI2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZGl2Lm9wdGlvbnMgI2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10b2dnbGUjdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zY2hlZHVsZVBvc3RGb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn1cblxuI3B1Ymxpc2hQcm9tcHQge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmRpdiNvcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");










// import { HTTP } from '@ionic-native/http/ngx';






var STORAGE_KEY = "stored_videos";
var UploadPage = /** @class */ (function () {
    function UploadPage(cloud_storage, ref, plt, actionSheetController, filePath, webview, camera, file_, http, tabs, requests, toastController, statusBar, route, loadingController, storage) {
        this.cloud_storage = cloud_storage;
        this.ref = ref;
        this.plt = plt;
        this.actionSheetController = actionSheetController;
        this.filePath = filePath;
        this.webview = webview;
        this.camera = camera;
        this.file_ = file_;
        this.http = http;
        this.tabs = tabs;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.progress = 0;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displayLoading = false;
        this.videos_array = [];
        /*loadStoredImages() {
          this.storage.get(STORAGE_KEY).then(images => {
            if (images) {
              let arr = JSON.parse(images);
              this.videos_array = [];
              for (let img of arr) {
                let filePath = this.file.dataDirectory + img;
                let resPath = this.pathForImage(filePath);
                this.videos_array.push({ name: img, path: resPath, filePath: filePath });
              }
            }
          });
        }
      
      async selectVideo() {
          const actionSheet = await this.actionSheetController.create({
              header: "Select Video source",
              buttons: [{
                      text: 'Load from Library',
                      handler: () => {
                          this.getVideo(this.camera.PictureSourceType.PHOTOLIBRARY);
                      }
                  },
                  {
                      text: 'Cancel',
                      role: 'cancel'
                  }
              ]
          });
          await actionSheet.present();
      }
      
      getVideo(sourceType: PictureSourceType) {
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.VIDEO,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        
      
        this.camera.getPicture(options).then(imagePath => {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                imagePath = 'file://'+imagePath;
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
      
      }
      
      createFileName() {
          var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".mp4";
          return newFileName;
      }
      
      copyFileToLocalDir(namePath, currentName, newFileName) {
      
        //this.updateStoredImages(newFileName);
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
      }
      
      
      updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            } else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
      
            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);
      
            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
      
            this.videos_array = [newEntry, ...this.videos_array];
            this.ref.detectChanges(); // trigger change detection cycle
        });
      }
      
      
      deleteImage(imgEntry, position) {
          this.videos_array.splice(position, 1);
       
          this.storage.get(STORAGE_KEY).then(images => {
              let arr = JSON.parse(images);
              let filtered = arr.filter(name => name != imgEntry.name);
              this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
       
              var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
       
              this.file.removeFile(correctPath, imgEntry.name).then(res => {
                  // this.presentToast('File removed.');
              });
          });
      }
      
      
        pathForImage(vid) {
          if (vid === null) {
            return '';
          } else {
            let converted = this.webview.convertFileSrc(vid);
            return converted;
          }
        }
      
      
        startUpload(imgEntry,pos) {
          this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
              .then(entry => {
                  ( < FileEntry > entry).file(file => this.readFile(file,imgEntry,pos))
              })
              .catch(err => {
                  this.presentToast('Error while reading file.');
              });
      }
      
      readFile(file: any,imgEntry,pos) {
        const reader = new FileReader();
        reader.onload = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            formData.append('type', 'upload');
            // //post attributes
            let genre = JSON.stringify($("#Select").val());
            let video_name: any;
            let description = JSON.stringify($("#uploadDescription").val());
            let message = "";
            let selectedMonthDay = this.todayDate;
            let selectedTime = this.Time;
            let post_day = new Date(selectedMonthDay).getDate();
            let post_month = new Date(selectedMonthDay).getMonth();
            let selectedHours = new Date(selectedTime).getHours();
            let selectedMinutes = new Date(selectedTime).getMinutes();
            let publish_date = post_day+"/"+(post_month+1)+"/"+selectedHours+":"+selectedMinutes
            // //
            // formData.append('file', file);
            formData.append('type', 'upload');
            formData.append('email', this.email);
            formData.append('description', description);
            formData.append('genre', genre);
            formData.append('playlisted', JSON.stringify(this.addToPlaylist));
            formData.append('publish', publish_date);
            formData.append("tags", this.tagged_ids.toString());
            console.log("file ", imgBlob);
            console.log("file ", file);
            var x = <HTMLVideoElement>document.createElement("VIDEO");
            var URL = window.URL;
            // var src = URL.createObjectURL( file );
            x.src = file.localURL;
            x.id = "createdVid";
            $("#videoToUpload").append(x);
            // formData.append("duration", duration);
      
            this.uploadImageData(formData,imgEntry,pos);
        };
        reader.readAsArrayBuffer(file);
      }
      
      
      async uploadImageData(formData: FormData,imgEntry,pos) {
        const loading = await this.loadingController.create({
            message: 'Uploading...',
        });
        await loading.present();
      
        this.http.post('https://uploaded.herokuapp.com/users/users', formData)
            .pipe(
                finalize(() => {
                    loading.dismiss();
                })
            )
            .subscribe(res => {
                if (res['newly created post_id']) {
                    this.presentToast('File upload complete.')
                    this.deleteImage(imgEntry,pos);
                } else {
                    this.presentToast('File upload failed.')
      
                }
            });
      }*/
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
    UploadPage.prototype.ngOnInit = function () {
        // this.plt.ready().then(() => {
        //   this.loadStoredImages();
        // });
    };
    UploadPage.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "#fc8700";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    UploadPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then(function (val) {
            console.log('Your email is', val);
            _this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (_this.email == undefined) {
                _this.route.navigate(['login']);
            }
        });
    };
    UploadPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + $event.target.files[0].name);
        this.file_name = $event.target.files[0].name;
        //get video length
        var myVideos = [];
        console.log($event.target.files[0]);
        // get video duration
        var x = document.createElement("VIDEO");
        var URL = window.URL;
        var src = URL.createObjectURL($event.target.files[0]);
        x.src = src;
        x.id = "createdVid";
        jquery__WEBPACK_IMPORTED_MODULE_3__("#videoToUpload").append(x);
    };
    UploadPage.prototype.addPlaylist = function ($event) {
        console.log($event.target.checked);
        this.addToPlaylist = $event.target.checked;
        if (this.addToPlaylist == true) {
            this.presentToast("Upload will be made available on your profile");
        }
    };
    UploadPage.prototype.upload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var appended_vid, genre, video_name, description, message, selectedMonthDay, selectedTime, post_day, post_month, selectedHours, selectedMinutes, publish_date, task, user_email, loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log("file ", this.file);
                        console.log("Add to playlist ", this.addToPlaylist);
                        console.log(jquery__WEBPACK_IMPORTED_MODULE_3__("#Select").val());
                        appended_vid = document.getElementById("createdVid");
                        this.video_duration = appended_vid.duration;
                        console.log("video length is ", this.video_duration);
                        genre = jquery__WEBPACK_IMPORTED_MODULE_3__("#Select").val();
                        description = jquery__WEBPACK_IMPORTED_MODULE_3__("#uploadDescription").val();
                        message = "";
                        selectedMonthDay = this.todayDate;
                        selectedTime = this.Time;
                        post_day = new Date(selectedMonthDay).getDate();
                        post_month = new Date(selectedMonthDay).getMonth();
                        selectedHours = new Date(selectedTime).getHours();
                        selectedMinutes = new Date(selectedTime).getMinutes();
                        publish_date = post_day + "/" + (post_month + 1) + "/" + selectedHours + ":" + selectedMinutes;
                        console.log(publish_date, selectedTime);
                        if (!(this.file == undefined)) return [3 /*break*/, 1];
                        message = "Please select file to upload";
                        this.presentLoadingWithOptions(message);
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(description == undefined || description == "")) return [3 /*break*/, 2];
                        message = "Please provide a description for your upload";
                        this.presentLoadingWithOptions(message);
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(genre == "")) return [3 /*break*/, 3];
                        message = "Please select a genre for your upload";
                        this.presentLoadingWithOptions(message);
                        return [3 /*break*/, 6];
                    case 3:
                        task = this.cloud_storage.ref(this.file_name).put(this.file);
                        user_email = this.email;
                        // video_name = this.file.name;
                        // this.displayLoading = true;
                        task.percentageChanges().subscribe(function (x) {
                            console.log("progress", x);
                            _this.progress = x;
                        });
                        console.log("progress", task.percentageChanges());
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Uploading...',
                            })];
                    case 4:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 5:
                        _a.sent();
                        // this.http.post(this.profile_url,{file:this.file,duration:this.video_duration,tags:this.tagged_ids,publish:publish_date,type:"upload",email:user_email,description:description,genre:genre,playlisted:this.addToPlaylist},{}).then(x=>{
                        //   console.log(x.headers);
                        //   console.log(x.error);
                        //   console.log(x.status);
                        // })
                        task.then(function (x) {
                            console.log("File uploaded");
                            console.log(x);
                            var upload = _this.requests.Upload(_this.profile_url, user_email, _this.file_name, description, genre, _this.addToPlaylist, publish_date, _this.tagged_ids, _this.video_duration);
                            _this.Time = new Date().toISOString();
                            upload.subscribe(function (x) {
                                loading_1.dismiss();
                                _this.route.navigate(['/home/tabs/tab4']);
                                console.log(x);
                            }, function (error) {
                                loading_1.dismiss();
                                _this.presentLoadingWithOptions("Connection error.");
                                console.log("error encountered");
                            });
                        });
                        task.catch(function (x) {
                            _this.presentLoadingWithOptions("File upload error.");
                            console.log(x);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UploadPage.prototype.presentToast = function (message) {
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
    UploadPage.prototype.getUsers = function () {
        var _this = this;
        this.storage.get("mail").then(function (val) {
            var input_text = jquery__WEBPACK_IMPORTED_MODULE_3__("#uploadTag").val();
            _this.search_request = _this.requests.getSearchResults(_this.profile_url, input_text, val);
            _this.search_request.subscribe(function (result) {
                console.log(result);
                console.log(input_text);
            });
        });
    };
    UploadPage.prototype.SetTag = function (id, first_name) {
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
    };
    //loading component
    UploadPage.prototype.presentLoadingWithOptions = function (Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 1000,
                            message: Message,
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UploadPage.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
        { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module-es5.js.map