(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back\" id=\"backBtn\" (click)=\"back()\"></ion-icon>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"chattingWith\">{{ name }} {{ sname }}</div> \n\n  <div id=\"imageBox\">\n    <ion-icon name=\"close\" id=\"closeIcon\" (click)=\"closeImage()\"></ion-icon>\n    <img src=\"https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/{{ imageToView }}\"/>\n  </div>\n\n  <div id=\"chatsContainer\" >\n    <div id=\"messageBox\" *ngFor='let message of ( chatsRef$ | async)'>\n        <span id=\"sentByMe\" *ngIf='message.sender == this_username'>{{ message.sender }}</span>\n        <p id=\"messageSentByMe\" *ngIf='message.sender == this_username'>{{message.message }}</p>\n        <div id=\"rightImage\" *ngIf='message.sender == this_username'>\n          <img *ngIf='message.file' (click)=\"viewImage(message.file)\" src=\"https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/{{ message.file }}\" />\n        </div>\n\n      <span id=\"notSentByMe\" *ngIf='message.sender != this_username'>{{ message.sender }}</span>\n      <p id=\"messageNotSentByMe\" *ngIf='message.sender != this_username'>{{message.message }}</p>\n      <div id=\"leftImage\" *ngIf='message.sender != this_username'>\n        <img *ngIf='message.file' (click)=\"viewImage(message.file)\" src=\"https://res.cloudinary.com/drm3otayc/image/upload/v1567818053/{{ message.file }}\" />\n      </div>\n    </div>\n  </div>\n\n  <div id=\"messageInput\">\n    <ion-icon name=\"attach\" id=\"fileIcon\"></ion-icon>\n     <ion-icon name=\"mic\"  (click)=\"captureAudio()\" id=\"micIcon\"></ion-icon>\n    <ion-input type=\"file\" id=\"uploadProfile\" (change)=\"changeListener($event)\" type=\"file\" accept=\"image/*\"></ion-input>\n    <input id=\"message\" (focus)=\"notBottom()\" (blur)=\"displayBottom()\" type=\"text\" placeholder=\"Message...\">\n    <ion-icon name=\"send\" id=\"sendIcon\" (click)=\"sendMessage()\"></ion-icon>\n  </div> \n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging.page */ "./src/app/messaging/messaging.page.ts");







const routes = [
    {
        path: '',
        component: _messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]
    }
];
let MessagingPageModule = class MessagingPageModule {
};
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



/***/ }),

/***/ "./src/app/messaging/messaging.page.scss":
/*!***********************************************!*\
  !*** ./src/app/messaging/messaging.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#chattingWith {\n  width: 100%;\n  height: 52px;\n  background: #f7f7f7;\n  color: gray;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 15px;\n}\n\nion-icon#sendIcon {\n  float: right;\n  margin-right: 15px;\n  font-size: 36px;\n  color: #000000;\n  margin-top: 10px;\n}\n\nspan#sentByMe {\n  font-size: 12px;\n  color: gray;\n  float: right;\n  width: 100%;\n  text-align: right;\n  padding-right: 15px;\n}\n\n#messageSentByMe {\n  width: auto;\n  float: right;\n  text-align: right;\n  margin-right: 15px;\n  background: orange;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\nspan#notSentByMe {\n  font-size: 12px;\n  color: gray;\n  float: left;\n  width: 100%;\n  text-align: left;\n  padding-left: 15px;\n}\n\n#messageNotSentByMe {\n  width: auto;\n  float: left;\n  text-align: left;\n  margin-right: 15px;\n  background: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\ndiv#messageBox {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 10px;\n}\n\ndiv#chatsContainer {\n  width: 100%;\n  float: left;\n  padding-bottom: 100px;\n  height: 75%;\n  overflow: scroll;\n}\n\n#messageInput {\n  bottom: 0px;\n  position: fixed;\n  margin-bottom: 56px;\n  width: 100%;\n  background: white;\n  height: 71px;\n}\n\ninput#message {\n  width: 75%;\n  margin-left: 15px;\n  height: 61px;\n  border: 1px solid rgba(128, 128, 128, 0.14);\n  border-radius: 15px;\n  padding-left: 10px;\n  outline: none;\n}\n\ninput#message input {\n  float: left;\n}\n\nion-icon#fileIcon {\n  font-size: 28px;\n  position: absolute;\n  margin-left: 69%;\n  margin-top: 17px;\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  color: black;\n  z-index: 999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\nion-input#uploadProfile {\n  position: absolute;\n  z-index: 99999;\n  width: 48px;\n  height: 59px;\n  margin-left: 64%;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\n#rightImage {\n  width: 100%;\n  height: auto;\n  padding-bottom: 10px;\n  float: right;\n}\n\n#rightImage img {\n  max-width: 31%;\n  border: 0;\n  float: right;\n  margin-right: 15px;\n  border-radius: 10px;\n}\n\n#leftImage {\n  width: 100%;\n  height: auto;\n  padding-bottom: 10px;\n  float: left;\n}\n\n#leftImage img {\n  max-width: 31%;\n  border: 0;\n  float: right;\n  margin-left: 15px;\n  border-radius: 10px;\n}\n\ndiv#imageBox {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  top: 0;\n  z-index: 1000;\n  display: none;\n}\n\ndiv#imageBox img {\n  max-width: 100%;\n  border: 0;\n  margin-top: 30%;\n}\n\nion-icon#backBtn {\n  float: left;\n  margin-left: 15px;\n  margin-top: 3px;\n  font-size: 23px;\n}\n\nion-icon#closeIcon {\n  font-size: 30px;\n  color: white;\n  float: right;\n  margin-right: 15px;\n  margin-top: 30px;\n}\n\nion-icon#micIcon {\n  font-size: 27px;\n  position: absolute;\n  margin-left: 59%;\n  margin-top: 17px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREdFO0VBQ0UsV0FBQTtBQ0RKOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0hGOztBREtFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSEo7O0FET0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBkaXYjY2hhdHRpbmdXaXRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG5cbmlvbi1pY29uI3NlbmRJY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNwYW4jc2VudEJ5TWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuI21lc3NhZ2VTZW50QnlNZXtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNweCAxNXB4IDIycHg7XG59XG5cblxuc3BhbiNub3RTZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4jbWVzc2FnZU5vdFNlbnRCeU1le1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuZGl2I21lc3NhZ2VCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZGl2I2NoYXRzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogNzUlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jbWVzc2FnZUlucHV0e1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNzFweDtcbn1cblxuaW5wdXQjbWVzc2FnZSB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDYxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcblxuICBpbnB1dHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5cbmlvbi1pY29uI2ZpbGVJY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA2OSU7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiA5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCN1cGxvYWRQcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNTlweDtcbiAgbWFyZ2luLWxlZnQ6IDY0JTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI3JpZ2h0SW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMSU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuXG4jbGVmdEltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMSU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuZGl2I2ltYWdlQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG59XG59XG5cbmlvbi1pY29uI2JhY2tCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24taWNvbiNjbG9zZUljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pY29uI21pY0ljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDU5JTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufSIsImRpdiNjaGF0dGluZ1dpdGgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWljb24jc2VuZEljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3BhbiNzZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVzc2FnZVNlbnRCeU1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNweCAxNXB4IDIycHg7XG59XG5cbnNwYW4jbm90U2VudEJ5TWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI21lc3NhZ2VOb3RTZW50QnlNZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5kaXYjbWVzc2FnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYjY2hhdHNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgaGVpZ2h0OiA3NSU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNtZXNzYWdlSW5wdXQge1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNzFweDtcbn1cblxuaW5wdXQjbWVzc2FnZSB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDYxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0I21lc3NhZ2UgaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWljb24jZmlsZUljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDY5JTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0I3VwbG9hZFByb2ZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA1OXB4O1xuICBtYXJnaW4tbGVmdDogNjQlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jcmlnaHRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4jcmlnaHRJbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDMxJTtcbiAgYm9yZGVyOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2xlZnRJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbiNsZWZ0SW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAzMSU7XG4gIGJvcmRlcjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZGl2I2ltYWdlQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2I2ltYWdlQm94IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG5cbmlvbi1pY29uI2JhY2tCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24taWNvbiNjbG9zZUljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pY29uI21pY0ljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDU5JTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let MessagingPage = class MessagingPage {
    constructor(location, media, mediaCapture, fstorage, tabs, toastController, statusBar, storage, database, route, requests) {
        this.location = location;
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
    ngOnInit() {
    }
    notBottom() {
        this.tabs.bottom = false;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#messageInput").css("margin-bottom", "0px");
    }
    displayBottom() {
        this.tabs.bottom = true;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#messageInput").css("margin-bottom", "56px");
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.tabs.bgColor = '#000000';
        this.statusBar.styleDefault();
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['login']);
            }
            else {
                this.storage.get('username').then((val) => {
                    this.this_username = val;
                });
                this.getChat();
            }
        });
    }
    getChat() {
        this.storage.get("receiverName").then((name) => {
            this.name = name;
            console.log(name);
            this.storage.get("receiverSName").then((sname) => {
                this.sname = sname;
                this.storage.get("receiverID").then((id) => {
                    this.receiverID = id;
                    this.storage.get("receiverUsername").then((username) => {
                        this.receiverUsername = username;
                        //get this current user's id
                        this.storage.get("current_userID").then((id) => {
                            this.this_userID = id;
                            //get the chat ID
                            let user_ids = [id, this.receiverID];
                            console.log(user_ids);
                            console.log(Math.max.apply(Math, user_ids), Math.min.apply(Math, user_ids));
                            let chat_id = JSON.stringify(Math.max.apply(Math, user_ids)) + JSON.stringify(Math.min.apply(Math, user_ids));
                            this.chatsRef$ = this.chatsRef$ = this.database.list("chats/" + chat_id, ref => ref.orderByChild('date')).valueChanges();
                            this.chatsRef$.subscribe(() => {
                                this.scroll();
                            });
                        });
                    });
                });
            });
        });
    }
    sendMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let messageInput = jquery__WEBPACK_IMPORTED_MODULE_9__("#message").val();
            console.log(messageInput);
            console.log(this.receiverUsername, this.receiverID);
            //get this user's id
            this.storage.get("current_userID").then((id) => {
                console.log(id);
                let user_ids = [id, this.receiverID];
                console.log(user_ids);
                console.log(Math.max.apply(Math, user_ids), Math.min.apply(Math, user_ids));
                let chat_id = JSON.stringify(Math.max.apply(Math, user_ids)) + JSON.stringify(Math.min.apply(Math, user_ids));
                console.log(chat_id);
                if (messageInput != "") {
                    //file Upload
                    let message;
                    let fileN;
                    if (this.file != undefined) {
                        var profile_url = 'https://uploaded.herokuapp.com/users/users';
                        this.chatUpload = this.requests.UploadChatFile(profile_url, this.file.name, this.file);
                        this.chatUpload.subscribe(re => {
                            console.log("re", re);
                            message = { "sender": this.this_username, "to": this.receiverUsername, "message": messageInput, "file": re };
                            this.file = undefined;
                            this.database.list("chats/" + chat_id).push(message);
                        });
                    }
                    else {
                        message = { "sender": this.this_username, "to": this.receiverUsername, "message": messageInput };
                        this.file = undefined;
                        this.database.list("chats/" + chat_id).push(message);
                    }
                    //send message notification
                    this.sendMessageNotification(this.receiverUsername, messageInput, this.this_username);
                    jquery__WEBPACK_IMPORTED_MODULE_9__("#message").val("");
                    this.scroll();
                }
            });
        });
    }
    scroll() {
        setTimeout(function () {
            let objDiv = document.getElementById("chatsContainer");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 10);
    }
    back() {
        // this.tabs.bottom = true;
        this.location.back();
    }
    //send notifcation of new message
    sendMessageNotification(receiver, message, from) {
        let profile_url = 'https://uploaded.herokuapp.com/users/users';
        let new_message = this.requests.sendMessageNotification(profile_url, receiver, from, message);
        new_message.subscribe();
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        console.log(this.file.name);
        this.presentToast("FIle selected: " + this.file.name);
    }
    //firebase storage
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    viewImage(image) {
        console.log(image);
        this.imageToView = image;
        jquery__WEBPACK_IMPORTED_MODULE_9__("#imageBox").show();
    }
    closeImage() {
        jquery__WEBPACK_IMPORTED_MODULE_9__("#imageBox").hide();
        this.imageToView = "";
    }
    captureAudio() {
        let options = { limit: 1, duration: 30 };
        this.mediaCapture.captureAudio(options)
            .then((data) => console.log(data), (err) => console.error(err));
    }
};
MessagingPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
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
];
MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: __webpack_require__(/*! raw-loader!./messaging.page.html */ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html"),
        styles: [__webpack_require__(/*! ./messaging.page.scss */ "./src/app/messaging/messaging.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_10__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]])
], MessagingPage);



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-module-es2015.js.map