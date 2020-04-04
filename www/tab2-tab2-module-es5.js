(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar placeholder=\"Search artists..\" [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\" *ngIf=\"displaySearchVideos == false\">\n    <ion-chip (click)=\"setSearchFilter('artists')\">\n      <ion-label>Artists</ion-label>\n    </ion-chip>\n    <ion-chip (click)=\"setSearchFilter('places')\">\n      <ion-label>Places</ion-label>\n    </ion-chip>\n    <ion-chip (click)=\"setSearchFilter('tags')\">\n      <ion-label>Tags</ion-label>\n    </ion-chip>\n  </div>\n\n  <div *ngIf=\"artists == true\">\n    <div *ngFor='let item of ( results | async)'>\n      <ion-item  id=\"searchItem\" button *ngIf=\"item.id != userID\" (click)=\"viewProfile(item.id,item.email)\">\n        <div id=\"dp\" [ngStyle]=\"{'background-image': 'url(https://uploadedstream.storage.googleapis.com/' + item.image+ ')'}\"></div>\n        <p>{{ item.first_name + \" \"  + item.last_name }}<br/><span id=\"searchUsername\">@{{ item.username }}</span> </p>\n      </ion-item>\n    </div>\n  </div>\n\n  <div *ngIf=\"places == true\">\n      <p>Places box</p>\n  </div>\n\n  <div *ngIf=\"tags == true\">\n      <p>tags box</p>\n  </div>\n\n  <ion-content *ngIf=\"displaySearchVideos == true\">\n    <div id=\"oneBigOne\" (click)=\"viewPost(one.username)\"  *ngFor='let one of ( oneSearchContent | async)'>\n      <video class=\"searchVids\" poster=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480/{{one.file }}.png\" playsinline webkit-playsinline loop [muted]=\"true\"  autoplay>\n        <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480,du_10/{{one.file}}.mp4\" type=\"video/mp4\">\n      </video>\n    </div>\n\n      <div id=\"searchVids\" (scroll)=\"search_scrollin()\" class=\"searc_videos\">\n        <div id=\"playlist\" (click)=\"viewPost(item.username)\" *ngFor='let item of ( search_videos )'>\n          <video class=\"searchVids\" poster=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480/{{item.file }}.png\" playsinline webkit-playsinline loop [muted]=\"true\"  autoplay>\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480,du_10/{{item.file }}.mp4\" type=\"video/mp4\">\n          </video>\n        </div> \n        <ion-spinner name=\"bubbles\" color=\"primary\"></ion-spinner>\n    </div>\n  </ion-content>\n\n  <!-- <div id=\"bottomPadding\"></div> -->\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span, ion-label, ion-searchbar {\n  font-family: \"helvetica\" !important;\n}\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 33.3%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\ndiv#searchVids {\n  width: 100%;\n  overflow: scroll;\n  height: 45%;\n  text-align: -webkit-center;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#searchUsername {\n  font-size: 14px;\n  color: gray;\n}\nion-item#searchItem {\n  height: 56px;\n}\ndiv#oneBigOne {\n  width: 99.4%;\n  height: 202px;\n  margin-bottom: 0.5px;\n  margin-left: 1px;\n}\ndiv#dp {\n  width: 30px;\n  height: 30px;\n  background: #d6d6d6;\n  border-radius: 100px;\n  margin-right: 10px;\n  background-size: cover;\n}\nspan#metric {\n  margin-left: 5px;\n}\ndiv#playlist {\n  width: 33%;\n  float: left;\n  height: 100px;\n  margin-top: 1px;\n  margin-left: 1px;\n}\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n#selectedTag {\n  font-weight: bold;\n}\ndiv#playlist video {\n  width: 100%;\n  height: 100%;\n}\n#oneBigOne video {\n  width: 100%;\n  height: 100%;\n}\nvideo {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-height: 800px) {\n  div#searchVids {\n    height: 56.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0FGO0FESUE7RUFDSSxtQ0FBQTtBQ0ZKO0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGRjtBRElFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNGSjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFDRSxZQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNFLGlCQUFBO0FDSkY7QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVkY7QURhQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUNWRjtBRGNBO0VBQ0U7SUFDRSxhQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYSc7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5cblxucCwgc3BhbiwgaW9uLWxhYmVsLGlvbi1zZWFyY2hiYXJ7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gIGRpdiNwbGF5bGlzdCB7XG4gICAgd2lkdGg6IDMzLjMlO1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuZGl2I3NlYXJjaFZpZHMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgaGVpZ2h0OiA0NSU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4jcGxheWxpc3RQcmV2aWV3IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgcGFkZGluZy10b3A6IDY3JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNzZWFyY2hVc2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1pdGVtI3NlYXJjaEl0ZW0ge1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbmRpdiNvbmVCaWdPbmUge1xuICB3aWR0aDogOTkuNCU7XG4gIGhlaWdodDogMjAycHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5kaXYjZHAge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDZkNmQ2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmRpdiNzZWFyY2hUYWdzIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI3NlbGVjdGVkVGFnIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIGRpdiNib3R0b21QYWRkaW5nIHtcbi8vICAgYm90dG9tOiAwcHg7XG4vLyAgIGhlaWdodDogMjY4cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG5kaXYjcGxheWxpc3QgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jb25lQmlnT25lIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxudmlkZW8ge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6ODAwcHgpe1xuICBkaXYjc2VhcmNoVmlkcyB7XG4gICAgaGVpZ2h0OiA1Ni41JTtcbiAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm8tUmVndWxhci50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5wLCBzcGFuLCBpb24tbGFiZWwsIGlvbi1zZWFyY2hiYXIge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIiAhaW1wb3J0YW50O1xufVxuXG5kaXYjcGxheWxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmRpdiNwbGF5bGlzdHMgZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDMzLjMlO1xuICBoZWlnaHQ6IDExNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG5kaXYjc2VhcmNoVmlkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBoZWlnaHQ6IDQ1JTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI3NlYXJjaFVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWl0ZW0jc2VhcmNoSXRlbSB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuZGl2I29uZUJpZ09uZSB7XG4gIHdpZHRoOiA5OS40JTtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmRpdiNkcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuZGl2I3NlYXJjaFRhZ3Mgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jc2VsZWN0ZWRUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3BsYXlsaXN0IHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI29uZUJpZ09uZSB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnZpZGVvIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgZGl2I3NlYXJjaFZpZHMge1xuICAgIGhlaWdodDogNTYuNSU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);










var Tab2Page = /** @class */ (function () {
    function Tab2Page(tabs, platform, requests, statusBar, route, storage, screenOrientation) {
        this.tabs = tabs;
        this.platform = platform;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.screenOrientation = screenOrientation;
        this.search_videos = [];
        this.searchTerm = '';
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displaySearchVideos = true;
        this.default = false;
        this.artists = true;
        this.places = false;
        this.tags = false;
        this.initial_load = false;
        this.screenOrientation.ORIENTATIONS.PORTRAIT;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        // this.platform.backButton.subscribe(() => {
        // });
    }
    Tab2Page.prototype.setSearchFilter = function (filter) {
        console.log(filter);
        if (filter == "artists") {
            this.artists = true;
            console.log(this.artists);
            this.places = false;
            this.tags = false;
        }
        else if (filter == "places") {
            this.artists = false;
            this.places = true;
            this.tags = false;
        }
        else {
            this.artists = false;
            this.places = false;
            this.tags = true;
        }
    };
    Tab2Page.prototype.viewPost = function (username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    };
    Tab2Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "#fc8700";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    Tab2Page.prototype.search_scrollin = function () {
        var _this = this;
        // (videos_list[0].scrollHeight - videos_list[0].scrollTop) == 300
        var video_list = document.getElementById("searchVids");
        console.log("Scroll top ", video_list.scrollTop);
        console.log("Scroll height", video_list.scrollHeight);
        console.log("inner height ", jquery__WEBPACK_IMPORTED_MODULE_9__("#searchVids").innerHeight());
        // console.log(video_list.scrollHeight - video_list.scrollTop);
        if (Math.floor(jquery__WEBPACK_IMPORTED_MODULE_9__("#searchVids").innerHeight() + video_list.scrollTop) == video_list.scrollHeight) {
            console.log("reached bottom");
            var total_videos = document.getElementsByClassName("searc_videos");
            var number_of_current_vids = total_videos[0].childElementCount;
            console.log("total childre ", number_of_current_vids - 1);
            this.searchContent = this.requests.searchPage(this.profile_url, number_of_current_vids - 1);
            this.searchContent.subscribe(function (v) {
                console.log("new videos ", v);
                for (var i = 0; i < v.length; i++) {
                    console.log(_this.search_videos.some(function (post) { return post["post_id"] == v[i].post_id; }));
                    if (_this.search_videos.some(function (post) { return post["post_id"] == v[i].post_id; }) == false) {
                        _this.search_videos.push(v[i]);
                    }
                }
            });
        }
    };
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //set current page
        this.storage.set("prev_page", document.location.href);
        //
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.storage.get('mail').then(function (val) {
            if (val == undefined) {
                _this.route.navigate(['login']);
            }
            else {
                _this.storage.get('current_userID').then(function (val) {
                    _this.userID = val;
                    if (_this.initial_load == false) {
                        _this.initial_load = true;
                        _this.searchContent = _this.requests.searchPage(_this.profile_url, 16);
                        _this.oneSearchContent = _this.requests.searchPageOneBig(_this.profile_url);
                        _this.oneSearchContent.subscribe();
                        _this.searchContent.subscribe();
                        //loop through the videos and check if any of them exists in the posts array
                        _this.searchContent.subscribe(function (x) {
                            for (var p = 0; p < x.length; p++) {
                                _this.search_videos.push(x[p]);
                            }
                        });
                        //
                    }
                });
                _this.restartVideos();
            }
        });
    };
    Tab2Page.prototype.restartVideos = function () {
        //restart videos after every 5sec
        setInterval(function () {
            var videos = document.getElementsByClassName("searchVids");
            for (var i = 0; i < videos.length; i++) {
                var ivideo = videos[i];
                ivideo.currentTime = 0;
                // ivideo.load();
            }
        }, 20000);
    };
    Tab2Page.prototype.getSearchResults = function () {
        console.log(this.searchTerm);
        var user_email = JSON.parse(localStorage.getItem('email'));
        this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);
        // this.places_results = this.requests.getSearchPlacesResult(this.profile_url,this.searchTerm,user_email) 
        if (this.searchTerm != "") {
            this.displaySearchVideos = false;
        }
        else {
            this.displaySearchVideos = true;
        }
    };
    Tab2Page.prototype.viewProfile = function (user_id, email) {
        console.log("user", user_id);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map