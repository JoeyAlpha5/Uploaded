(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id='content'>\n    \n    <div class='login'>\n        <img src='assets/Logo.jpg' alt='logo' class=\"logoImg\"><br/>\n        <h1 id='UploadedHeading'>Welcome to Uploaded</h1>\n        <p class='signInPrompt'>Sign in to continue</p>\n        <input type=\"email\" id='emailInput' placeholder=\"Email\" required/><br/>\n        <input type=\"password\" id='passwordInput' placeholder=\"Password\" required/><br/>\n        <ion-button expand=\"block\" size=\"default\" class='loginButton' color=\"primary\" (click) ='login()' >Sign in</ion-button>\n        <p class='bottomText'><span class='fgt'>Forgot password</span>  <span class='crt'>Create Account</span></p>\n    </div>\n\n</ion-content>\n"

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

module.exports = ".login {\n  text-align: -webkit-center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: none;\n}\n\n.logoImg {\n  width: 80px;\n  margin-top: 10%;\n  float: left;\n  margin-left: 15px;\n}\n\nh1 {\n  width: 100%;\n  float: left;\n  margin-left: 15px;\n  text-align: left;\n  color: #fc8700;\n  font-size: 20px;\n}\n\n.signInPrompt {\n  width: 100%;\n  float: left;\n  text-align: left;\n  margin-left: 15px;\n  font-size: 15px;\n  margin-top: 0px;\n}\n\n.bottomText {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 20px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.bottomText .fgt {\n  float: left;\n  margin-left: 15px;\n  cursor: pointer;\n}\n\n.bottomText .crt {\n  float: right;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\n.logotext {\n  width: 200px;\n  margin-top: 20px;\n}\n\ninput {\n  margin-top: 20px;\n  width: 90%;\n  height: 43px;\n  border-radius: 5px;\n  border: 1px solid #ececec;\n  padding-left: 15px;\n  outline: none;\n  color: #009688;\n  background: #f2f4f3;\n}\n\nion-button {\n  width: 90%;\n  margin-top: 37px;\n}\n\n.registerButton {\n  margin-top: 20px !important;\n}\n\nimg.logofont {\n  width: 122px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSwyQkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbjojMDA5Njg4O1xyXG4ubG9naW57XHJcbiAgICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvSW1ne1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZjODcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnNpZ25JblByb21wdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b21UZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuZmd0e1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY3J0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmxvZ290ZXh0e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDk2ODg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGYzO1xyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzN3B4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJCdXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZy5sb2dvZm9udCB7XHJcbiAgICB3aWR0aDogMTIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4iLCIubG9naW4ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nb0ltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZjODcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lnbkluUHJvbXB0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5ib3R0b21UZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm90dG9tVGV4dCAuZmd0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tVGV4dCAuY3J0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ290ZXh0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMDA5Njg4O1xuICBiYWNrZ3JvdW5kOiAjZjJmNGYzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMzdweDtcbn1cblxuLnJlZ2lzdGVyQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICB3aWR0aDogMTIycHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





let LoginPage = class LoginPage {
    constructor(loadingController, statusBar) {
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        console.log('page has loaded');
        //check for stored credentials
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if (email == null && password == null) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.login').show();
        }
        else {
            window.location.href = 'home/tabs/tab1';
        }
        this.presentLoading();
    }
    login() {
        const emailInput = jquery__WEBPACK_IMPORTED_MODULE_2__('#emailInput').val();
        const passwordInput = jquery__WEBPACK_IMPORTED_MODULE_2__('#passwordInput').val();
        var message = 'Please fill in all fields';
        if (emailInput === '' || passwordInput === '') {
            console.log('Error in loggin in');
            this.presentLoadingWithOptions(message);
        }
        else {
            this.presentLoading();
            jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"]({
                type: 'GET',
                url: 'https://uploaded.herokuapp.com/users/users',
                dataType: 'json',
                data: { email: emailInput, password: passwordInput, type: 'login' },
                async: true,
                success: function (data) {
                    //
                    if (data.data == "Authentication test passed") {
                        localStorage.setItem('email', JSON.stringify(emailInput));
                        localStorage.setItem('password', JSON.stringify(passwordInput));
                        localStorage.setItem('username', JSON.stringify(data.username));
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".signInPrompt").text("Login successful");
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#UploadedHeading").text(JSON.stringify(emailInput));
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#UploadedHeading").css("color", "#0d8479");
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".signInPrompt").css("color", "#0d8479");
                        window.location.href = 'home/tabs/tab1';
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".signInPrompt").text("User not found");
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#UploadedHeading").text(JSON.stringify(emailInput));
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#UploadedHeading").css("color", "#f44336");
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".signInPrompt").css("color", "#f44336");
                    }
                    console.log(data);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map