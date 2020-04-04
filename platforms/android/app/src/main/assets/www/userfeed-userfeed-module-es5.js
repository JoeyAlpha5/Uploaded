(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userfeed-userfeed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/userfeed/userfeed.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userfeed/userfeed.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <!--<ion-refresher  *ngIf=\"refresh ==  true\" id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>-->\n    <ion-slides #slider id=\"slides\" (ionSlideDidChange)=\"currentSlideVideo()\" (ionSlidesDidLoad)=\"setFirstViews()\" [options]=\"slideOpts\">\n      <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'\n        (swiperight)=\"swiped(i,item.post_id,'right')\" (swipeleft)=\"swiped(i,item.post_id,'left')\"\n        (swipeup)=\"onSwipeUp( item.user_id,item.user_email,i )\">\n        <div id=\"liveDot\"></div>\n        <div id=\"streamIcon\">Stream</div>\n        <div id=\"viewCount\"> <ion-icon id=\"\" name=\"eye\"></ion-icon> <span id=\"{{i}}userViewCountCont\"></span></div>\n        <ion-icon id=\"backIcon\" (click)=\"back()\" name=\"close\"></ion-icon>\n        <!-- <ion-icon id=\"reportIcon\" (click)=\"report(item.post_id)\" name=\"information-circle-outline\"></ion-icon> -->\n        <video playsinline webkit-playsinline class=\"videobcg\" (ended)=\"getNext(item.username,i)\" id=\"{{i}}videobcgf\">\n          <source id=\"{{i}}videobsource\"\n            src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480/{{ item.file }}.mp4\"\n            type=\"video/mp4\">\n        </video>\n        <div id=\"{{i}}FirstPostData\" *ngIf=\"display_firsts == true\">\n          <div id=\"PostData\" class=\"{{i}}PostData\">\n            <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\"\n              (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\"\n              id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n            <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#fc8700'}\" name=\"heart\"\n              id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\"\n              id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n            <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"{{i}}repostIcon\"></ion-icon><span\n              id=\"{{item.post_id}}repostCount\">{{ item.reposts }}</span>\n            <ion-icon class=\"icon\" (click)=\"share(item.file)\" name=\"share\" id=\"{{i}}shareIcon\"></ion-icon><br/>\n            <ion-icon class=\"icon\" name=\"text\" id=\"{{ i }}postIcon\" (click)=\"showAllComments(item.post_id, i)\"></ion-icon>\n            <span id=\"{{item.post_id}}CommentsCount\">0</span>\n            <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}PostViews\">{{ item.post_id }}</span>\n            </div>\n          </div>\n        </div>\n        \n        <div id=\"{{i}}newPostData\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n          <div *ngIf=\"post.username == item.username \">\n            <div id=\"PostData\" class=\"{{p}}PostData\">\n              <ion-icon class=\"icon\" *ngIf=\"post.liked == 0\" name=\"heart\" id=\"{{post.post_id}}likeIcon\"\n                (click)=\"like(post.post_id,i)\"></ion-icon><span *ngIf=\"post.liked == 0\"\n                id=\"{{post.post_id}}likeCount\">{{ post.like }}</span>\n              <ion-icon class=\"icon\" *ngIf=\"post.liked == 1\" [ngStyle]=\"{color:'#fc8700'}\" name=\"heart\"\n                id=\"{{post.post_id}}likeIcon\" (click)=\"like(post.post_id,i)\"></ion-icon><span *ngIf=\"post.liked == 1\"\n                id=\"{{post.post_id}}likeCount\">{{ post.like }}</span>\n              <ion-icon class=\"icon\" (click)=\"repost(post.post_id)\" name=\"share-alt\" id=\"{{i}}repostIcon\"></ion-icon><span\n                id=\"{{post.post_id}}repostCount\">{{ post.reposts }}</span>\n              <ion-icon class=\"icon\" (click)=\"share(post.file)\" name=\"share\" id=\"{{i}}shareIcon\"></ion-icon><br/>\n              <ion-icon class=\"icon\" name=\"text\" id=\"{{ i }}postIcon\" (click)=\"showAllComments(post.post_id,i)\">\n              </ion-icon><span id=\"{{post.post_id}}CommentsCount\">0</span>\n              <div class=\"postViews\"><span class=\"{{ post.post_id }}views\" id=\"{{i}}PostViews\">{{ post.post_id }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        \n        <div id=\"eyeView\">\n          <!-- <ion-icon class=\"icon\" name=\"eye\" id=\"eye\"></ion-icon><span id=\"{{i}}viewCount\" class=\"{{item.post_id}}viewCount \">0</span><br> -->\n          <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}ReservedPostViews\">{{ item.post_id }}</span></div>\n        </div>\n  \n        <div id=\"userinfo\" class=\"{{i}}userInfo\" *ngIf=\"userInfo ==  true\">\n          <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n          <p id=\"postDescription\" class=\"{{i}}PostDescription\">{{ item.description }}</p>\n          <span id=\"commentsHeading\">Comments</span><br />\n          <div *ngIf=\"display_firsts == true\" class=\"{{i}}oldPostComments\" id=\"{{ item.post_id }}actualCommnents\">\n            <div class=\"commentBox\" id=\"{{i}}commentBox\">\n              <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n                <span *ngIf=\"item.post_id == comment.post\" class=\"{{i}}commentSection\" id=\"userComment\">\n                  <span id=\"userCommenter\">@{{comment.user}}</span><span> {{ comment.comment }}</span>\n                </span>\n              </span>\n            </div>\n        </div>\n          <div id=\"{{i}}nextPostComments\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n            <div id=\"{{ post.post_id }}actualCommnents\">\n            <div *ngIf=\"post.username == item.username \" class=\"commentBox\" id=\"{{i}}commentBoxNew\">\n              <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n                <span *ngIf=\"post.post_id == comment.post\" class=\"{{i}}commentSection\" id=\"userComment\">\n                  <span id=\"userCommenter\">@{{comment.user}}</span><span> {{ comment.comment }}</span>\n                </span>\n              </span>\n            </div>\n            </div>\n          </div>\n          <!--<input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\"*/ class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">-->\n          <input type=\"text\" (focus)=\"CommentsUp(i)\" class=\"commentInput\" id=\"{{i}}commentInput\"\n            placeholder=\"Add Comment...\">\n          <label class=\"{{i}}CommentLabel\" for=\"{{i}}commentInput\" id=\"commentBtn\"><span\n              (click)=\"postComment(i)\">Post</span></label>\n        </div>\n  \n  \n  \n        <div id=\"profileImage\" *ngIf=\"item.image\">\n          <svg class=\"_18eSE\" width=\"60\" height=\"60\" viewBox=\"0 0 104 104\">\n            <circle id=\"{{i}}Circle\" cx=\"52\" cy=\"52\" r=\"50\" fill=\"transparent\" stroke-linecap=\"round\" stroke-width=\"4\" stroke-dashoffset=\"387.69908169872417\" class=\"_3yudO\" stroke=\"white\" stroke-width=\"3\"></circle>\n          </svg>\n          <div class=\"circle\" (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\"\n            [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1583762562/'+ item.image +'.jpg)'}\">\n            <ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon>\n          </div>\n          <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n        </div>\n  \n        <div class=\"{{i}}heartAnimations\" id=\"heartAnimations\">\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n        </div>\n  \n        <div id=\"overlay\" class=\"{{item.post_id}}Overlay\" (click)=\"removeItems(i, item.post_id)\">\n        </div>\n\n        <div id=\"{{i}}videoControlOverlay\" class=\"videoControlOverlay\">\n          <div id=\"backButton\" (click)=\"videoBack(i,item.post_id)\">\n            <ion-icon id=\"rewindIcon\" [ngStyle]=\"{color:'#ffffff'}\" name=\"rewind\"></ion-icon>\n          </div>\n          <div id=\"middleButton\" (click)=\"removeItems(i, item.post_id)\"></div>\n          <div id=\"forwardButton\" (click)=\"videoForward(i,item.post_id)\">\n            <ion-icon id=\"fowardIcon\" [ngStyle]=\"{color:'#ffffff'}\" name=\"fastforward\"></ion-icon>\n          </div>\n        </div>\n  \n        <!-- <div id=\"newPostOverlay\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n          <div *ngIf=\"post.username == item.username\" id=\"overlay\" (click)=\"removeItems(i, post.post_id)\">\n          </div>\n        </div> -->\n  \n        <div *ngIf=\"display_firsts == true\" id=\"playPause\" class=\"{{i}}playPauseDiv {{i}}playPauseBtn2\">\n            <ion-icon class=\"playPauseIcon\" id=\"{{i}}playPause\" (click)=\"playVideo(i, item.post_id)\" name=\"pause\"></ion-icon>\n        </div>\n  \n  \n        <circle-progress id=\"ngCircle\" class=\"{{i}}videoProgress\"\n        [percent]=\"percent\"\n        [radius]=\"25\"\n        [outerStrokeWidth]=\"2\"\n        [innerStrokeWidth]=\"2\"\n        [outerStrokeColor]=\"'#fc8700'\"\n        [innerStrokeColor]=\"'#ffffff'\"\n        [animation]=\"true\"\n        [animationDuration]=\"300\"\n        [showTitle]=\"false\"\n        [showSubtitle]=\"false\"\n        [showUnits]=\"false\"\n        [startFromZero]=\"false\"\n      ></circle-progress>\n        <div id=\"playPause\" class=\"{{i}}playPauseDiv {{i}}playPauseDiv2\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n            <ion-icon class=\"playPauseIcon\" *ngIf=\"post.username == item.username\" (click)=\"playVideo(i, post.post_id)\" id=\"{{i}}playPause2\" name=\"pause\"></ion-icon>\n        </div>\n  \n        <div id=\"{{item.post_id}}allComments\" class=\"allComments animated fadeInUp\">\n          <div id=\"scrollableComments\" class=\"scrollableComments\">\n            <div class=\"totalComments\" id=\"{{item.post_id}}totalCOmments\"></div>\n            <div *ngFor='let comment of (commentsRef$ | async),let c = index' id=\"{{item.post_id}}allComments\">\n              <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span>\n                <p>{{ comment.comment }}</p>\n                <ion-icon class=\"{{c}}likeComment\" id=\"likeComment\" name=\"heart-empty\" (click)=\"likeComment(c)\">\n                </ion-icon>\n              </div>\n            </div>\n          </div>\n  \n          <ion-footer keyboard-attach class=\"bar-assertive\">\n            <div id=\"fullComments\">\n              <input type=\"text\" (focus)=\"attchKeyBoard()\" (blur)=\"dettchKeyBoard()\" class=\"commentInput2\"\n                id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n              <label for=\"{{item.post_id}}commentInput2\" id=\"commentBtn\"><span (click)=\"postComment2(item.post_id)\"\n                  id=\"commentBtn\">Post</span></label>\n            </div>\n          </ion-footer>\n        </div>\n  \n  \n  \n        <!-- <div *ngFor=\"let post of ( nextPostData | async); let p = index\" id=\"{{post.post_id}}allComments\"\n          class=\"allComments animated fadeInUp\">\n          <div id=\"scrollableComments\" class=\"scrollableComments\">\n            <div class=\"totalComments\" id=\"{{post.post_id}}totalCOmments\"></div>\n            <div *ngFor='let comment of (commentsRef$ | async),let c = index' id=\"{{post.post_id}}allComments\">\n              <div id=\"allcomComment\" *ngIf=\"post.post_id == comment.post\"><span>@{{comment.user}}</span>\n                <p>{{ comment.comment }}</p>\n                <ion-icon class=\"{{c}}likeComment\" id=\"likeComment\" name=\"heart-empty\" (click)=\"likeComment(c)\">\n                </ion-icon>\n              </div>\n            </div>\n          </div>\n  \n          <ion-footer keyboard-attach class=\"bar-assertive\">\n            <div id=\"fullComments\">\n              <input type=\"text\" (focus)=\"attchKeyBoard()\" (blur)=\"dettchKeyBoard()\" class=\"commentInput2\"\n                id=\"{{post.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n              <label for=\"{{post.post_id}}commentInput2\" id=\"commentBtn\"><span (click)=\"postComment2(post.post_id)\"\n                  id=\"commentBtn\">Post</span></label>\n            </div>\n          </ion-footer>\n        </div> -->\n  \n        <div id=\"disapearingComment\" class=\"{{i}}LatestComment animated fadeInUp\" *ngIf=\"latest_comment.post == item.post_id\">\n           <p><span>@{{latest_comment.user}}</span> {{ latest_comment.comment }}</p>\n        </div>\n  \n        <div>{{ results.length }}</div>\n  \n        <ion-spinner name=\"crescent\" id=\"spinner\" class=\"{{i}}Spinner\"></ion-spinner>\n      </ion-slide>\n  \n    </ion-slides>\n  \n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/userfeed/userfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/userfeed/userfeed.module.ts ***!
  \*********************************************/
/*! exports provided: UserfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfeedPageModule", function() { return UserfeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");
/* harmony import */ var _userfeed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userfeed.page */ "./src/app/userfeed/userfeed.page.ts");








var routes = [
    {
        path: '',
        component: _userfeed_page__WEBPACK_IMPORTED_MODULE_7__["UserfeedPage"]
    }
];
var UserfeedPageModule = /** @class */ (function () {
    function UserfeedPageModule() {
    }
    UserfeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                })
            ],
            declarations: [_userfeed_page__WEBPACK_IMPORTED_MODULE_7__["UserfeedPage"]]
        })
    ], UserfeedPageModule);
    return UserfeedPageModule;
}());



/***/ }),

/***/ "./src/app/userfeed/userfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/userfeed/userfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('Roboto-Medium.ttf');\n}\np, span, ion-label, ion-searchbar {\n  font-family: \"helvetica\" !important;\n}\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\nion-title {\n  text-align: -webkit-center;\n}\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.videobcg {\n  width: inherit;\n  height: inherit;\n  background: black;\n}\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n#spinner {\n  position: absolute;\n  z-index: 99999999999;\n  color: orange;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#playPause {\n  position: absolute;\n  width: 32px;\n  height: 100px;\n  bottom: 0;\n  margin-bottom: 100px;\n  color: white;\n  right: 0;\n  z-index: 9999999999;\n  margin-right: 30px;\n  font-size: 25px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#disapearingComment {\n  width: 276px;\n  position: absolute;\n  color: white;\n  z-index: 9999999999999;\n  bottom: 0;\n  height: 36px;\n  margin-bottom: 128px;\n  left: 0;\n  font-size: 15px;\n  text-align: left;\n  margin-left: 15px;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#playPauseIcon {\n  position: absolute;\n  z-index: 99999;\n  margin-right: 15px !important;\n  right: 0;\n}\ndiv#disapearingComment span {\n  font-size: 12px;\n  font-weight: bold;\n}\np#postGenre {\n  font-weight: bold;\n}\ndiv#newPostOverlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#PostData span {\n  font-size: 13px;\n  display: flow-root;\n  line-height: 0px;\n  font-weight: bold;\n}\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n::-webkit-input-placeholder {\n  color: white;\n}\n::-moz-placeholder {\n  color: white;\n}\n:-ms-input-placeholder {\n  color: white;\n}\n::-ms-input-placeholder {\n  color: white;\n}\n::placeholder {\n  color: white;\n}\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.commentBox {\n  width: 280px;\n  height: 100px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 71px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 14px;\n}\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n.bar-assertive {\n  bottom: 0px;\n  position: absolute;\n}\n.allComments {\n  width: 100%;\n  height: 433px;\n  position: absolute;\n  z-index: 99999;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  background: white;\n  padding-top: 12px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n.postViews {\n  opacity: 0;\n}\ndiv#viewCount {\n  position: absolute;\n  top: 0;\n  color: white;\n  margin-top: 24px;\n  margin-left: 51px;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  font-family: \"helveticaB\" !important;\n  padding: 6px;\n  border-radius: 27px;\n  color: white;\n  font-size: 14px;\n  width: 73px;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n.icon {\n  margin-top: 12px;\n}\n#userComment {\n  font-size: 13px;\n  display: inline-block;\n  height: 30px;\n  width: 100%;\n}\n#userCommenter {\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n}\n#comment {\n  font-size: 13px;\n}\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: bold;\n}\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\ndiv#heartAnimations ion-icon#animation1 {\n  color: #fc8700;\n  margin-right: 15px;\n}\ndiv#heartAnimations ion-icon#animation2 {\n  color: #fc8700;\n  margin-left: 20px;\n}\ndiv#heartAnimations ion-icon#animation3 {\n  color: #fc8700;\n  margin-right: 30px;\n}\ndiv#heartAnimations ion-icon#animation4 {\n  color: #fc8700;\n}\n#ngCircle {\n  position: absolute;\n}\n#ngCircle {\n  position: absolute;\n  float: right;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 150px;\n  margin-right: 15px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\nion-icon#eye {\n  margin-top: 1px;\n}\ndiv#liveDot {\n  position: absolute;\n  z-index: 999999999;\n  width: 8px;\n  height: 8px;\n  background: #F44336;\n  border-radius: 50%;\n  top: 0;\n  margin-top: 21px;\n  margin-left: 33px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#eyeView {\n  position: absolute;\n  top: 0;\n  margin-left: 53px;\n  margin-top: 15px;\n  font-size: 17px;\n  color: white;\n  border-radius: 26%;\n  padding: 4px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 9999;\n  background: #0000002e;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 21px;\n  border-radius: 10px;\n  margin-top: 25px;\n  width: auto;\n}\ndiv#eyeView span {\n  margin-left: 4px !important;\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n  float: right;\n  margin-top: 2px;\n  margin-right: 2px;\n}\ndiv#scrollableComments {\n  width: 100%;\n  height: 361px;\n  overflow: scroll;\n  background: white;\n}\nion-icon#likeComment {\n  float: right;\n  font-size: 15px;\n  margin-right: 10px;\n}\n.totalComments {\n  width: 100%;\n  height: 26px;\n  font-weight: bold;\n  font-size: 13px;\n  padding-top: 10px;\n  position: absolute;\n  background: white;\n  padding-bottom: 10px;\n  z-index: 99;\n}\nsvg._18eSE {\n  float: left;\n  position: absolute;\n  left: 0;\n  margin-left: 11px;\n  margin-top: 11.4%;\n}\n#reportIcon {\n  position: absolute;\n  top: 0;\n  color: white;\n  float: left;\n  margin-left: 38%;\n  margin-top: 30px;\n  z-index: 99999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n.videoControlOverlay {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  display: none;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#backButton {\n  width: 30%;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv#middleButton {\n  width: 40%;\n  height: 100%;\n  float: left;\n}\ndiv#forwardButton {\n  width: 30%;\n  height: 100%;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#fowardIcon {\n  margin-left: 50%;\n  font-size: 35px;\n  opacity: 0.3;\n}\n#rewindIcon {\n  margin-left: 30%;\n  font-size: 35px;\n  opacity: 0.3;\n}\nion-icon#backIcon {\n  color: white;\n  position: absolute;\n  z-index: 9999999;\n  font-size: 25px;\n  top: 0;\n  right: 0;\n  margin-right: 30px;\n  margin-top: 20px;\n}\n@media (max-width: 361px) {\n  playPauseIcon {\n    margin-right: 29px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdXNlcmZlZWQvdXNlcmZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyZmVlZC91c2VyZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURFQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBRElBO0VBQ0ksbUNBQUE7QUNGSjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0xGO0FEUUE7RUFDRSwwQkFBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEU0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNORjtBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDUkY7QURXQTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ1BMO0VEUUE7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDTFA7QUFDRjtBREVBO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDUEw7RURRQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNMUDtBQUNGO0FEU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFB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Q0Usa0JBQUE7RUNuQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXJmZWVkL3VzZXJmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5cbkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhQic7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0Zik7XG59XG5cblxucCwgc3BhbiwgaW9uLWxhYmVsLGlvbi1zZWFyY2hiYXJ7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW1nLmxvZ29mb250IHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5ob21lVXBsb2Fke1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5ob21lU2VuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcblxufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuLnZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbiNzcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuZGl2I3BsYXlQYXVzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jZGlzYXBlYXJpbmdDb21tZW50IHtcbiAgd2lkdGg6IDI3NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEyOHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jcGxheVBhdXNlSWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwO1xufVxuXG5kaXYjZGlzYXBlYXJpbmdDb21tZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjbmV3UG9zdE92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbjo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDcxcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6OTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gICNwb3N0RGVzY3JpcHRpb257XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5iYXItYXNzZXJ0aXZle1xuICBib3R0b206MHB4O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuLmFsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuXG5cbiAgcHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbiAgc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuICAjYWxsY29tQ29tbWVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gIH1cbn1cblxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG5cbiAgLmNvbW1lbnRJbnB1dDJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA2OSU7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG5cbiAgfVxuXG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICNjb21tZW50QnRue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0Vmlld3N7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmRpdiN2aWV3Q291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNTFweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5cbmRpdiNzdHJlYW1JY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiA3M3B4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG4uaWNvbntcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuI3VzZXJDb21tZW50e1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDoxMDAlO1xufVxuXG4jdXNlckNvbW1lbnRlcntcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbn1cblxuI2NvbW1lbnR7XG4gIGZvbnQtc2l6ZToxM3B4O1xufVxuXG5cbiNzaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNTRweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbmRpdiNwcm9maWxlSW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDA7XG5cbiAgc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxOCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICAgZGl2I2ltYWdlIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMyU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgfVxuXG4gIHB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cblxuICBpb24taWNvbiNhbmltYXRpb24xIHtcbiAgICBjb2xvcjogI2ZjODcwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbiAgaW9uLWljb24jYW5pbWF0aW9uMiB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH0gIFxuICBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgICBjb2xvcjogI2ZjODcwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH0gIFxuICBpb24taWNvbiNhbmltYXRpb240IHtcbiAgICBjb2xvcjogI2ZjODcwMDtcbiAgfVxufVxuXG4jbmdDaXJjbGV7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xufVxuXG5cbiNuZ0NpcmNsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIFxufVxuXG5pb24taWNvbiNleWUge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbmRpdiNsaXZlRG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNleWVWaWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiA1M3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjYlO1xuICBwYWRkaW5nOiA0cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB3aWR0aDogYXV0bztcblxuICBzcGFue1xuICAgIG1hcmdpbi1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbn1cblxuZGl2I3Njcm9sbGFibGVDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2MXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWljb24jbGlrZUNvbW1lbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udG90YWxDb21tZW50c3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuXG5zdmcuXzE4ZVNFIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBtYXJnaW4tdG9wOiAxMS40JTtcbn1cblxuI3JlcG9ydEljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlb0NvbnRyb2xPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNiYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2I21pZGRsZUJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmRpdiNmb3J3YXJkQnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNmb3dhcmRJY29ue1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuI3Jld2luZEljb257XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5pb24taWNvbiNiYWNrSWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MzYxcHgpe1xuICBwbGF5UGF1c2VJY29ue1xuICAgIG1hcmdpbi1yaWdodDogMjlweDtcbiAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYpO1xufVxucCwgc3BhbiwgaW9uLWxhYmVsLCBpb24tc2VhcmNoYmFyIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCIgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbiNzcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuZGl2I3BsYXlQYXVzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jZGlzYXBlYXJpbmdDb21tZW50IHtcbiAgd2lkdGg6IDI3NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEyOHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jcGxheVBhdXNlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICByaWdodDogMDtcbn1cblxuZGl2I2Rpc2FwZWFyaW5nQ29tbWVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCNwb3N0R2VucmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I25ld1Bvc3RPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmRpdiNQb3N0RGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuZGl2I3VzZXJpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiA3MXB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA5NSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5kaXYjdXNlcmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdiN1c2VyaW5mbyAjcG9zdERlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYmFyLWFzc2VydGl2ZSB7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hbGxDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQzM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLmFsbENvbW1lbnRzIHAge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFsbENvbW1lbnRzIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmFsbENvbW1lbnRzICNhbGxjb21Db21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG59XG5cbiNmdWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbiNmdWxsQ29tbWVudHMgLmNvbW1lbnRJbnB1dDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNjklO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuI2Z1bGxDb21tZW50cyA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4jZnVsbENvbW1lbnRzICNjb21tZW50QnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0Vmlld3Mge1xuICBvcGFjaXR5OiAwO1xufVxuXG5kaXYjdmlld0NvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDczcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3VzZXJDb21tZW50ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI3NoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiA1NHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuZGl2I3Byb2ZpbGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbmRpdiNwcm9maWxlSW1hZ2Ugc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIGRpdiNpbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICBjb2xvcjogI2ZjODcwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgY29sb3I6ICNmYzg3MDA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgY29sb3I6ICNmYzg3MDA7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gIGNvbG9yOiAjZmM4NzAwO1xufVxuXG4jbmdDaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNuZ0NpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiNleWUge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbmRpdiNsaXZlRG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNleWVWaWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiA1M3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjYlO1xuICBwYWRkaW5nOiA0cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB3aWR0aDogYXV0bztcbn1cbmRpdiNleWVWaWV3IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuZGl2I3Njcm9sbGFibGVDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2MXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWljb24jbGlrZUNvbW1lbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udG90YWxDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbnN2Zy5fMThlU0Uge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTEuNCU7XG59XG5cbiNyZXBvcnRJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4udmlkZW9Db250cm9sT3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjYmFja0J1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdiNtaWRkbGVCdXR0b24ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYjZm9yd2FyZEJ1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZm93YXJkSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4jcmV3aW5kSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5pb24taWNvbiNiYWNrSWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MXB4KSB7XG4gIHBsYXlQYXVzZUljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMjlweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/userfeed/userfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/userfeed/userfeed.page.ts ***!
  \*******************************************/
/*! exports provided: UserfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfeedPage", function() { return UserfeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



















var UserfeedPage = /** @class */ (function () {
    function UserfeedPage(navCtrl, location, alertController, keyboard, tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage, oneSignal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.location = location;
        this.alertController = alertController;
        this.keyboard = keyboard;
        this.tabs = tabs;
        this.platform = platform;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.requests = requests;
        this.database = database;
        this.route = route;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.display_firsts = true;
        this.refresh = true;
        this.userInfo = true;
        this.mute = true;
        this.circle_circum = 294.159265359;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        this.postViewsRef$ = this.database.list("views").valueChanges();
        this.likedComments = this.database.list("comment_likes").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.platform.backButton.subscribeWithPriority(0, function () {
            if (_this.keyboard.isVisible == true) {
                _this.tabs.bottom = true;
                _this.statusBar.overlaysWebView(true);
                _this.slide.getActiveIndex().then(function (i) {
                    document.getElementById(i + "commentInput").blur();
                    _this.CommentsDown(i, true);
                });
            }
        });
    }
    UserfeedPage.prototype.back = function () {
        var _this = this;
        // console.log(clearInterval());
        this.tabs.bottom = true;
        // this.location.back();
        // this.location.
        // console.log(this.navCtrl.navigateBack);
        this.storage.get("prev_page").then(function (prev_page) {
            console.log("previous page is ", prev_page);
            var url_index = prev_page.indexOf("home");
            var prev_tab = prev_page.substring(url_index);
            _this.route.navigate(["/" + prev_tab]);
        });
    };
    UserfeedPage.prototype.stopOtherVids = function () {
        //ensure previous videos are paused
        // executor (`the producing code, "singer")
        var a = document.getElementsByTagName("video");
        console.log("videos", a);
        for (var b = 0; b < a.length; b++) {
            a[b].pause();
        }
    };
    UserfeedPage.prototype.displayComments = function () {
        var _this = this;
        this.commentsRef$.subscribe(function (val) {
            //
            // let array_length = val.length;
            // this.latest_comment =  val[array_length]; 
            // this.latest_comment.subscribe();
            var length_of_comments = val.length;
            _this.latest_comment = val[length_of_comments - 1];
            console.log("Comments", val, val[length_of_comments - 1]);
            _this.slide.getActiveIndex().then(function (i) {
                var current_coments_display = jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display");
                console.log(current_coments_display);
                if (current_coments_display == "none") {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").show();
                    setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").hide();
                    }, 5000);
                }
                // console.log("current comments display ", current_coments_display.css("display"));
            });
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
                //reset the comments count for each post
                for (var c = 0; c < val.length; c++) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (var c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    var currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
                //
                //commentinput 2
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab2.length; x++) {
                    this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
                    console.log("scroll top2", this.commnentsTab2[x].scrollTop);
                    console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
            }, 2000);
        });
    };
    //set the video length
    UserfeedPage.prototype.displayVideoDuration = function (current_lenght, video_length, current_slide) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var video_percent;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                video_percent = Math.round((current_lenght / video_length) * 100);
                this.percent = video_percent;
                console.log("video duration at ", video_percent + "%");
                // clearInterval(this.VideoTimer);
                clearInterval();
                setInterval(function () {
                    _this.slide.getActiveIndex().then(function (slide) {
                        var video = document.getElementById(slide + "videobcgf");
                        var video_percent = Math.floor(video.currentTime / video.duration * 100);
                        _this.percent = video_percent;
                    });
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    UserfeedPage.prototype.getNext = function (username, slideNum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.slide.slideNext();
                return [2 /*return*/];
            });
        });
    };
    UserfeedPage.prototype.CommentsUp = function (i) {
        console.log("Move comments up");
        this.tabs.bottom = false;
        this.slide.lockSwipes(true);
        if (this.platform.is("android")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").hide();
        }
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "0px");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").hide();
            // $("."+i+"userInfo").css("margin-bottom","82%");
            // $("."+i+"PostData").css("margin-top","-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "0px");
        }
    };
    UserfeedPage.prototype.CommentsDown = function (i, move_bottom_bar) {
        this.statusBar.overlaysWebView(true);
        this.tabs.bottom = true;
        console.log("Move comments down");
        if (this.platform.is("android")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        if (this.platform.is("ios")) {
            if (move_bottom_bar != false) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "71px");
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "PostData").css("margin-top", "20%");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "71px");
        }
    };
    UserfeedPage.prototype.attchKeyBoard = function () {
        this.statusBar.overlaysWebView(false);
    };
    UserfeedPage.prototype.dettchKeyBoard = function (post_id) {
        this.statusBar.overlaysWebView(true);
        console.log(post_id);
    };
    UserfeedPage.prototype.share = function (file) {
        this.presentActionSheet();
    };
    // ionicSlide(post_id){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val,post_id);
    //   });
    // }
    UserfeedPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.slide.getActiveIndex().then(function (val) {
            console.log("left slide ", val);
            _this.pauseVideo(val);
            jquery__WEBPACK_IMPORTED_MODULE_2__("slides").html("");
        });
        console.log("Leaving");
    };
    UserfeedPage.prototype.commentAdded = function () {
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
    UserfeedPage.prototype.playVideo = function (id, post_id) {
        var video = document.getElementById(id + "videobcgf");
        this.tabs.bottom = true;
        var CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        this.CommentsDown(id, true);
        this.refresh = true;
        this.userInfo = true;
        this.slide.lockSwipes(false);
        for (var x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        // this.CommentsUp(id);
        console.log("id", id);
        this.tabs.bottom = true;
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            this.currentSlideVideo();
            // this.setPostViews(id,post_id);
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            // {{ post. }}actualCommnents
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "pause");
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "pause");
        }
        else {
            video.pause();
            // $("."+id+"userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            if (video.paused) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "play");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "play");
            }
        }
    };
    UserfeedPage.prototype.setPostViews = function (id, post_id) {
        var _this = this;
        this.storage.get("username").then(function (username) {
            console.log("username is ", username, " post id is ", post_id, " index is ", id);
            var postViews = _this.requests.setPostViews('https://uploaded.herokuapp.com/users/users', post_id, username);
            postViews.subscribe(function (re) {
                console.log("number of views is ", re);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "userViewCountCont").text(re["view_count"]);
            });
        });
    };
    UserfeedPage.prototype.currentSlideVideo = function () {
        var _this = this;
        this.stopOtherVids();
        this.slide.getActiveIndex().then(function (currentSlide) {
            console.log("currentSlide after change is ", currentSlide);
            var current_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + currentSlide + "PostViews").text();
            console.log("current post after slide ", current_post);
            var current_post_exits = true;
            console.log(current_post);
            if (current_post == "" || current_post == undefined || currentSlide == null) {
                current_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + currentSlide + "ReservedPostViews").text();
                current_post_exits = false;
            }
            var video = document.getElementById(currentSlide + "videobcgf");
            // this.videoDuration =  this.requests.getDuration('https://uploaded.herokuapp.com/users/users', current_post);
            // this.videoDuration.subscribe((duration)=>{
            var video_length = video.duration;
            _this.displayVideoDuration(video.currentTime, video_length, currentSlide);
            video.play();
            _this.setPostViews(currentSlide, current_post);
        });
    };
    UserfeedPage.prototype.pauseVideo = function (id) {
        var video = document.getElementById(id + "videobcgf");
        console.log(id);
        console.log("paused", video.paused);
        video.pause();
    };
    UserfeedPage.prototype.repost = function (post_id) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        var current_reposts = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text());
        console.log(current_reposts);
        var repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(function (x) {
            // console.log(x, current_reposts > x, current_reposts == x, current_reposts, x);
            if (current_reposts > x.Response || current_reposts == x.Response) {
                _this.presentToast("Repost removed");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text(x.Response);
                _this.slide.getActiveIndex().then(function (x) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + x + "repostIcon").css("color", "#ffffff");
                });
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text(x.Response);
                _this.presentToast("Post has been shared to your feed");
                _this.slide.getActiveIndex().then(function (x) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + x + "repostIcon").css("color", "#fc8700");
                });
            }
        });
    };
    UserfeedPage.prototype.removeItems = function (i, post_id) {
        jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").hide();
        console.log(this.keyboard.isVisible);
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").css("display"));
        if (this.keyboard.isVisible == true || jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").css("display") == "block") {
            this.tabs.bottom = true;
            this.statusBar.overlaysWebView(true);
            this.CommentsDown(i, true);
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").hide();
            this.slide.lockSwipes(false);
        }
        else {
            var current_coments_display = jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo");
            console.log(current_coments_display.css("display"));
            if (current_coments_display.css("display") == "block") {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "repostIcon").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "shareIcon").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "postIcon").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "videoControlOverlay").show();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display", "block");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "repostIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "shareIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "postIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "videoControlOverlay").hide();
            }
        }
        // let video = <HTMLVideoElement>document.getElementById(i+"videobcg");
        // if(this.platform.is("android") && this.mute == true){
        //   this.mute = false;
        //   video.muted = false;
        // }
    };
    //video fast forward and rewind
    UserfeedPage.prototype.videoBack = function (i, post_id) {
        console.log("video rewind");
        var video = document.getElementById(i + "videobcgf");
        console.log("current time of video", video.currentTime);
        if (video.currentTime < 10) {
            this.displayVideoDuration(0, video.duration, i);
            video.currentTime = 0;
        }
        else {
            this.displayVideoDuration(video.currentTime - 10, video.duration, i);
            video.currentTime = video.currentTime - 10;
        }
    };
    UserfeedPage.prototype.videoForward = function (i, post_id) {
        console.log("video forward");
        var video = document.getElementById(i + "videobcgf");
        console.log("current time of video", video.currentTime);
        if (video.currentTime == video.duration) {
            this.displayVideoDuration(0, video.duration, i);
            video.currentTime = 0;
        }
        else {
            this.displayVideoDuration(video.currentTime + 10, video.duration, i);
            video.currentTime = video.currentTime + 10;
        }
    };
    UserfeedPage.prototype.presentToast = function (message) {
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
    UserfeedPage.prototype.onSwipeUp = function (user_id, email, i) {
        console.log("swipe up");
        console.log(user_id, email);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.pauseVideo(i);
        this.route.navigate(['/home/tabs/profile']);
    };
    UserfeedPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log(event);
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
            _this.ionViewDidEnter();
        }, 2000);
    };
    UserfeedPage.prototype.like = function (post_id, slideId) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(function (response) {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(_this.email);
            if (response == false) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeIcon").css("color", "#fc8700");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text(likes += 1);
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    };
    UserfeedPage.prototype.postComment = function (i) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput").val();
        var post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "PostViews").text();
        var postedBy;
        console.log(post_id);
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput").val("");
                var profile_url = 'https://uploaded.herokuapp.com/users/users';
                var commentNotif = _this.requests.sendCommentNotification(profile_url, post_id, postedBy, commentMessage);
                commentNotif.subscribe(function (x) {
                    console.log("notification sent");
                });
            }
            console.log(commentMessage);
        });
    };
    UserfeedPage.prototype.postComment2 = function (post_id, i) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput2").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput2").val("");
            }
            console.log(commentMessage);
        });
    };
    UserfeedPage.prototype.showAllComments = function (post_id) {
        console.log("post id ", post_id);
        this.tabs.bottom = false;
        // $("#"+post_id+"allComments").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments").show();
        this.refresh = false;
        // this.userInfo = false;
        this.slide.lockSwipes(true);
        //commentinput 2
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        //display the last comment added
        for (var x = 0; x < this.commnentsTab2.length; x++) {
            this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
            console.log("scroll top2", this.commnentsTab2[x].scrollTop);
            console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
        var totalComments = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").text();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "totalCOmments").text(totalComments + " Comments");
        console.log("total comments", totalComments);
        this.highlightLikedComments();
    };
    UserfeedPage.prototype.highlightLikedComments = function () {
        var _this = this;
        this.likedComments.subscribe(function (x) {
            console.log(x);
            var _loop_1 = function (c) {
                var commentCount = x[c].comment_array_number;
                var user_id = x[c].user_id;
                _this.storage.get("current_userID").then(function (val) {
                    if (user_id == val) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + commentCount + "likeComment").css("color", "rgb(233, 30, 99)");
                    }
                });
            };
            for (var c = 0; c < x.length; c++) {
                _loop_1(c);
            }
        });
    };
    UserfeedPage.prototype.changeIconColors = function () {
        this.tabs.tab1 = "#fc8700";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    UserfeedPage.prototype.playFirstVideo = function () {
    };
    UserfeedPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.statusBar.overlaysWebView(true);
                this.statusBar.backgroundColorByHexString('#ffffff');
                this.statusBar.styleDefault();
                this.tabs.bgColor = 'transparent';
                this.displayComments();
                this.tabs.bottom = false;
                this.slide.lockSwipes(true);
                this.storage.get('mail').then(function (val) {
                    _this.email = val;
                    if (_this.email == undefined) {
                        console.log(_this.email);
                        _this.route.navigate(['/home/tabs/tab1']);
                    }
                    else {
                        _this.storage.get("uerFeedUsername").then(function (val) {
                            console.log(val);
                            var profile_url = 'https://uploaded.herokuapp.com/users/users';
                            _this.storage.get("mail").then(function (email) {
                                _this.results = _this.requests.getUserFeed(profile_url, val, email);
                                _this.results.subscribe(function (posts) {
                                    console.log(posts);
                                    _this.setFirstViews();
                                    // this.getCurrentSlid();
                                    //listend for page load to display video count
                                    // let lstLoad = this.ListenLoad;
                                    // window.addEventListener('load', function () {
                                    //   lstLoad();
                                    // });
                                });
                            });
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    // ListenLoad(){
    //   this.results.subscribe((x)=>{
    //     if(document.readyState == "complete"){
    //       for(let a =0; a < x.length; a++){
    //         let circ =  JSON.stringify(this.circle_circum/x[a].post_count);
    //         console.log(circ);
    //         $("#"+a+"Circle").css("stroke-dasharray", circ+", 10");
    //       } 
    //     }
    //   });
    // }
    UserfeedPage.prototype.presentNotificationToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({ message: msg.body, duration: 3000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserfeedPage.prototype.ionViewDidLeave = function () {
        var _this = this;
        console.log("Left stream page");
        this.slide.getActiveIndex().then(function (index) {
            console.log("current index when leaving ", index);
            var slide_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + index + "ReservedPostViews").text();
            var slide_post2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + index + "PostViews").text();
            console.log("slide number ", slide_post, " ", slide_post2);
            _this.storage.get("current_userID").then(function (val) {
                _this.database.list("views/").remove(JSON.stringify(val + slide_post));
                _this.database.list("views/").remove(JSON.stringify(val + slide_post2));
                console.log(JSON.stringify(val + slide_post));
                // this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
                //display views
            });
        });
    };
    UserfeedPage.prototype.setFirstViews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.ListenLoad();
                    return [4 /*yield*/, this.slide.getActiveIndex().then(function (index) {
                            console.log("current index is", index);
                            _this.results.subscribe(function (val) {
                                console.log("current video at index 0 ", val[0]);
                                console.log("all videos  ", val);
                                var post_id = JSON.stringify(val[0].post_id);
                                _this.storage.get("current_userID").then(function (val) {
                                    // this.database.list("views/").remove(JSON.stringify(val+post_id));
                                    // this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
                                    //display views
                                    _this.slide.getActiveIndex().then(function (val) {
                                        console.log(val);
                                        _this.playVideo(val, post_id);
                                    });
                                });
                            });
                        })];
                    case 1:
                        // this.ListenLoad();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //handles the number of live viewer
    UserfeedPage.prototype.swiped = function (id, post_id, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var idd, video, current_post_id, prev_post_id, current_post_id, prev_post_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //
                console.log("post", post_id);
                console.log("left");
                idd = id - 1;
                this.current_post_id = post_id;
                video = document.getElementById(id + "videobcgf");
                console.log(id);
                console.log("paused", video.paused);
                console.log(direction);
                if (direction == "left") {
                    current_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id + 1) + "PostViews").text();
                    prev_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "PostViews").text();
                    // this.storage.get("current_userID").then((val)=>{
                    //   this.database.list("views/").remove(JSON.stringify(val+current_post_id))
                    //   this.database.list("views/").remove(JSON.stringify(val+prev_post_id))
                    //   this.database.object("views/"+JSON.stringify(val+current_post_id)).set({"user": val, "post_id":current_post_id});
                    //   //display views
                    //   // this.slide.getActiveIndex().then((val) => { 
                    //   //   console.log(val);
                    //   //   this.playVideo(val,post_id);
                    //   // });
                    //   // this.postViewsRef$.subscribe((val)=>{
                    //   //   for(let c = 0; c < val.length; c++){
                    //   //     $("."+val[c].post_id+"viewCount").text("0");
                    //   //   }
                    //   //   for(let v =0; v < val.length; v++){
                    //   //     let key = Object.keys(val[v])[0];
                    //   //     console.log(key);
                    //   //     let post_id =  val[v].post_id;
                    //   //     console.log(post_id);
                    //   //     let current_views = parseInt($("."+post_id+"viewCount").text());
                    //   //     current_views += 1;
                    //   //     $("."+post_id+"viewCount").text(current_views);
                    //   //   }
                    //   // });
                    // });
                    console.log(current_post_id);
                }
                else if (direction == "right") {
                    current_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + idd + "PostViews").text();
                    prev_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id) + "PostViews").text();
                    // this.storage.get("current_userID").then((val)=>{
                    //   this.database.list("views/").remove(JSON.stringify(val+current_post_id));
                    //   this.database.list("views/").remove(JSON.stringify(val+prev_post_id));
                    //   this.database.object("views/"+JSON.stringify(val+current_post_id)).set({"user": val, "post_id":current_post_id});
                    //   // this.slide.getActiveIndex().then((val) => { 
                    //   //   console.log(val);
                    //   //   this.playVideo(val,post_id);
                    //   // });
                    //   // this.postViewsRef$.subscribe((val)=>{
                    //   //   for(let c = 0; c < val.length; c++){
                    //   //     $("."+val[c].post_id+"viewCount").text("0");
                    //   //   }
                    //   //   for(let v =0; v < val.length; v++){
                    //   //     let key = Object.keys(val[v])[0];
                    //   //     console.log(key);
                    //   //     let post_id =  val[v].post_id;
                    //   //     console.log(post_id);
                    //   //     let current_views = parseInt($("."+post_id+"viewCount").text());
                    //   //     current_views += 1;
                    //   //     $("."+post_id+"viewCount").text(current_views);
                    //   //   }
                    //   // });
                    // });
                }
                return [2 /*return*/];
            });
        });
    };
    UserfeedPage.prototype.likeComment = function (comment_array_number) {
        var _this = this;
        console.log("comment array number: ", comment_array_number);
        this.storage.get("current_userID").then(function (user_id) {
            var likeIcon = jquery__WEBPACK_IMPORTED_MODULE_2__("." + comment_array_number + "likeComment");
            console.log(likeIcon.css("color"));
            if (likeIcon.css("color") == 'rgb(233, 30, 99)') {
                console.log("unliked");
                likeIcon.css("color", 'rgb(00, 00, 00)');
                _this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number + user_id));
            }
            else {
                likeIcon.css("color", 'rgb(233, 30, 99)');
                _this.database.object("comment_likes/" + JSON.stringify(comment_array_number + user_id)).set({ "user_id": user_id, "comment_array_number": comment_array_number });
                console.log("like successful");
            }
        });
    };
    //loading component
    UserfeedPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            duration: 4000
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
    //report
    UserfeedPage.prototype.reportSuccessfull = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Reported',
                            subHeader: 'Report successful',
                            message: 'Thank you for reporting, our team will soon review the post.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserfeedPage.prototype.report = function (post_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportActionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Report content',
                            buttons: [{
                                    text: "it's spam",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "it's spam");
                                        report.subscribe(function (re) {
                                            _this.reportSuccessfull();
                                        });
                                    }
                                }, {
                                    text: "it's innapropriate",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        _this.innapropriate(post_id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        reportActionSheet = _a.sent();
                        return [4 /*yield*/, reportActionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserfeedPage.prototype.innapropriate = function (post_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var InnapropriateActionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Innapropriate content',
                            buttons: [{
                                    text: "Nudity or sexual activity",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "Nudity or sexual activity");
                                        report.subscribe(function (re) {
                                            console.log(re);
                                            _this.reportSuccessfull();
                                        });
                                    }
                                }, {
                                    text: "Hate speech or symbols",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "Hate speech or symbols");
                                        report.subscribe(function (re) {
                                            console.log(re);
                                            _this.reportSuccessfull();
                                        });
                                    }
                                },
                                {
                                    text: "Violence",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "violence");
                                        report.subscribe(function (re) {
                                            console.log(re);
                                            _this.reportSuccessfull();
                                        });
                                    }
                                }, {
                                    text: "Bullying or harrasment",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "Bullying or harrasment");
                                        report.subscribe(function (re) {
                                            console.log(re);
                                            _this.reportSuccessfull();
                                        });
                                    }
                                }, {
                                    text: "Intellectual property violation",
                                    role: 'destructive',
                                    // icon: 'megaphone',
                                    handler: function () {
                                        var report = _this.requests.Report('https://uploaded.herokuapp.com/users/users', post_id, "IP violation");
                                        report.subscribe(function (re) {
                                            console.log(re);
                                            _this.reportSuccessfull();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        InnapropriateActionSheet = _a.sent();
                        return [4 /*yield*/, InnapropriateActionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //present share options
    UserfeedPage.prototype.presentActionSheet = function () {
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
    UserfeedPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], UserfeedPage.prototype, "slide", void 0);
    UserfeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./userfeed.page.html */ "./node_modules/raw-loader/index.js!./src/app/userfeed/userfeed.page.html"),
            styles: [__webpack_require__(/*! ./userfeed.page.scss */ "./src/app/userfeed/userfeed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]])
    ], UserfeedPage);
    return UserfeedPage;
}());



/***/ })

}]);
//# sourceMappingURL=userfeed-userfeed-module-es5.js.map