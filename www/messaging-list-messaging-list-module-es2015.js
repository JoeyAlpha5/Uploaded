(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-list-messaging-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging-list/messaging-list.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging-list/messaging-list.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messagingList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/messaging-list/messaging-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/messaging-list/messaging-list.module.ts ***!
  \*********************************************************/
/*! exports provided: MessagingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingListPageModule", function() { return MessagingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messaging_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging-list.page */ "./src/app/messaging-list/messaging-list.page.ts");







const routes = [
    {
        path: '',
        component: _messaging_list_page__WEBPACK_IMPORTED_MODULE_6__["MessagingListPage"]
    }
];
let MessagingListPageModule = class MessagingListPageModule {
};
MessagingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_messaging_list_page__WEBPACK_IMPORTED_MODULE_6__["MessagingListPage"]]
    })
], MessagingListPageModule);



/***/ }),

/***/ "./src/app/messaging-list/messaging-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/messaging-list/messaging-list.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy1saXN0L21lc3NhZ2luZy1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/messaging-list/messaging-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/messaging-list/messaging-list.page.ts ***!
  \*******************************************************/
/*! exports provided: MessagingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingListPage", function() { return MessagingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagingListPage = class MessagingListPage {
    constructor() { }
    ngOnInit() {
    }
};
MessagingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging-list',
        template: __webpack_require__(/*! raw-loader!./messaging-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/messaging-list/messaging-list.page.html"),
        styles: [__webpack_require__(/*! ./messaging-list.page.scss */ "./src/app/messaging-list/messaging-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessagingListPage);



/***/ })

}]);
//# sourceMappingURL=messaging-list-messaging-list-module-es2015.js.map