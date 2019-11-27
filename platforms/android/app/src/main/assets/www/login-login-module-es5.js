(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id='content'>\n    \n    <div class='login'>\n        <img src='assets/Logo.jpg' alt='logo' class=\"logoImg\"><br/>\n        <h1 id='UploadedHeading'>Welcome to Uploaded</h1>\n        <p class='signInPrompt'>Sign in to continue</p>\n        <input type=\"email\" (blur)=\"enableBottom()\" (focus)=\"disableBottom()\" id='emailInput' placeholder=\"Email\" required/><br/>\n        <input type=\"password\" (blur)=\"enableBottom()\" (focus)=\"disableBottom()\" id='passwordInput' placeholder=\"Password\" required/><br/>\n        <ion-button expand=\"block\" size=\"default\" class='loginButton' color=\"primary\" (click) ='login()' >Sign in</ion-button>\n        <p class='bottomText' *ngIf=\"Bottom == true\"><span class='fgt'>Forgot password</span>  <span class='crt'>Create Account</span></p>\n    </div>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  text-align: -webkit-center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: none;\n}\n\n.logoImg {\n  width: 80px;\n  margin-top: 10%;\n  float: left;\n  margin-left: 15px;\n}\n\nh1 {\n  width: 100%;\n  float: left;\n  margin-left: 15px;\n  text-align: left;\n  color: #fc8700;\n  font-size: 20px;\n}\n\n.signInPrompt {\n  width: 100%;\n  float: left;\n  text-align: left;\n  margin-left: 15px;\n  font-size: 15px;\n  margin-top: 0px;\n}\n\n.bottomText {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 20px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.bottomText .fgt {\n  float: left;\n  margin-left: 15px;\n  cursor: pointer;\n}\n\n.bottomText .crt {\n  float: right;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\n.logotext {\n  width: 200px;\n  margin-top: 20px;\n}\n\ninput {\n  margin-top: 20px;\n  width: 90%;\n  height: 43px;\n  border-radius: 5px;\n  border: 1px solid #ececec;\n  padding-left: 15px;\n  outline: none;\n  color: #009688;\n  background: #f2f4f3;\n}\n\nion-button {\n  width: 90%;\n  margin-top: 37px;\n}\n\n.registerButton {\n  margin-top: 20px !important;\n}\n\nimg.logofont {\n  width: 122px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRFI7O0FETUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEo7O0FET0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLDJCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuOiMwMDk2ODg7XHJcbi5sb2dpbntcclxuICAgIHRleHQtYWxpZ246LXdlYmtpdC1jZW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ29JbWd7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmM4NzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbkluUHJvbXB0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmJvdHRvbVRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5mZ3R7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcnR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nb3RleHR7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwOTY4ODtcclxuICAgIGJhY2tncm91bmQ6ICNmMmY0ZjM7XHJcbn1cclxuXHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbn1cclxuXHJcbi5yZWdpc3RlckJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nLmxvZ29mb250IHtcclxuICAgIHdpZHRoOiAxMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbiIsIi5sb2dpbiB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvSW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmM4NzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zaWduSW5Qcm9tcHQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmJvdHRvbVRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib3R0b21UZXh0IC5mZ3Qge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib3R0b21UZXh0IC5jcnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nb3RleHQge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwMDk2ODg7XG4gIGJhY2tncm91bmQ6ICNmMmY0ZjM7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAzN3B4O1xufVxuXG4ucmVnaXN0ZXJCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmltZy5sb2dvZm9udCB7XG4gIHdpZHRoOiAxMjJweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(toast, loadingController, statusBar, route, requests, storage) {
        this.toast = toast;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.route = route;
        this.requests = requests;
        this.storage = storage;
        this.Bottom = true;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        console.log('page has loaded');
        this.presentLoading();
        //check for stored credentials
        this.storage.get('mail').then(function (val) {
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".login").show();
            }
            else {
                _this.route.navigate(['/home/tabs/tab1']);
            }
        });
    };
    LoginPage.prototype.disableBottom = function () {
        this.Bottom = false;
        console.log("bottom disabled");
    };
    LoginPage.prototype.enableBottom = function () {
        this.Bottom = true;
        console.log("bottom enabled");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var emailInput = jquery__WEBPACK_IMPORTED_MODULE_3__('#emailInput').val();
        var passwordInput = jquery__WEBPACK_IMPORTED_MODULE_3__('#passwordInput').val();
        var message = 'Please fill in all fields';
        if (emailInput === '' || passwordInput === '') {
            console.log('Error in loggin in');
            this.presentLoadingWithOptions(message);
        }
        else {
            var url = 'https://uploaded.herokuapp.com/users/users';
            this.presentLoading();
            var login = this.requests.Login(url, emailInput, passwordInput);
            login.subscribe(function (data) {
                console.log(data.data);
                if (data.data == "Authentication test passed") {
                    _this.storage.set('mail', emailInput);
                    _this.storage.set('password', emailInput);
                    _this.storage.set('username', data.username);
                    _this.storage.set('current_userID', data.id);
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").text("Login successful");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").text(JSON.stringify(emailInput));
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").css("color", "#0d8479");
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").css("color", "#0d8479");
                    _this.route.navigate(['home/tabs/tab1']);
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").text("User not found");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").text(JSON.stringify(emailInput));
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#UploadedHeading").css("color", "#f44336");
                    jquery__WEBPACK_IMPORTED_MODULE_3__(".signInPrompt").css("color", "#f44336");
                }
            });
        }
    };
    //loading component
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            duration: 2000
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
    //
    LoginPage.prototype.presentLoadingWithOptions = function (Message) {
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
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map