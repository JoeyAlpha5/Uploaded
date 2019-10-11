(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"chattingWith\">{{ name }} {{ sname }}</div> \n\n\n  <div id=\"chatsContainer\" >\n    <div id=\"messageBox\" *ngFor='let message of ( chatsRef$ | async)'>\n        <span id=\"sentByMe\" *ngIf='message.sender == this_username'>{{ message.sender }}</span>\n        <p id=\"messageSentByMe\" *ngIf='message.sender == this_username'>{{message.message }}</p>\n    </div>\n    <div id=\"messageBox\" *ngFor='let message of ( chatsRef$ | async)'>\n      <span id=\"notSentByMe\" *ngIf='message.sender != this_username'>{{ message.sender }}</span>\n      <p id=\"messageNotSentByMe\" *ngIf='message.sender != this_username'>{{message.message }}</p>\n    </div>\n  </div>\n\n  <div id=\"messageInput\">\n    <input id=\"message\" type=\"text\" placeholder=\"Message...\">\n    <ion-icon name=\"send\" id=\"sendIcon\" (click)=\"sendMessage()\"></ion-icon>\n  </div>\n  <div id=\"bottomBar\"></div>\n</ion-content>\n"

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

module.exports = "#bottomBar {\n  background: #000000;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  height: 57px;\n}\n\ndiv#chattingWith {\n  width: 100%;\n  height: 52px;\n  background: #f7f7f7;\n  color: gray;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 15px;\n}\n\nion-icon#sendIcon {\n  float: right;\n  margin-right: 15px;\n  font-size: 36px;\n  color: #000000;\n  margin-top: 10px;\n}\n\nspan#sentByMe {\n  font-size: 12px;\n  color: gray;\n  float: right;\n  width: 100%;\n  text-align: right;\n  padding-right: 15px;\n}\n\n#messageSentByMe {\n  width: auto;\n  float: right;\n  text-align: right;\n  margin-right: 15px;\n  background: orange;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\nspan#notSentByMe {\n  font-size: 12px;\n  color: gray;\n  float: left;\n  width: 100%;\n  text-align: left;\n  padding-left: 15px;\n}\n\n#messageNotSentByMe {\n  width: auto;\n  float: left;\n  text-align: left;\n  margin-right: 15px;\n  background: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\ndiv#messageBox {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 10px;\n}\n\n#messageInput {\n  bottom: 0px;\n  position: fixed;\n  margin-bottom: 56px;\n  width: 100%;\n  background: white;\n  height: 71px;\n}\n\ninput#message {\n  width: 75%;\n  margin-left: 15px;\n  height: 61px;\n  border: 1px solid rgba(128, 128, 128, 0.14);\n  border-radius: 15px;\n  padding-left: 10px;\n  outline: none;\n}\n\ninput#message input {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRkY7O0FESUU7RUFDRSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdpbmcvbWVzc2FnaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3R0b21CYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTdweDtcbiAgfVxuXG4gIGRpdiNjaGF0dGluZ1dpdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cblxuaW9uLWljb24jc2VuZEljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3BhbiNzZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVzc2FnZVNlbnRCeU1le1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuXG5zcGFuI25vdFNlbnRCeU1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNtZXNzYWdlTm90U2VudEJ5TWV7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5kaXYjbWVzc2FnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbiNtZXNzYWdlSW5wdXR7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA3MXB4O1xufVxuXG5pbnB1dCNtZXNzYWdlIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuXG4gIGlucHV0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG4iLCIjYm90dG9tQmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU3cHg7XG59XG5cbmRpdiNjaGF0dGluZ1dpdGgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWljb24jc2VuZEljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3BhbiNzZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVzc2FnZVNlbnRCeU1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNweCAxNXB4IDIycHg7XG59XG5cbnNwYW4jbm90U2VudEJ5TWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI21lc3NhZ2VOb3RTZW50QnlNZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5kaXYjbWVzc2FnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jbWVzc2FnZUlucHV0IHtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDcxcHg7XG59XG5cbmlucHV0I21lc3NhZ2Uge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCNtZXNzYWdlIGlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var MessagingPage = /** @class */ (function () {
    function MessagingPage(statusBar, storage, database, route) {
        this.statusBar = statusBar;
        this.storage = storage;
        this.database = database;
        this.route = route;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.chatsRef$ = this.database.list("chats").valueChanges();
    }
    MessagingPage.prototype.ngOnInit = function () {
    };
    MessagingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
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
                    _this.receiverUsername = id;
                });
            });
        });
    };
    MessagingPage.prototype.sendMessage = function () {
        var messageInput = jquery__WEBPACK_IMPORTED_MODULE_6__("#message").val();
        console.log(messageInput);
        if (messageInput != "") {
            var message = { "sender": this.this_username, "to": this.receiverUsername, "message": messageInput };
            this.database.list("chats").push(message);
            jquery__WEBPACK_IMPORTED_MODULE_6__("#message").val("");
        }
    };
    MessagingPage.ctorParameters = function () { return [
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messaging',
            template: __webpack_require__(/*! raw-loader!./messaging.page.html */ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html"),
            styles: [__webpack_require__(/*! ./messaging.page.scss */ "./src/app/messaging/messaging.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MessagingPage);
    return MessagingPage;
}());



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-module-es5.js.map