(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-view-post-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-slides id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'>\n      <div id=\"streamIcon\">Playlisted</div>\n      <ion-icon name=\"close\" id=\"closeIcon\" (click)=\"back()\"></ion-icon>\n      <video autoplay playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobc\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#E91E63'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" (click)=\"showAllComments(item.post_id)\" name=\"text\" id=\"postIcon\"></ion-icon><span id=\"{{item.post_id}}CommentsCount\">0</span>\n      </div>\n\n\n      <div id=\"userinfo\" [ngStyle]=\"{'bottom': styleExp, 'top':styleTop, 'margin-top':styleMarginTop}\">\n         <p>@{{ item.username }}</p>\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <span id=\"commentsHeading\">Comments</span><br/>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n            <span id=\"comment\" *ngFor='let comment of commentsRef$ | async'>\n              <span *ngIf=\"item.post_id == comment.post\">\n                <span id=\"userComment\">@{{comment.user}}</span> {{ comment.comment }}<br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\" (blur)=\"moveDownComments(item.post_idComments)\" (focus)=\"moveUpComments()\" class=\"commentInput\" id=\"{{item.post_id}}commentIn\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <div (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\" [ngStyle]= \"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\"><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon></div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n\n      <div  class=\"{{i}}heartAnimations\"  id=\"heartAnimations\">\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n\n      \n      <div id=\"overlay\" (click)=\"playVideo(i)\">\n      </div>\n\n\n\n    <div id=\"{{item.post_id}}allComments\"  class=\"allComments animated fadeInUp\">\n      <div *ngFor='let comment of (commentsRef$ | async)' id=\"{{item.post_id}}allComments\">\n        <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span><p>{{ comment.comment }}</p></div>\n      </div>\n\n      <div id=\"fullComments\">\n        <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput2\" id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n        <span (click)=\"postComment2(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n    </div>\n\n\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view.page */ "./src/app/post-view/post-view.page.ts");







var routes = [
    {
        path: '',
        component: _post_view_page__WEBPACK_IMPORTED_MODULE_6__["PostViewPage"]
    }
];
var PostViewPageModule = /** @class */ (function () {
    function PostViewPageModule() {
    }
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
    return PostViewPageModule;
}());



/***/ }),

/***/ "./src/app/post-view/post-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/post-view/post-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 280px;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\nion-icon#closeIcon {\n  font-size: 30px;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  margin-top: 25px;\n  margin-right: 4px;\n  z-index: 1000000;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\n\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.49);\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 15px;\n  z-index: 100;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 13px;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#comment {\n  font-size: 13px;\n}\n\ndiv#backDiv {\n  position: absolute;\n  color: white;\n  font-size: 30px;\n  z-index: 1000;\n  margin-top: 26px;\n  margin-left: 15px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\n\ndiv#heartAnimations ion-icon#animation1 {\n  color: #E91E63;\n  margin-right: 15px;\n}\n\ndiv#heartAnimations ion-icon#animation2 {\n  color: #E91E63;\n  margin-left: 20px;\n}\n\ndiv#heartAnimations ion-icon#animation3 {\n  color: #E91E63;\n  margin-right: 30px;\n}\n\ndiv#heartAnimations ion-icon#animation4 {\n  color: #E91E63;\n}\n\n.allComments {\n  width: 100%;\n  height: 300px;\n  background: white;\n  position: absolute;\n  z-index: 1016;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n}\n\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3Qtdmlldy9wb3N0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNBSjs7QURHRTtFQUNFLDBCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDREo7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNISjs7QURNRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURIRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsTUFBQTtBQ0ZKOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwr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RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCTjs7QURtQkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNqQk47O0FEb0JJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ2xCTjs7QUR1QkU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDcEJKOztBRHNCSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQk47O0FEeUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN2Qk47O0FEcUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN2Qk47O0FEcUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN2Qk47O0FEcUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN2Qk47O0FEcUJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN2Qk47O0FEMEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDeEJOIiwiZmlsZSI6InNyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBcbiAgaW1nLmxvZ29mb250IHtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIH1cbiAgXG4gIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIH1cbiAgXG4gIC5ob21lVXBsb2Fke1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cbiAgXG4gIC5ob21lU2VuZHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG4gICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuICBcbiAgfVxuICBcbiAgZGl2I0xvYWRlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIFxuICBcbiAgLnZpZGVvYmNnIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbiAgXG4gICNzbGlkZXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgcCNwb3N0R2VucmUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBkaXYjUG9zdERhdGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgei1pbmRleDogMTAwO1xuICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBkaXYjb3ZlcmxheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICA6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaW5wdXQuY29tbWVudElucHV0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgXG4gICNjb21tZW50QnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jb21tZW50Qm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDlweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgaW9uLWljb24jY2xvc2VJY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5zcGFuI2NvbW1lbnRzSGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuICBkaXYjcHJvZmlsZUltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuXG4gICAgc3BhbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogMTglO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIFxuICAgICAgZGl2I2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIFxuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG4gIFxuICBkaXYjdXNlcmluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIFxuICAgICNwb3N0RGVzY3JpcHRpb257XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuICBcbiAgZGl2I3N0cmVhbUljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5pY29ue1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgXG4gICN1c2VyQ29tbWVudHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNjb21tZW50e1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICB9XG4gIFxuXG4gIGRpdiNiYWNrRGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4gIFxuICAjc2hhcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gIH1cbiAgXG4gIGRpdiNoZWFydEFuaW1hdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNTFweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICBcbiAgXG4gICAgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgaW9uLWljb24jYW5pbWF0aW9uMiB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH0gIFxuICAgIGlvbi1pY29uI2FuaW1hdGlvbjMge1xuICAgICAgY29sb3I6ICNFOTFFNjM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfSAgXG4gICAgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gICAgICBjb2xvcjogI0U5MUU2MztcbiAgICB9XG4gIH1cblxuXG4gIC5hbGxDb21tZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAxNjtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIFxuICBcbiAgICBwe1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgXG4gICAgc3BhbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICBcbiAgICAjYWxsY29tQ29tbWVudHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgI2Z1bGxDb21tZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gICAgLmNvbW1lbnRJbnB1dDJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiA2OSU7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgXG4gIFxuICAgIH1cbiAgXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIFxuICAgICNjb21tZW50QnRue1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmRpdiNQb3N0RGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDI4MHB4O1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI2NvbW1lbnRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlvbi1pY29uI2Nsb3NlSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2I3Byb2ZpbGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbmRpdiNwcm9maWxlSW1hZ2Ugc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIGRpdiNpbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OSk7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5kaXYjdXNlcmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdiN1c2VyaW5mbyAjcG9zdERlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiN1c2VyQ29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjYmFja0RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5kaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24xIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uMiB7XG4gIGNvbG9yOiAjRTkxRTYzO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uMyB7XG4gIGNvbG9yOiAjRTkxRTYzO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjQge1xuICBjb2xvcjogI0U5MUU2Mztcbn1cblxuLmFsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMTY7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4uYWxsQ29tbWVudHMgcCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYWxsQ29tbWVudHMgc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uYWxsQ29tbWVudHMgI2FsbGNvbUNvbW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogIzI5MjkyOTtcbn1cblxuI2Z1bGxDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNmdWxsQ29tbWVudHMgLmNvbW1lbnRJbnB1dDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNjklO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuI2Z1bGxDb21tZW50cyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4jZnVsbENvbW1lbnRzICNjb21tZW50QnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var PostViewPage = /** @class */ (function () {
    function PostViewPage(location, actionSheetController, database, tabsPage, requests, toastController, statusBar, route, loadingController, storage) {
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
    PostViewPage.prototype.ngOnInit = function () {
    };
    PostViewPage.prototype.displayComments = function () {
        this.commentsRef$.subscribe(function (val) {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                    for (var c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text("0");
                    }
                    //get the number of comments for each post
                    for (var c = 0; c < val.length; c++) {
                        //console.log("this comment belongs to post ", val[c].post);
                        var currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text());
                        currentTotalComments += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                    }
                }
            }, 1000);
        });
    };
    PostViewPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(true);
        this.tabsPage.bottom = false;
        this.tabsPage.bgColor = '#000000';
        this.displayComments();
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then(function (val) {
            console.log('Your email is', val);
            _this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (val == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.storage.get("post").then(function (post) {
                    console.log("post id is ", val);
                    _this.results = _this.requests.GetPost(profile_url, post, val);
                    _this.results.subscribe(function (x) {
                        console.log(x);
                    });
                }).catch();
            }
        });
    };
    PostViewPage.prototype.share = function (file) {
        this.presentActionSheet();
    };
    PostViewPage.prototype.commentAdded = function () {
        console.log("Comment added");
        //get comments tabs
        this.commnentsTab = document.getElementsByClassName("commentBox");
        //display the last comment added
        for (var x = 0; x < this.commnentsTab.length; x++) {
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            console.log("scroll top", this.commnentsTab[x].scrollTop);
            console.log("scroll height", this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
    };
    PostViewPage.prototype.back = function () {
        this.tabsPage.bottom = true;
        this.location.back();
    };
    PostViewPage.prototype.playVideo = function (id) {
        var video = document.getElementById(id + "videobc");
        console.log(id);
        console.log("paused", video.paused);
        var CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_3__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        for (var x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    };
    PostViewPage.prototype.repost = function (post_id) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        var repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(function (x) {
            console.log(x);
            if (x == "Repost exists") {
                _this.presentToast("You've already reposted this post");
            }
            else {
                _this.presentToast("Post has been shared to your feed");
            }
        });
    };
    PostViewPage.prototype.showAllComments = function (post_id) {
        console.log(post_id);
        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "allComments").show();
        // this.commentsRef$.subscribe((com)=>{
        //   console.log(com);
        //   $("#"+post_id+"allComments").html("");
        //   for(let c = 0; c < com.length; c++ ){
        //     if(com[c].post == post_id){
        //       $("#"+post_id+"allComments").append("<div><span>"+com[c].user+"</span><p>"+com[c].comment+"</p></div>");
        //       console.log(com[c].user);
        //     }
        //   }
        // });
    };
    PostViewPage.prototype.like = function (post_id, slideId) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(function (response) {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(_this.email);
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
    };
    PostViewPage.prototype.postComment = function (post_id) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentIn").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentIn").val("");
            }
            console.log(commentMessage);
        });
    };
    PostViewPage.prototype.postComment2 = function (post_id) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput2").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput2").val("");
            }
            console.log(commentMessage);
        });
    };
    PostViewPage.prototype.moveUpComments = function (div) {
        // userInfo.style.top = '0 !important';
        // this.styleExp = "unset";
        // this.styleTop = "0";
        // this.styleMarginTop = "55%";
        this.statusBar.overlaysWebView(false);
        console.log("Move comments up");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#userinfo").css("margin-bottom", "0px");
    };
    PostViewPage.prototype.moveDownComments = function () {
        // this.styleExp = "0";
        // this.styleTop = "unset";
        // this.styleMarginTop = "unset";
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
        jquery__WEBPACK_IMPORTED_MODULE_3__("#userinfo").css("margin-bottom", "100px");
    };
    PostViewPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Share post',
                            buttons: [{
                                    text: 'Facebook',
                                    role: 'destructive',
                                    icon: 'logo-facebook',
                                    handler: function () {
                                        console.log('Facebook');
                                    }
                                }, {
                                    text: 'Twitter',
                                    icon: 'logo-twitter',
                                    handler: function () {
                                        console.log('Twitter');
                                    }
                                },
                                {
                                    text: 'WhatsApp',
                                    icon: 'logo-whatsapp',
                                    handler: function () {
                                        console.log('WhatsApp');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostViewPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostViewPage.ctorParameters = function () { return [
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
    ]; };
    PostViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-view',
            template: __webpack_require__(/*! raw-loader!./post-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html"),
            styles: [__webpack_require__(/*! ./post-view.page.scss */ "./src/app/post-view/post-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], PostViewPage);
    return PostViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-view-post-view-module-es5.js.map