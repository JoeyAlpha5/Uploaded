(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list id=\"notifs\">\n    <ion-item-sliding #item *ngFor='let notif of ( notificationssRef$ | async)?.slice().reverse(); let i = index'>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.the_receiver == username\">\n        <ion-icon  [ngStyle]=\"{ color:'#F44336' }\" name=\"heart\"></ion-icon>\n        <div *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + notif.profile+ '.jpg)'}\"></div>\n        <div *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span>{{ notif.msg }}</span>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.to == username\">\n        <ion-icon [ngStyle]=\"{ color:'#FF9800' }\" name=\"text\"></ion-icon>\n        <span id=\"msg\">{{ notif.msg }}</span>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.type == 'follow'\">\n        <ion-icon [ngStyle]=\"{ color:'#FF9800' }\" name=\"person-add\"></ion-icon>\n        <span id=\"msg\">{{ notif.msg }}</span>\n      </ion-item>\n      <ion-item-options side=\"start\" id=\"options\">\n        <button ion-button id='viewUser'  (click)=\"viewUser(notif.userid)\"><ion-icon name=\"contact\"></ion-icon><br>User</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.the_receiver == username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewChat' (click)=\"viewChat(notif.userid,notif.first_name,notif.last_name,notif,username)\"><ion-icon name=\"text\"></ion-icon><br>Chat</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n <div id=\"bottomBar\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bottomBar {\n  background: #000000;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  height: 60px;\n}\n\ndiv#dp {\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background-size: cover !important;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\nion-item-options#options {\n  margin-top: 10px;\n}\n\n#viewUser {\n  background: #4CAF50;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n\n#viewChat {\n  background: black;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n\n#viewPost {\n  background: #607D8B;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n\n#notifs {\n  background: #f7f7f7;\n}\n\n#notifs #actualNotif {\n  font-size: 13px;\n  margin-top: 10px;\n}\n\n#notifs #actualNotif #msg {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFUTtFQUNJLGlCQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdHRvbUJhcntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG5cbmRpdiNkcCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbmlvbi1pdGVtLW9wdGlvbnMjb3B0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3ZpZXdVc2Vye1xuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdmlld0NoYXR7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdmlld1Bvc3R7XG4gICAgYmFja2dyb3VuZDogIzYwN0Q4QjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNub3RpZnN7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICAjYWN0dWFsTm90aWZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuXG4gICAgICAgICNtc2d7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIjYm90dG9tQmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmRpdiNkcCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24taXRlbS1vcHRpb25zI29wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdmlld1VzZXIge1xuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI3ZpZXdDaGF0IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdmlld1Bvc3Qge1xuICBiYWNrZ3JvdW5kOiAjNjA3RDhCO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI25vdGlmcyB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG4jbm90aWZzICNhY3R1YWxOb3RpZiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiNub3RpZnMgI2FjdHVhbE5vdGlmICNtc2cge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let Tab3Page = class Tab3Page {
    constructor(database, statusBar, storage, route) {
        this.database = database;
        this.statusBar = statusBar;
        this.storage = storage;
        this.route = route;
        this.notificationssRef$ = this.database.list("notification", ref => ref.orderByChild('date')).valueChanges();
        this.notificationssRef$.subscribe((x) => {
            console.log(x);
        });
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        // Put here the code you want to execute
        this.storage.get('username').then((val) => {
            console.log('Your username is', val);
            this.username = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (this.username == undefined) {
                this.route.navigate(['']);
            }
        });
    }
    viewPost(post) {
        console.log(post);
        this.storage.set("post", post);
        this.route.navigate(['/home/tabs/postView']);
    }
    viewUser(userId, email) {
        console.log(userId);
        console.log("user", userId);
        this.storage.set("user_id", userId);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
    viewChat(id, first_name, last_name, username) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    }
};
Tab3Page.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map