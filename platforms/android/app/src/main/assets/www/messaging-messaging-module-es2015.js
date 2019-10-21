(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"chattingWith\">{{ name }} {{ sname }}</div> \n\n\n  <div id=\"chatsContainer\" >\n    <div id=\"messageBox\" *ngFor='let message of ( chatsRef$ | async)'>\n        <span id=\"sentByMe\" *ngIf='message.sender == this_username'>{{ message.sender }}</span>\n        <p id=\"messageSentByMe\" *ngIf='message.sender == this_username'>{{message.message }}</p>\n\n      <span id=\"notSentByMe\" *ngIf='message.sender != this_username'>{{ message.sender }}</span>\n      <p id=\"messageNotSentByMe\" *ngIf='message.sender != this_username'>{{message.message }}</p>\n    </div>\n  </div>\n\n  <div id=\"messageInput\">\n    <input id=\"message\" (focus)=\"notBottom()\" (blur)=\"displayBottom()\" type=\"text\" placeholder=\"Message...\">\n    <ion-icon name=\"send\" id=\"sendIcon\" (click)=\"sendMessage()\"></ion-icon>\n  </div> \n</ion-content>\n"

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

module.exports = "div#chattingWith {\n  width: 100%;\n  height: 52px;\n  background: #f7f7f7;\n  color: gray;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 15px;\n}\n\nion-icon#sendIcon {\n  float: right;\n  margin-right: 15px;\n  font-size: 36px;\n  color: #000000;\n  margin-top: 10px;\n}\n\nspan#sentByMe {\n  font-size: 12px;\n  color: gray;\n  float: right;\n  width: 100%;\n  text-align: right;\n  padding-right: 15px;\n}\n\n#messageSentByMe {\n  width: auto;\n  float: right;\n  text-align: right;\n  margin-right: 15px;\n  background: orange;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\nspan#notSentByMe {\n  font-size: 12px;\n  color: gray;\n  float: left;\n  width: 100%;\n  text-align: left;\n  padding-left: 15px;\n}\n\n#messageNotSentByMe {\n  width: auto;\n  float: left;\n  text-align: left;\n  margin-right: 15px;\n  background: black;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 3px 15px 22px;\n}\n\ndiv#messageBox {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 10px;\n}\n\ndiv#chatsContainer {\n  width: 100%;\n  float: left;\n  padding-bottom: 100px;\n  height: 75%;\n  overflow: scroll;\n}\n\n#messageInput {\n  bottom: 0px;\n  position: fixed;\n  margin-bottom: 56px;\n  width: 100%;\n  background: white;\n  height: 71px;\n}\n\ninput#message {\n  width: 75%;\n  margin-left: 15px;\n  height: 61px;\n  border: 1px solid rgba(128, 128, 128, 0.14);\n  border-radius: 15px;\n  padding-left: 10px;\n  outline: none;\n}\n\ninput#message input {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREdFO0VBQ0UsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGRpdiNjaGF0dGluZ1dpdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cblxuaW9uLWljb24jc2VuZEljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3BhbiNzZW50QnlNZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVzc2FnZVNlbnRCeU1le1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuXG5zcGFuI25vdFNlbnRCeU1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNtZXNzYWdlTm90U2VudEJ5TWV7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5kaXYjbWVzc2FnZUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYjY2hhdHNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgaGVpZ2h0OiA3NSU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNtZXNzYWdlSW5wdXR7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA3MXB4O1xufVxuXG5pbnB1dCNtZXNzYWdlIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuXG4gIGlucHV0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG4iLCJkaXYjY2hhdHRpbmdXaXRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbmlvbi1pY29uI3NlbmRJY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNwYW4jc2VudEJ5TWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuI21lc3NhZ2VTZW50QnlNZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHggMTVweCAyMnB4O1xufVxuXG5zcGFuI25vdFNlbnRCeU1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNtZXNzYWdlTm90U2VudEJ5TWUge1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3B4IDE1cHggMjJweDtcbn1cblxuZGl2I21lc3NhZ2VCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZGl2I2NoYXRzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogNzUlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jbWVzc2FnZUlucHV0IHtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDcxcHg7XG59XG5cbmlucHV0I21lc3NhZ2Uge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCNtZXNzYWdlIGlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");









let MessagingPage = class MessagingPage {
    constructor(tabs, statusBar, storage, database, route, requests) {
        this.tabs = tabs;
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
        jquery__WEBPACK_IMPORTED_MODULE_7__("#messageInput").css("margin-bottom", "0px");
    }
    displayBottom() {
        this.tabs.bottom = true;
        jquery__WEBPACK_IMPORTED_MODULE_7__("#messageInput").css("margin-bottom", "56px");
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
                this.route.navigate(['']);
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
        let messageInput = jquery__WEBPACK_IMPORTED_MODULE_7__("#message").val();
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
                let message = { "sender": this.this_username, "to": this.receiverUsername, "message": messageInput };
                //send message notification
                this.sendMessageNotification(this.receiverUsername, messageInput, this.this_username);
                this.database.list("chats/" + chat_id).push(message);
                jquery__WEBPACK_IMPORTED_MODULE_7__("#message").val("");
                this.scroll();
            }
        });
    }
    scroll() {
        setTimeout(function () {
            let objDiv = document.getElementById("chatsContainer");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 10);
    }
    //send notifcation of new message
    sendMessageNotification(receiver, message, from) {
        let profile_url = 'https://uploaded.herokuapp.com/users/users';
        let new_message = this.requests.sendMessageNotification(profile_url, receiver, from, message);
        new_message.subscribe();
    }
};
MessagingPage.ctorParameters = () => [
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]])
], MessagingPage);



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-module-es2015.js.map