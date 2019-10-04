(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title id=\"profileName\" *ngFor='let profile of ( userProfile | async)'> \n          {{ profile.first_name }} {{ profile.last_name }}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <div id=\"videoPlaceholder\">\n\n  </div>\n  \n  <ion-content >\n  \n  \n  \n  <!---upload button-->\n    <div id='progressDiv'>\n        <div id='Loader'></div>\n    </div>\n  \n    <div id=\"content\" *ngFor='let profile of ( userProfile | async)'>\n  \n        <div id='profileBlock'>\n            <div *ngIf=\"profile.image != undefined\" id='dp' [ngStyle]=\"{ 'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+profile.image+'.jpg)'}\" ></div>\n            <div *ngIf=\"profile.image == undefined\" id='dp'></div>\n            <p id='username'>{{ profile.username }} </p>\n            <p id='Posts'>{{ profile.total_posts }} Uploaded playlists</p>\n            <p id='Following'> <span><b>Followers:</b><br/> <font id=\"Followers\">{{ profile.followers }}</font></span>  <span><b>Following: </b><br/> <font id=\"Followings\">{{ profile.following }}</font></span>  </p>\n        </div>\n        <p id='bio'>{{ profile.bio }}</p>\n        <p *ngIf=\"profile.already_following == false\" id='followBtn' (click)=\"Follow(profile.id)\">Follow</p>\n        <p *ngIf=\"profile.already_following == true\" id='ufollowBtn' (click)=\"Follow(profile.id)\">Unfollow</p>\n  \n        <div id='uploadedHeading'>Uploaded playlists</div>\n        <div id=\"playlists\">\n            <div id=\"playlist\"  *ngFor='let item of ( Playlists | async)'  [ngStyle]=\"{ 'background': 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.post_file + '.jpg)'}\" >\n    \n              <div id=\"playlistPreview\">\n                <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n              </div>\n            </div> \n        </div>\n    </div>\n   <div id=\"bottomBar\"></div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\ndiv#loaderHolder {\n  width: 100%;\n  text-align: -webkit-center;\n  position: absolute;\n  top: 50%;\n}\ndiv#videoPlaceholder {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000000000;\n  display: none;\n  background: black;\n}\n#videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: scale(1.06);\n          transform: scale(1.06);\n  /* scale up to hide the edge blur */\n}\n#content {\n  text-align: -webkit-center;\n}\n#dp {\n  width: 80px;\n  height: 80px;\n  background: rgba(128, 128, 128, 0.41);\n  background-size: cover !important;\n  border-radius: 50%;\n}\ndiv#profileBlock {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n}\ndiv#profileBlock #Followers {\n  font-size: 16px;\n  margin-top: 0px;\n}\ndiv#profileBlock #username {\n  font-size: 20px;\n  margin-bottom: 5px;\n  font-size: 13px;\n}\n#Following {\n  height: 28px;\n  text-align: -webkit-center;\n  width: 100%;\n  padding-left: 27%;\n  font-size: 13px;\n}\n#Following span {\n  margin-left: 15px;\n  float: left;\n}\np#followBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: orange;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\n#ufollowBtn {\n  margin: 0px;\n  padding: 0px;\n  width: 150px;\n  height: 28px;\n  background: #F44336;\n  color: white;\n  padding-top: 4px;\n  border-radius: 7px;\n  cursor: pointer;\n  margin-bottom: 22px;\n}\np#Posts {\n  font-size: 13px;\n  color: gray;\n  margin: 0px;\n}\np#bio {\n  text-align: -webkit-center;\n  color: gray;\n  font-size: 13px;\n}\ndiv#uploadedHeading {\n  width: 100%;\n  height: 35px;\n  text-align: -webkit-center;\n  margin-top: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.0901960784);\n  padding-top: 10px;\n  font-size: 14px;\n}\n#profileName {\n  width: auto;\n  position: absolute;\n  font-size: 15px;\n  margin-top: 5px;\n  float: left;\n  margin-left: 28%;\n}\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 33%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\n#bottomBar {\n  background: rgba(0, 0, 0, 0.38);\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNBUDtFRENFO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0VUO0FBQ0Y7QURMRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVQ7QUFDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRUo7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQXdCLG1DQUFBO0FDRzFCO0FEQUE7RUFDRSwwQkFBQTtBQ0dGO0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0Y7QURERTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDR0o7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjtBREtBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FESUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNGSjtBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNMRjtBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNORjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDWEY7QURhRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDWEo7QURnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNiRjtBRGdCQTtFQUNFLGdCQUFBO0FDYkY7QURnQkE7RUFDRSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICBkaXYjbG9hZGVySG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICBkaXYjdmlkZW9QbGFjZWhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3ZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IC8qIHNjYWxlIHVwIHRvIGhpZGUgdGhlIGVkZ2UgYmx1ciAqL1xufVxuXG4jY29udGVudHtcbiAgdGV4dC1hbGlnbjotd2Via2l0LWNlbnRlcjtcbn1cblxuI2RwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQxKTtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuZGl2I3Byb2ZpbGVCbG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgI0ZvbGxvd2Vyc3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgI3VzZXJuYW1le1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG5cbiAgfVxuXG59XG5cbiNGb2xsb3dpbmd7XG4gIGhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDI3JTtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG59XG5cbnAjZm9sbG93QnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuXG4jdWZvbGxvd0J0bntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbnAjUG9zdHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDBweDtcbn1cblxucCNiaW8ge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0MzEzNzI1NSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuI3Byb2ZpbGVOYW1le1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZmxvYXQ6bGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcbn1cblxuXG5cblxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG59XG5cblxuI3BsYXlsaXN0UHJldmlld3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jYm90dG9tQmFye1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTdweDtcbn0iLCJAa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuZGl2I2xvYWRlckhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cblxuZGl2I3ZpZGVvUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jdmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgLyogc2NhbGUgdXAgdG8gaGlkZSB0aGUgZWRnZSBibHVyICovXG59XG5cbiNjb250ZW50IHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNkcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmRpdiNwcm9maWxlQmxvY2sgI0ZvbGxvd2VycyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuZGl2I3Byb2ZpbGVCbG9jayAjdXNlcm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jRm9sbG93aW5nIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjclO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jRm9sbG93aW5nIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnAjZm9sbG93QnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuI3Vmb2xsb3dCdG4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxucCNQb3N0cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wI2JpbyB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjdXBsb2FkZWRIZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOTAxOTYwNzg0KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3Byb2ZpbGVOYW1lIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjglO1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmRpdiNwbGF5bGlzdHMgZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI2JvdHRvbUJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1N3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfilePage = class ProfilePage {
    constructor(requests, route) {
        this.requests = requests;
        this.route = route;
        this.images_url = "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
        this.video_url = "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var Email = JSON.parse(localStorage.getItem('email'));
        var Password = localStorage.getItem('password');
        if (Email == null && Password == null) {
            window.location.href = '';
            return;
        }
        else {
            let profileToGet = localStorage.getItem("user_id");
            console.log(profileToGet);
            this.userProfile = this.requests.getUserProfile(this.profile_url, profileToGet, Email);
            // this.userProfile.subscribe(profile => {
            //   console.log("profile", profile);
            //   this.renderProfile(profile);
            // });
            let userProfileEmail = localStorage.getItem("userProfileEmail");
            this.Playlists = this.requests.getProfilePlaylists(this.profile_url, userProfileEmail);
        }
    }
    Follow(user_id) {
        var Email = JSON.parse(localStorage.getItem('email'));
        this.requests.Follow(this.profile_url, user_id, Email).subscribe(x => {
            this.ionViewDidEnter();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map