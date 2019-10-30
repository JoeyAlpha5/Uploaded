(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"chattingWith\">{{ name }} {{ sname }}</div> \n\n  <div id=\"imageBox\">\n    <ion-icon name=\"close\" id=\"closeIcon\" (click)=\"closeImage()\"></ion-icon>\n    <img src=\"https://res.cloudinary.com/uploaded/image/upload/v1567818053/{{ imageToView }}\"/>\n  </div>\n\n  <div id=\"chatsContainer\" >\n    <div id=\"messageBox\" *ngFor='let message of ( chatsRef$ | async)'>\n        <span id=\"sentByMe\" *ngIf='message.sender == this_username'>{{ message.sender }}</span>\n        <p id=\"messageSentByMe\" *ngIf='message.sender == this_username'>{{message.message }}</p>\n        <div id=\"rightImage\" *ngIf='message.sender == this_username'>\n          <img *ngIf='message.file' (click)=\"viewImage(message.file)\" src=\"https://res.cloudinary.com/uploaded/image/upload/v1567818053/{{ message.file }}\" />\n        </div>\n\n      <span id=\"notSentByMe\" *ngIf='message.sender != this_username'>{{ message.sender }}</span>\n      <p id=\"messageNotSentByMe\" *ngIf='message.sender != this_username'>{{message.message }}</p>\n      <div id=\"leftImage\" *ngIf='message.sender != this_username'>\n        <img *ngIf='message.file' (click)=\"viewImage(message.file)\" src=\"https://res.cloudinary.com/uploaded/image/upload/v1567818053/{{ message.file }}\" />\n      </div>\n    </div>\n  </div>\n\n  <div id=\"messageInput\">\n    <ion-icon name=\"attach\" id=\"fileIcon\"></ion-icon>\n     <ion-icon name=\"mic\"  (click)=\"captureAudio()\" id=\"micIcon\"></ion-icon>\n    <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    <input id=\"message\" (focus)=\"notBottom()\" (blur)=\"displayBottom()\" type=\"text\" placeholder=\"Message...\">\n    <ion-icon name=\"send\" id=\"sendIcon\" (click)=\"sendMessage()\"></ion-icon>\n  </div> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/messaging/messaging.module.ts":
/*!***********************************************!*\
  !*** ./src/app/messaging/messaging.module.ts ***!
  \***********************************************/
/*! exports provided: MessagingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function() { return MessagingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging.page */ "./src/app/messaging/messaging.page.ts");







var routes = [
    {
        path: '',
        component: _messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]
    }
];
var MessagingPageModule = /** @class */ (function () {
    function MessagingPageModule() {
    }
    MessagingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]]
        })
    ], MessagingPageModule);
    return MessagingPageModule;
}());



/***/ }),

/***/ "./src/app/messaging/messaging.page.scss":
/*!***********************************************!*\
  !*** ./src/app/messaging/messaging.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#chattingWith {\n  width: 100%;\n  height: 52px;\n  background: #f7f7f7;\n  color: gray;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 15px;\n}\n\nion-icon#sendIcon {\n  float: right;\n  margin-right: 15px;\n  font-size: 36px;\n  color: #000000;\n  margin-top: 10px;\n}\n\nspan#sentByMe {\n  font-size: 12px;\n  color: gray;\n  float: right;\n  width: 100%;\n  text-align: right;\n  padding-right: 15px;\n}\n\n#messageSentByMe {\n  width: auto;\n  float: right;\n  text-align: right;\n  margin-right: 15px;\n  background: orange;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\nspan#notSentByMe {\n  font-size: 12px;\n  color: gray;\n  float: left;\n  width: 100%;\n  text-align: left;\n  padding-left: 15px;\n}\n\n#messageNotSentByMe {\n  width: auto;\n  float: left;\n  text-align: left;\n  margin-right: 15px;\n  background: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\ndiv#messageBox {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 10px;\n}\n\ndiv#chatsContainer {\n  width: 100%;\n  float: left;\n  padding-bottom: 100px;\n  height: 75%;\n  overflow: scroll;\n}\n\n#messageInput {\n  bottom: 0px;\n  position: fixed;\n  margin-bottom: 56px;\n  width: 100%;\n  background: white;\n  height: 71px;\n}\n\ninput#message {\n  width: 75%;\n  margin-left: 15px;\n  height: 61px;\n  border: 1px solid rgba(128, 128, 128, 0.14);\n  border-radius: 15px;\n  padding-left: 10px;\n  outline: none;\n}\n\ninput#message input {\n  float: left;\n}\n\nion-icon#fileIcon {\n  font-size: 28px;\n  position: absolute;\n  margin-left: 69%;\n  margin-top: 17px;\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  color: black;\n  z-index: 999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\nion-input#uploadProfile {\n  position: absolute;\n  z-index: 99999;\n  width: 48px;\n  height: 59px;\n  margin-left: 64%;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\n#rightImage {\n  width: 100%;\n  height: auto;\n  padding-bottom: 10px;\n  float: right;\n}\n\n#rightImage img {\n  max-width: 31%;\n  border: 0;\n  float: right;\n  margin-right: 15px;\n  border-radius: 10px;\n}\n\n#leftImage {\n  width: 100%;\n  height: auto;\n  padding-bottom: 10px;\n  float: left;\n}\n\n#leftImage img {\n  max-width: 31%;\n  border: 0;\n  float: right;\n  margin-left: 15px;\n  border-radius: 10px;\n}\n\ndiv#imageBox {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  top: 0;\n  z-index: 1000;\n  display: none;\n}\n\ndiv#imageBox img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 30%;\n}\n\nion-icon#closeIcon {\n  font-size: 30px;\n  color: white;\n  float: right;\n  margin-right: 15px;\n  margin-top: 30px;\n}\n\nion-icon#micIcon {\n  font-size: 27px;\n  position: absolute;\n  margin-left: 59%;\n  margin-top: 17px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREdFO0VBQ0UsV0FBQTtBQ0RKOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0hGOztBREtFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSEo7O0FET0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGRpdiNjaGF0dGluZ1dpdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cblxuaW9uLWljb24jc2VuZEljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3BhbiNzZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVzc2FnZVNlbnRCeU1le1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuXG5zcGFuI25vdFNlbnRCeU1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNtZXNzYWdlTm90U2VudEJ5TWV7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5kaXYjbWVzc2FnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYjY2hhdHNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgaGVpZ2h0OiA3NSU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNtZXNzYWdlSW5wdXR7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA3MXB4O1xufVxuXG5pbnB1dCNtZXNzYWdlIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuXG4gIGlucHV0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cblxuaW9uLWljb24jZmlsZUljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDY5JTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0I3VwbG9hZFByb2ZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA1OXB4O1xuICBtYXJnaW4tbGVmdDogNjQlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jcmlnaHRJbWFnZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMxJTtcbiAgICBib3JkZXI6IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbiNsZWZ0SW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMxJTtcbiAgICBib3JkZXI6IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuXG5kaXYjaW1hZ2VCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbn1cbn1cblxuaW9uLWljb24jY2xvc2VJY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24taWNvbiNtaWNJY29uIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1OSU7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbn0iLCJkaXYjY2hhdHRpbmdXaXRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbmlvbi1pY29uI3NlbmRJY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNwYW4jc2VudEJ5TWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuI21lc3NhZ2VTZW50QnlNZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5zcGFuI25vdFNlbnRCeU1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNtZXNzYWdlTm90U2VudEJ5TWUge1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuZGl2I21lc3NhZ2VCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZGl2I2NoYXRzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogNzUlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jbWVzc2FnZUlucHV0IHtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDcxcHg7XG59XG5cbmlucHV0I21lc3NhZ2Uge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCNtZXNzYWdlIGlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pY29uI2ZpbGVJY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA2OSU7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiA5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWRQcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNTlweDtcbiAgbWFyZ2luLWxlZnQ6IDY0JTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI3JpZ2h0SW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI3JpZ2h0SW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAzMSU7XG4gIGJvcmRlcjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNsZWZ0SW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4jbGVmdEltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMzElO1xuICBib3JkZXI6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmRpdiNpbWFnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmRpdiNpbWFnZUJveCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuXG5pb24taWNvbiNjbG9zZUljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pY29uI21pY0ljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDU5JTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/messaging/messaging.page.ts":
/*!*********************************************!*\
  !*** ./src/app/messaging/messaging.page.ts ***!
  \*********************************************/
/*! exports provided: MessagingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPage", function() { return MessagingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");













var MessagingPage = /** @class */ (function () {
    function MessagingPage(media, mediaCapture, fstorage, tabs, toastController, statusBar, storage, database, route, requests) {
        this.media = media;
        this.mediaCapture = mediaCapture;
        this.fstorage = fstorage;
        this.tabs = tabs;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.storage = storage;
        this.database = database;
        this.route = route;
        this.requests = requests;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    MessagingPage.prototype.ngOnInit = function () {
    };
    MessagingPage.prototype.notBottom = function () {
        this.tabs.bottom = false;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#messageInput").css("margin-bottom", "0px");
    };
    MessagingPage.prototype.displayBottom = function () {
        this.tabs.bottom = true;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#messageInput").css("margin-bottom", "56px");
    };
    MessagingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.tabs.bgColor = '#000000';
        this.statusBar.styleDefault();
        this.storage.get('mail').then(function (val) {
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.storage.get('username').then(function (val) {
                    _this.this_username = val;
                });
                _this.getChat();
            }
        });
    };
    MessagingPage.prototype.getChat = function () {
        var _this = this;
        this.storage.get("receiverName").then(function (name) {
            _this.name = name;
            console.log(name);
            _this.storage.get("receiverSName").then(function (sname) {
                _this.sname = sname;
                _this.storage.get("receiverID").then(function (id) {
                    _this.receiverID = id;
                    _this.storage.get("receiverUsername").then(function (username) {
                        _this.receiverUsername = username;
                        //get this current user's id
                        _this.storage.get("current_userID").then(function (id) {
                            _this.this_userID = id;
                            //get the chat ID
                            var user_ids = [id, _this.receiverID];
                            console.log(user_ids);
                            console.log(Math.max.apply(Math, user_ids), Math.min.apply(Math, user_ids));
                            var chat_id = JSON.stringify(Math.max.apply(Math, user_ids)) + JSON.stringify(Math.min.apply(Math, user_ids));
                            _this.chatsRef$ = _this.chatsRef$ = _this.database.list("chats/" + chat_id, function (ref) { return ref.orderByChild('date'); }).valueChanges();
                            _this.chatsRef$.subscribe(function () {
                                _this.scroll();
                            });
                        });
                    });
                });
            });
        });
    };
    MessagingPage.prototype.sendMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var messageInput;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                messageInput = jquery__WEBPACK_IMPORTED_MODULE_9__("#message").val();
                console.log(messageInput);
                console.log(this.receiverUsername, this.receiverID);
                //get this user's id
                this.storage.get("current_userID").then(function (id) {
                    console.log(id);
                    var user_ids = [id, _this.receiverID];
                    console.log(user_ids);
                    console.log(Math.max.apply(Math, user_ids), Math.min.apply(Math, user_ids));
                    var chat_id = JSON.stringify(Math.max.apply(Math, user_ids)) + JSON.stringify(Math.min.apply(Math, user_ids));
                    console.log(chat_id);
                    if (messageInput != "") {
                        //file Upload
                        var message_1;
                        var fileN = void 0;
                        if (_this.file != undefined) {
                            var profile_url = 'https://uploaded.herokuapp.com/users/users';
                            _this.chatUpload = _this.requests.UploadChatFile(profile_url, _this.file.name, _this.file);
                            _this.chatUpload.subscribe(function (re) {
                                console.log("re", re);
                                message_1 = { "sender": _this.this_username, "to": _this.receiverUsername, "message": messageInput, "file": re };
                                _this.file = undefined;
                                _this.database.list("chats/" + chat_id).push(message_1);
                            });
                        }
                        else {
                            message_1 = { "sender": _this.this_username, "to": _this.receiverUsername, "message": messageInput };
                            _this.file = undefined;
                            _this.database.list("chats/" + chat_id).push(message_1);
                        }
                        //send message notification
                        _this.sendMessageNotification(_this.receiverUsername, messageInput, _this.this_username);
                        jquery__WEBPACK_IMPORTED_MODULE_9__("#message").val("");
                        _this.scroll();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MessagingPage.prototype.scroll = function () {
        setTimeout(function () {
            var objDiv = document.getElementById("chatsContainer");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 10);
    };
    //send notifcation of new message
    MessagingPage.prototype.sendMessageNotification = function (receiver, message, from) {
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var new_message = this.requests.sendMessageNotification(profile_url, receiver, from, message);
        new_message.subscribe();
    };
    MessagingPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        console.log(this.file.name);
        this.presentToast("FIle selected: " + this.file.name);
    };
    //firebase storage
    MessagingPage.prototype.presentToast = function (message) {
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
    MessagingPage.prototype.viewImage = function (image) {
        console.log(image);
        this.imageToView = image;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#imageBox").show();
    };
    MessagingPage.prototype.closeImage = function () {
        jquery__WEBPACK_IMPORTED_MODULE_9__("#imageBox").hide();
        this.imageToView = "";
    };
    MessagingPage.prototype.captureAudio = function () {
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureAudio(options)
            .then(function (data) { return console.log(data); }, function (err) { return console.error(err); });
    };
    MessagingPage.ctorParameters = function () { return [
        { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"] },
        { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] },
        { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_10__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"] }
    ]; };
    MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messaging',
            template: __webpack_require__(/*! raw-loader!./messaging.page.html */ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html"),
            styles: [__webpack_require__(/*! ./messaging.page.scss */ "./src/app/messaging/messaging.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_10__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]])
    ], MessagingPage);
    return MessagingPage;
}());



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-module-es5.js.map