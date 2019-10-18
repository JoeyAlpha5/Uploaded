(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-view-post-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-slides id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'>\n      <div id=\"streamIcon\">Playlisted</div>\n      <ion-icon name=\"close\" id=\"closeIcon\" (click)=\"back()\"></ion-icon>\n      <video autoplay playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobc\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#E91E63'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\"></ion-icon><span id=\"{{item.post_id}}CommentsCount\">0</span>\n      </div>\n\n\n      <div id=\"userinfo\" [ngStyle]=\"{'bottom': styleExp, 'top':styleTop, 'margin-top':styleMarginTop}\">\n         <p>@{{ item.username }}</p>\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n            <span id=\"commentsHeading\">Comments</span><br/>\n            <span id=\"comment\" *ngFor='let comment of commentsRef$ | async'>\n              <span *ngIf=\"item.post_id == comment.post\">\n                <span id=\"userComment\">@{{comment.user}}</span> {{ comment.comment }}<br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\" (blur)=\"moveDownComments(item.post_idComments)\" (focus)=\"moveUpComments()\" class=\"commentInput\" id=\"{{item.post_id}}commentIn\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <div (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\" [ngStyle]= \"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\"><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon></div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n\n      <div  class=\"{{i}}heartAnimations\"  id=\"heartAnimations\">\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n\n      \n      <div id=\"overlay\" (click)=\"playVideo(i)\">\n      </div>\n\n\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/post-view/post-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/post-view/post-view.module.ts ***!
  \***********************************************/
/*! exports provided: PostViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewPageModule", function() { return PostViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view.page */ "./src/app/post-view/post-view.page.ts");







const routes = [
    {
        path: '',
        component: _post_view_page__WEBPACK_IMPORTED_MODULE_6__["PostViewPage"]
    }
];
let PostViewPageModule = class PostViewPageModule {
};
PostViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_view_page__WEBPACK_IMPORTED_MODULE_6__["PostViewPage"]]
    })
], PostViewPageModule);



/***/ }),

/***/ "./src/app/post-view/post-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/post-view/post-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid grey;\n  width: 280px;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid gray;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\nion-icon#closeIcon {\n  font-size: 30px;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  margin-top: 25px;\n  margin-right: 4px;\n  z-index: 1000000;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\nspan#commentsHeading {\n  font-weight: lighter;\n  padding-bottom: 12px;\n}\n\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\n\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.49);\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 15px;\n  z-index: 100;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 13px;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#comment {\n  font-size: 13px;\n}\n\ndiv#backDiv {\n  position: absolute;\n  color: white;\n  font-size: 30px;\n  z-index: 1000;\n  margin-top: 26px;\n  margin-left: 15px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\n\ndiv#heartAnimations ion-icon#animation1 {\n  color: #E91E63;\n  margin-right: 15px;\n}\n\ndiv#heartAnimations ion-icon#animation2 {\n  color: #E91E63;\n  margin-left: 20px;\n}\n\ndiv#heartAnimations ion-icon#animation3 {\n  color: #E91E63;\n  margin-right: 30px;\n}\n\ndiv#heartAnimations ion-icon#animation4 {\n  color: #E91E63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3Qtdmlldy9wb3N0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNBSjs7QURHRTtFQUNFLDBCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDREo7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNISjs7QURNRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURIRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsTUFBQTtBQ0ZKOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNKSjs7QURPQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDTEo7O0FET0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRFFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDTlI7O0FEU0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQTjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDUko7O0FEVUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNSTjs7QURXSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1ROOztBRGVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGNFO0VBQ0UsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGNFO0VBQ0UsZUFBQTtBQ1hKOztBRGVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWko7O0FEZUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUNaSjs7QURlRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDWko7O0FEZUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNiTjs7QURlSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2JOOztBRGVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDYk47O0FEZUk7RUFDRSxjQUFBO0FDYk4iLCJmaWxlIjoic3JjL2FwcC9wb3N0LXZpZXcvcG9zdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIFxuICBpbWcubG9nb2ZvbnQge1xuICAgIGhlaWdodDogMjNweDtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgfVxuICBcbiAgaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgfVxuICBcbiAgLmhvbWVVcGxvYWR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICBcbiAgLmhvbWVTZW5ke1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIFxuICB9XG4gIFxuICBkaXYjTG9hZGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgXG4gIFxuICAudmlkZW9iY2cge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICBcbiAgI3NsaWRlc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICBwI3Bvc3RHZW5yZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGRpdiNQb3N0RGF0YSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIGRpdiNvdmVybGF5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgaW5wdXQuY29tbWVudElucHV0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICAjY29tbWVudEJ0bntcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY29tbWVudEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIGlvbi1pY29uI2Nsb3NlSWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuICBkaXYjcHJvZmlsZUltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuXG4gICAgc3BhbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogMTglO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIFxuICAgICAgZGl2I2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIFxuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG4gIFxuICBkaXYjdXNlcmluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIFxuICAgICNwb3N0RGVzY3JpcHRpb257XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuICBcbiAgZGl2I3N0cmVhbUljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5pY29ue1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgXG4gICN1c2VyQ29tbWVudHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNjb21tZW50e1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICB9XG4gIFxuXG4gIGRpdiNiYWNrRGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4gIFxuICAjc2hhcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gIH1cbiAgXG4gIGRpdiNoZWFydEFuaW1hdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNTFweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICBcbiAgXG4gICAgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgaW9uLWljb24jYW5pbWF0aW9uMiB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH0gIFxuICAgIGlvbi1pY29uI2FuaW1hdGlvbjMge1xuICAgICAgY29sb3I6ICNFOTFFNjM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfSAgXG4gICAgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICB9XG4gIH0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZy5sb2dvZm9udCB7XG4gIGhlaWdodDogMjNweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4uaG9tZVVwbG9hZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob21lU2VuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDlkZWcpO1xufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi52aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xufVxuZGl2I1Bvc3REYXRhIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5pbnB1dC5jb21tZW50SW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIHdpZHRoOiAyODBweDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI2NvbW1lbnRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlvbi1pY29uI2Nsb3NlSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYjcHJvZmlsZUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuZGl2I3Byb2ZpbGVJbWFnZSBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE4JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdiNwcm9maWxlSW1hZ2UgZGl2I2ltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmbG9hdDogbGVmdDtcbn1cbmRpdiNwcm9maWxlSW1hZ2UgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuZGl2I3VzZXJpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmRpdiN1c2VyaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZGl2I3VzZXJpbmZvICNwb3N0RGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjc3RyZWFtSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuI3VzZXJDb21tZW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNiYWNrRGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNzaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNTRweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICBjb2xvcjogI0U5MUU2MztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gIGNvbG9yOiAjRTkxRTYzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-view/post-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/post-view/post-view.page.ts ***!
  \*********************************************/
/*! exports provided: PostViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewPage", function() { return PostViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













let PostViewPage = class PostViewPage {
    constructor(location, actionSheetController, database, tabsPage, requests, toastController, statusBar, route, loadingController, storage) {
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.database = database;
        this.tabsPage = tabsPage;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.styleExp = "0";
        this.styleTop = "unset";
        this.styleMarginTop = "unset";
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.tabsPage.bgColor = '#000000';
        this.displayComments();
    }
    ngOnInit() {
    }
    displayComments() {
        this.commentsRef$.subscribe((val) => {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (let x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                    for (let c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text("0");
                    }
                    //get the number of comments for each post
                    for (let c = 0; c < val.length; c++) {
                        //console.log("this comment belongs to post ", val[c].post);
                        let currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text());
                        currentTotalComments += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                    }
                }
            }, 1000);
        });
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.tabsPage.bottom = false;
        this.tabsPage.bgColor = '#000000';
        this.displayComments();
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.storage.get("post").then((post) => {
                    console.log("post id is ", val);
                    this.results = this.requests.GetPost(profile_url, post, val);
                    this.results.subscribe((x) => {
                        console.log(x);
                    });
                }).catch();
            }
        });
    }
    share(file) {
        this.presentActionSheet();
    }
    commentAdded() {
        console.log("Comment added");
        //get comments tabs
        this.commnentsTab = document.getElementsByClassName("commentBox");
        //display the last comment added
        for (let x = 0; x < this.commnentsTab.length; x++) {
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            console.log("scroll top", this.commnentsTab[x].scrollTop);
            console.log("scroll height", this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
    }
    back() {
        this.tabsPage.bottom = true;
        this.location.back();
    }
    playVideo(id) {
        var video = document.getElementById(id + "videobc");
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    }
    repost(post_id) {
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        let repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(x => {
            console.log(x);
            if (x == "Repost exists") {
                this.presentToast("You've already reposted this post");
            }
            else {
                this.presentToast("Post has been shared to your feed");
            }
        });
    }
    like(post_id, slideId) {
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(response => {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(this.email);
            if (response == false) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#E91E63");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes += 1);
                jquery__WEBPACK_IMPORTED_MODULE_3__("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentIn").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentIn").val("");
            }
            console.log(commentMessage);
        });
    }
    moveUpComments(div) {
        // userInfo.style.top = '0 !important';
        // this.styleExp = "unset";
        // this.styleTop = "0";
        // this.styleMarginTop = "55%";
        this.statusBar.overlaysWebView(false);
        console.log("Move comments up");
    }
    moveDownComments() {
        // this.styleExp = "0";
        // this.styleTop = "unset";
        // this.styleMarginTop = "unset";
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Share post',
                buttons: [{
                        text: 'Facebook',
                        role: 'destructive',
                        icon: 'logo-facebook',
                        handler: () => {
                            console.log('Facebook');
                        }
                    }, {
                        text: 'Twitter',
                        icon: 'logo-twitter',
                        handler: () => {
                            console.log('Twitter');
                        }
                    },
                    {
                        text: 'WhatsApp',
                        icon: 'logo-whatsapp',
                        handler: () => {
                            console.log('WhatsApp');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
};
PostViewPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
PostViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-view',
        template: __webpack_require__(/*! raw-loader!./post-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html"),
        styles: [__webpack_require__(/*! ./post-view.page.scss */ "./src/app/post-view/post-view.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], PostViewPage);



/***/ })

}]);
//# sourceMappingURL=post-view-post-view-module-es2015.js.map