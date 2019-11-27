import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
let Tab1Page = class Tab1Page {
    constructor(tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage) {
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
        this.refresh = true;
        this.userInfo = true;
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
        //savetoken
        /*this.oneSignal.getIds().then(identity => {
          let id = identity.userId;
          let url = 'https://uploaded.herokuapp.com/users/users';
          this.storage.get("mail").then(mail=>{
            let registerDevice = this.requests.registerDevice(url, id, mail);
            registerDevice.subscribe();
          });
        });*/
    }
    displayComments() {
        this.commentsRef$.subscribe((val) => {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (let x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
                //reset the comments count for each post
                for (let c = 0; c < val.length; c++) {
                    $("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (let c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    let currentTotalComments = parseInt($("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    $("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
                //
                //commentinput 2
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                //display the last comment added
                for (let x = 0; x < this.commnentsTab2.length; x++) {
                    this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
                    console.log("scroll top2", this.commnentsTab2[x].scrollTop);
                    console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
            }, 2000);
        });
    }
    getNext(username, slideNum) {
        console.log("user " + username);
        console.log("ended");
        $("#" + slideNum + "commentBox").remove();
        $("#" + slideNum + "FirstPostData").remove();
        let profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.storage.get("mail").then((email) => {
            let user_post;
            let req = this.requests;
            let com = this.commentsRef$;
            this.nextPostData = this.requests.getUserFeed(profile_url, username, email);
            this.nextPostData.subscribe();
            setTimeout(function () {
                console.log("fetching video");
                user_post = req.getUserFeed(profile_url, username, email);
                user_post.subscribe((users_post) => {
                    console.log(users_post);
                    let post_id = users_post[0].post_id;
                    console.log(post_id);
                    let video_file = "https://res.cloudinary.com/uploaded/video/upload/q_auto:low/" + users_post[0].file + ".mp4#t=" + users_post[0].start + "";
                    let post_description = users_post[0].description;
                    $("#" + slideNum + "videobsource").attr("src", video_file);
                    let new_vid = document.getElementById(slideNum + "videobcg");
                    $("." + slideNum + "PostDescription").text(post_description);
                    let comments_array = [];
                    com.subscribe((comment) => {
                        console.log(comment);
                        // $("."+slideNum+"commentSection").html("");
                        for (var c = 0; c < comment.length; c++) {
                            if (comment[c].post == post_id) {
                                console.log(comment[c].post == post_id);
                                console.log(comment[c].post, post_id);
                                comments_array.push(comment[c]);
                                // let comment_user = comment[c].user;
                                // let actuall_comment = comment[c].comment;
                                // $("."+slideNum+"commentSection").append("<span id='userComment'><span>@"+comment_user+ "</span><span> "+actuall_comment+"</span><br/><br/></span>");
                            }
                            // {{post.post_id}}CommentsCount
                            $("#" + post_id + "CommentsCount").text(comments_array.length);
                        }
                        $("." + slideNum + "CommentLabel").html("<span (click)='postComment(" + post_id + "," + slideNum + ")'>Post</span>");
                        console.log(comments_array);
                    });
                    console.log(com);
                    new_vid.load();
                });
            }, 2000);
            // return this.requests;
        });
    }
    CommentsUp(i) {
        console.log("Move comments up");
        this.tabs.bottom = false;
        this.slide.lockSwipes(true);
        if (this.platform.is("ios")) {
            $("." + i + "userInfo").css("margin-bottom", "0px");
            // $("."+i+"userInfo").css("margin-bottom","82%");
            // $("."+i+"PostData").css("margin-top","-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
            $("." + i + "userInfo").css("margin-bottom", "0px");
        }
    }
    CommentsDown(i) {
        this.statusBar.overlaysWebView(true);
        this.tabs.bottom = true;
        console.log("Move comments down");
        if (this.platform.is("ios")) {
            $("." + i + "userInfo").css("margin-bottom", "100px");
            $("." + i + "PostData").css("margin-top", "20%");
        }
        else {
            $("." + i + "userInfo").css("margin-bottom", "100px");
        }
    }
    attchKeyBoard() {
        this.statusBar.overlaysWebView(false);
    }
    dettchKeyBoard(post_id) {
        this.statusBar.overlaysWebView(true);
        console.log(post_id);
    }
    share(file) {
        this.presentActionSheet();
    }
    // ionicSlide(post_id){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val,post_id);
    //   });
    // }
    ionViewWillLeave() {
        this.slide.getActiveIndex().then((val) => {
            console.log("left slide ", val);
            this.pauseVideo(val);
        });
        console.log("Leaving");
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
    playVideo(id, post_id) {
        var video = document.getElementById(id + "videobcg");
        this.tabs.bottom = true;
        let CommentsBox = $(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        this.CommentsDown(id);
        this.refresh = true;
        this.userInfo = true;
        this.slide.lockSwipes(false);
        for (let x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        // this.CommentsUp(id);
        console.log("id", id);
        this.tabs.bottom = true;
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            this.videoDuration = this.requests.getDuration('https://uploaded.herokuapp.com/users/users', post_id);
            this.videoDuration.subscribe((duration) => {
                let video_length = video.duration;
                console.log(duration, video_length);
                // if(video.duration == parseFloat(duration[0]) || video.duration < parseFloat(duration[0])){
                //   this.reset_start = this.requests.resetPost('https://uploaded.herokuapp.com/users/users', post_id);
                //   this.reset_start.subscribe((reset)=>{
                //     console.log(reset);
                //   });
                // }
                video.currentTime = parseFloat(duration[0]);
                video.play();
            });
            $("." + id + "userInfo").show();
            $("." + id + "PostData").show();
            //add view count
        }
        else {
            video.pause();
            $("." + id + "userInfo").show();
            $("." + id + "PostData").show();
        }
    }
    pauseVideo(id) {
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        video.pause();
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
    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    onSwipeUp(user_id, email, i) {
        console.log("swipe up");
        console.log(user_id, email);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.pauseVideo(i);
        this.route.navigate(['/home/tabs/profile']);
    }
    doRefresh(event) {
        console.log(event);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
            this.ionViewDidEnter();
        }, 2000);
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
                $("#" + post_id + "likeIcon").css("color", "#E91E63");
                var likes = JSON.parse($("#" + post_id + "likeCount").text());
                $("#" + post_id + "likeCount").text(likes += 1);
                $("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    $("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                $("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse($("#" + post_id + "likeCount").text());
                $("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = $("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                $("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    }
    postComment2(post_id) {
        var commentMessage = $("#" + post_id + "commentInput2").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                $("#" + post_id + "commentInput2").val("");
            }
            console.log(commentMessage);
        });
    }
    showAllComments(post_id) {
        console.log("post id ", post_id);
        this.tabs.bottom = false;
        // $("#"+post_id+"allComments").show();
        $(".allComments").show();
        this.refresh = false;
        this.userInfo = false;
        this.slide.lockSwipes(true);
        //commentinput 2
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        //display the last comment added
        for (let x = 0; x < this.commnentsTab2.length; x++) {
            this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
            console.log("scroll top2", this.commnentsTab2[x].scrollTop);
            console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
        let totalComments = $("#" + post_id + "CommentsCount").text();
        $("#" + post_id + "totalCOmments").text(totalComments + " Comments");
        console.log("total comments", totalComments);
        this.highlightLikedComments();
    }
    highlightLikedComments() {
        this.likedComments.subscribe(x => {
            console.log(x);
            for (let c = 0; c < x.length; c++) {
                let commentCount = x[c].comment_array_number;
                let user_id = x[c].user_id;
                this.storage.get("current_userID").then(val => {
                    if (user_id == val) {
                        $("." + commentCount + "likeComment").css("color", "rgb(233, 30, 99)");
                    }
                });
            }
        });
    }
    changeIconColors() {
        this.tabs.tab1 = "#fc8700";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    playFirstVideo() {
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.playFirstVideo();
        //change icon colors
        this.changeIconColors();
        this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            // var profile_url = 'http://127.0.0.1:8000/users/users'
            if (this.email == undefined) {
                console.log(this.email);
                this.route.navigate(['/home/tabs/tab1']);
            }
            else {
                console.log(this.email);
                this.results = this.requests.getFeed(profile_url, this.email);
            }
        });
    }
    presentNotificationToast(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({ message: msg.body, duration: 3000 });
            toast.present();
        });
    }
    swiped(id, post_id, direction) {
        console.log("post", post_id);
        console.log("left");
        let idd = id - 1;
        this.current_post_id = post_id;
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        //video.pause();
        if (video.paused == true) {
            //video.play();
        }
        else {
            video.pause();
        }
        console.log(direction);
        if (direction == "left") {
            let current_post_id = $("#" + parseInt(id + 1) + "PostViews").text();
            let prev_post_id = $("#" + id + "PostViews").text();
            this.storage.get("current_userID").then((val) => {
                this.database.list("views/").remove(JSON.stringify(val + current_post_id));
                this.database.list("views/").remove(JSON.stringify(val + prev_post_id));
                this.database.object("views/" + JSON.stringify(val + current_post_id)).set({ "user": val, "post_id": current_post_id });
                //display views
                this.slide.getActiveIndex().then((val) => {
                    console.log(val);
                    this.playVideo(val, post_id);
                });
                this.postViewsRef$.subscribe((val) => {
                    for (let c = 0; c < val.length; c++) {
                        $("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (let v = 0; v < val.length; v++) {
                        let key = Object.keys(val[v])[0];
                        console.log(key);
                        let post_id = val[v].post_id;
                        console.log(post_id);
                        let current_views = parseInt($("." + post_id + "viewCount").text());
                        current_views += 1;
                        $("." + post_id + "viewCount").text(current_views);
                    }
                });
            });
            console.log(current_post_id);
        }
        else if (direction == "right") {
            let current_post_id = $("#" + idd + "PostViews").text();
            let prev_post_id = $("#" + parseInt(id) + "PostViews").text();
            this.storage.get("current_userID").then((val) => {
                this.database.list("views/").remove(JSON.stringify(val + current_post_id));
                this.database.list("views/").remove(JSON.stringify(val + prev_post_id));
                this.database.object("views/" + JSON.stringify(val + current_post_id)).set({ "user": val, "post_id": current_post_id });
                this.slide.getActiveIndex().then((val) => {
                    console.log(val);
                    this.playVideo(val, post_id);
                });
                this.postViewsRef$.subscribe((val) => {
                    for (let c = 0; c < val.length; c++) {
                        $("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (let v = 0; v < val.length; v++) {
                        let key = Object.keys(val[v])[0];
                        console.log(key);
                        let post_id = val[v].post_id;
                        console.log(post_id);
                        let current_views = parseInt($("." + post_id + "viewCount").text());
                        current_views += 1;
                        $("." + post_id + "viewCount").text(current_views);
                    }
                });
            });
        }
    }
    likeComment(comment_array_number) {
        console.log("comment array number: ", comment_array_number);
        this.storage.get("current_userID").then(user_id => {
            let likeIcon = $("." + comment_array_number + "likeComment");
            console.log(likeIcon.css("color"));
            if (likeIcon.css("color") == 'rgb(233, 30, 99)') {
                console.log("unliked");
                likeIcon.css("color", 'rgb(00, 00, 00)');
                this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number + user_id));
            }
            else {
                likeIcon.css("color", 'rgb(233, 30, 99)');
                this.database.object("comment_likes/" + JSON.stringify(comment_array_number + user_id)).set({ "user_id": user_id, "comment_array_number": comment_array_number });
                console.log("like successful");
            }
        });
    }
    //loading component
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 4000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    //
    //present share options
    presentActionSheet() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
};
tslib_1.__decorate([
    ViewChild('slider', { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], Tab1Page.prototype, "slide", void 0);
Tab1Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, Platform, LoadingController, StatusBar, ActionSheetController, ToastController, RequestsService, AngularFireDatabase, Router, Storage])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map