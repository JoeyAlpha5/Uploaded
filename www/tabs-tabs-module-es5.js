(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs id=\"page\">\n\n  <ion-tab-bar slot=\"bottom\" id=\"tabs\">\n    <ion-tab-button tab=\"tab1\" id=\"tab1\">\n      <ion-icon id=\"navIcon\" name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\" id=\"tab2\">\n      <ion-icon id=\"navIcon\" name=\"search\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"upload\" id=\"tab2\" >\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" id=\"tab3\">\n      <ion-icon id=\"navIcon\" name=\"notifications\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\" id=\"tab4\">\n      <ion-icon id=\"navIcon\" name=\"person\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tabs {\n  background: transparent;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n#tab-button-tab1, #tab-button-tab2, #tab-button-tab3, #tab-button-tab4 {\n  background: transparent;\n}\n\nion-tab-button#tab-button-upload {\n  background: transparent;\n}\n\n#navIcon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLHVCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtBQ0FKOztBREdFO0VBQ0ksWUFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jdGFic3tcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICN0YWItYnV0dG9uLXRhYjEsICN0YWItYnV0dG9uLXRhYjIsICN0YWItYnV0dG9uLXRhYjMsICN0YWItYnV0dG9uLXRhYjR7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbmlvbi10YWItYnV0dG9uI3RhYi1idXR0b24tdXBsb2FkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gICNuYXZJY29ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIiN0YWJzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3RhYi1idXR0b24tdGFiMSwgI3RhYi1idXR0b24tdGFiMiwgI3RhYi1idXR0b24tdGFiMywgI3RhYi1idXR0b24tdGFiNCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tdGFiLWJ1dHRvbiN0YWItYnV0dG9uLXVwbG9hZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jbmF2SWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        // Put here the code you want to execute
        console.log('page has loaded');
        //check if user is signed in
        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        if (email == null && password == null) {
            window.location.href = '';
        }
        else {
            console.log('User is signed in');
        }
    };
    //upload playlist
    TabsPage.prototype.upload = function () {
        console.log("uploaded");
        var fileUpload = document.getElementsByClassName("native-input sc-ion-input-md")[0].files[0];
        var email = JSON.parse(localStorage.getItem("email"));
        console.log(fileUpload);
        var message = fileUpload.name;
        $("#progressDiv").show();
        //this.presentLoading(message);
        var fd = new FormData();
        fd.append('upload', fileUpload);
        fd.append('type', "fileUpload");
        fd.append('email', email);
        //upload file
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/users/users',
            dataType: 'json',
            data: fd,
            async: true,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#progressDiv").hide();
                window.location.href = 'home/tabs/tab4';
            },
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("default~login-login-module~tab1-tab1-module~tab4-tab4-module"), __webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(function (m) { return m.Tab1PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(function (m) { return m.Tab2PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab3-tab3-module */ "tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | tab4-tab4-module */[__webpack_require__.e("default~login-login-module~tab1-tab1-module~tab4-tab4-module"), __webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null, /*! ../tab4/tab4.module */ "./src/app/tab4/tab4.module.ts")).then(function (m) { return m.Tab4PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'upload',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | upload-upload-module */[__webpack_require__.e("common"), __webpack_require__.e("upload-upload-module")]).then(__webpack_require__.bind(null, /*! ../upload/upload.module */ "./src/app/upload/upload.module.ts")).then(function (m) { return m.UploadPageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map