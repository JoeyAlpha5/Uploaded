(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div id=\"main\">\n    <div id=\"logo\"></div>\n    <!-- <div id=\"textLogo\"></div> -->\n    <p id=\"infoText\">\n      Stream, share and discover<br> new music videos.\n    </p>\n\n\n    <ion-button id=\"accountBtns\" class=\"createAcc\" expand=\"block\" size=\"small\" shape=\"round\">\n      Create New Account\n    </ion-button>\n    <ion-button id=\"accountBtns\" class=\"signInBtn\" expand=\"block\" fill=\"outline\" size=\"small\" shape=\"round\">\n        Sign in\n      </ion-button>\n  </div>\n</ion-content>\n "

/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"main\";\n  src: url('futuraheavy.ttf');\n}\n#main {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #2d3436;\n  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);\n  text-align: -webkit-center;\n  text-align: -moz-center;\n  font-family: \"main\";\n  color: white;\n}\n.createAcc {\n  margin-top: 50px;\n}\n.signInBtn {\n  margin-top: 20px;\n}\n#logo {\n  width: 150px;\n  height: 165px;\n  background: url('logo.png');\n  background-size: cover;\n  margin-top: 25%;\n}\np#infoText {\n  font-size: 22px;\n  margin-top: 93px;\n  line-height: 25px;\n  text-align: left;\n  margin-left: 10%;\n}\n#accountBtns {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURJQTtFQUNJLGdCQUFBO0FDREo7QURLQTtFQUNJLGdCQUFBO0FDRko7QURNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNISjtBRGFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVko7QURhQTtFQUNJLFVBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XG4gICAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvZnV0dXJhL2Z1dHVyYWhlYXZ5LnR0Zik7XG4gIH1cblxuI21haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyZDM0MzYgMCUsICMwMDAwMDAgNzQlKTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uY3JlYXRlQWNje1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cblxuLnNpZ25JbkJ0bntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuIFxufVxuXG4jbG9nb3tcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNjVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuLy8gI3RleHRMb2dve1xuLy8gICAgIHdpZHRoOiAxNTBweDtcbi8vICAgICBoZWlnaHQ6IDMycHg7XG4vLyAgICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy90ZXh0bG9nby5wbmcpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyB9XG5cbnAjaW5mb1RleHQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA5M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI2FjY291bnRCdG5ze1xuICAgIHdpZHRoOiA4MCU7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5cIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvZnV0dXJhL2Z1dHVyYWhlYXZ5LnR0Zik7XG59XG4jbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJkMzQzNiAwJSwgIzAwMDAwMCA3NCUpO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5cIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3JlYXRlQWNjIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNpZ25JbkJ0biB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE2NXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuXG5wI2luZm9UZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA5M3B4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI2FjY291bnRCdG5zIHtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPage = class MainPage {
    constructor() { }
    ngOnInit() {
    }
};
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.page.html"),
        styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainPage);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map