(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id='content'>\n    \n    <div class='login'>\n        <img src='assets/Logo.jpg' alt='logo' class=\"logoImg\"><br/>\n        <h1 id='UploadedHeading'>Welcome to Uploaded</h1>\n        <p class='signInPrompt'>Sign in to continue</p>\n        <!-- <p id=\"ignore\">Ignore if already existing*</p> -->\n        <input type=\"text\" (blur)=\"enableBottom()\" (focus)=\"disableBottom()\" id='mobileInput' placeholder=\"username\" required/><br/>\n        <input type=\"email\" (blur)=\"enableBottom()\" (focus)=\"disableBottom()\" id='emailInput' placeholder=\"Email\" required/><br/>\n        <input type=\"password\" (blur)=\"enableBottom()\" (focus)=\"disableBottom()\" id='passwordInput' placeholder=\"Password\" required/><br/>\n\n        <ion-checkbox id=\"termsOfServiceCheck\" (ionChange)=\"changeCheck($event)\"></ion-checkbox><p (click)=\"showTermsOfService()\" id=\"termsOfService\">Accept terms of service</p>\n\n        <ion-button expand=\"block\" size=\"default\" class='loginButton' color=\"primary\" (click) ='login()' >Sign in/Sign up</ion-button>\n        <!-- <p class='bottomText' *ngIf=\"Bottom == true\"><span class='fgt'>Forgot password</span>  <span class='crt'>Create Account</span></p> -->\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  text-align: -webkit-center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: none;\n}\n\n.logoImg {\n  width: 80px;\n  margin-top: 10%;\n  float: left;\n  margin-left: 15px;\n}\n\nh1 {\n  width: 100%;\n  float: left;\n  margin-left: 15px;\n  text-align: left;\n  color: #fc8700;\n  font-size: 20px;\n}\n\n.signInPrompt {\n  width: 100%;\n  float: left;\n  text-align: left;\n  margin-left: 15px;\n  font-size: 15px;\n  margin-top: 0px;\n}\n\n.bottomText {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 20px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.bottomText .fgt {\n  float: left;\n  margin-left: 15px;\n  cursor: pointer;\n}\n\n.bottomText .crt {\n  float: right;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\n.logotext {\n  width: 200px;\n  margin-top: 20px;\n}\n\ninput {\n  margin-top: 20px;\n  width: 90%;\n  height: 43px;\n  border-radius: 5px;\n  border: 1px solid #ececec;\n  padding-left: 15px;\n  outline: none;\n  color: #009688;\n  background: #f2f4f3;\n}\n\nion-button {\n  width: 90%;\n  margin-top: 37px;\n}\n\n.registerButton {\n  margin-top: 20px !important;\n}\n\nimg.logofont {\n  width: 122px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n}\n\nion-checkbox#termsOfServiceCheck {\n  float: left;\n  width: 20px;\n  margin-left: 22px;\n  margin-top: 20px;\n}\n\np#termsOfService {\n  float: left;\n  margin-left: 15px;\n  font-size: 12px;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  color: #eb5833;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRFI7O0FETUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEo7O0FET0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLDJCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuOiMwMDk2ODg7XHJcbi5sb2dpbntcclxuICAgIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ29JbWd7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmM4NzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbkluUHJvbXB0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmJvdHRvbVRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5mZ3R7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcnR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nb3RleHR7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwOTY4ODtcclxuICAgIGJhY2tncm91bmQ6ICNmMmY0ZjM7XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbn1cclxuXHJcbi5yZWdpc3RlckJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nLmxvZ29mb250IHtcclxuICAgIHdpZHRoOiAxMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2hlY2tib3gjdGVybXNPZlNlcnZpY2VDaGVjayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5wI3Rlcm1zT2ZTZXJ2aWNlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGNvbG9yOiAjZWI1ODMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0iLCIubG9naW4ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nb0ltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZjODcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lnbkluUHJvbXB0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5ib3R0b21UZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm90dG9tVGV4dCAuZmd0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tVGV4dCAuY3J0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ290ZXh0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDA5Njg4O1xuICBiYWNrZ3JvdW5kOiAjZjJmNGYzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMzdweDtcbn1cblxuLnJlZ2lzdGVyQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICB3aWR0aDogMTIycHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi1jaGVja2JveCN0ZXJtc09mU2VydmljZUNoZWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxucCN0ZXJtc09mU2VydmljZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBjb2xvcjogI2ViNTgzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");











let LoginPage = class LoginPage {
    constructor(toast, loadingController, statusBar, route, requests, storage, iab, screenOrientation) {
        this.toast = toast;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.route = route;
        this.requests = requests;
        this.storage = storage;
        this.iab = iab;
        this.screenOrientation = screenOrientation;
        this.checked = false;
        this.Bottom = true;
        this.screenOrientation.ORIENTATIONS.PORTRAIT;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    showTermsOfService() {
        //open terms of services
        const browser = this.iab.create('http://uploadedstream.com/Terms%20of%20Service%20for%20uploaded.pdf', '_system');
        browser.show();
    }
    changeCheck($event) {
        if (this.checked == false) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }
        console.log(this.checked);
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        console.log('page has loaded');
        this.presentLoading();
        //check for stored credentials
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".login").show();
            }
            else {
                this.route.navigate(['/home/tabs/tab1']);
            }
        });
    }
    disableBottom() {
        this.Bottom = false;
        console.log("bottom disabled");
    }
    enableBottom() {
        this.Bottom = true;
        console.log("bottom enabled");
    }
    login() {
        const emailInput = jquery__WEBPACK_IMPORTED_MODULE_3__('#emailInput').val();
        const passwordInput = jquery__WEBPACK_IMPORTED_MODULE_3__('#passwordInput').val();
        const mobileInput = jquery__WEBPACK_IMPORTED_MODULE_3__('#mobileInput').val();
        var message = 'Please fill in all fields';
        if (emailInput === '' || passwordInput === '' || mobileInput === '' || this.checked == false) {
            console.log('Error in loggin in');
            this.presentLoadingWithOptions(message);
        }
        else {
            let url = 'https://uploaded.herokuapp.com/users/users';
            this.presentLoading();
            let login = this.requests.Login(url, emailInput, passwordInput, mobileInput);
            login.subscribe(data => {
                console.log(data.data);
                if (data.data == "Authentication test passed") {
                    this.storage.set('mail', emailInput);
                    this.storage.set('password', emailInput);
                    this.storage.set('username', data.username);
                    this.storage.set('current_userID', data.id);
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").text("Login successful");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").text(JSON.stringify(emailInput));
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").css("color", "#0d8479");
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").css("color", "#0d8479");
                    this.route.navigate(['home/tabs/tab1']);
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").text("User not found");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").text(JSON.stringify(emailInput));
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").css("color", "#f44336");
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").css("color", "#f44336");
                }
            });
        }
    }
    //loading component
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    //
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
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map