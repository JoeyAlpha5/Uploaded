import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
let PostViewPage = class PostViewPage {
    constructor(platform, location, actionSheetController, database, tabsPage, requests, toastController, statusBar, route, loadingController, storage) {
        this.platform = platform;
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
        this.userInfo = true;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        this.postViewsRef$ = this.database.list("views").valueChanges();
        this.likedComments = this.database.list("comment_likes").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.tabsPage.bgColor = '#000000';
        this.displayComments();
    }
    ngOnInit() {
    }
    attchKeyBoard() {
        this.statusBar.overlaysWebView(false);
        $(".scrollableComments").css("margin-top", "100px");
    }
    dettchKeyBoard() {
        this.statusBar.overlaysWebView(true);
        $(".scrollableComments").css("margin-top", "0px");
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
                        $("#" + val[c].post + "CommentsCounts").text("0");
                    }
                    //get the number of comments for each post
                    for (let c = 0; c < val.length; c++) {
                        //console.log("this comment belongs to post ", val[c].post);
                        let currentTotalComments = parseInt($("#" + val[c].post + "CommentsCounts").text());
                        currentTotalComments += 1;
                        $("#" + val[c].post + "CommentsCounts").text(currentTotalComments);
                    }
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
        let CommentsBox = $(".allComments");
        console.log(CommentsBox);
        this.moveDownComments();
        this.userInfo = true;
        //close all comment boxes
        for (let x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
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
    showAllComments(post_id) {
        console.log(post_id);
        // this.tabs.bottom = false;
        $("#" + post_id + "allComments2").show();
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
        let totalComments = $(".comCount").text();
        $("#" + post_id + "totalCOmments2").text(totalComments + " Comments");
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
        var commentMessage = $("#" + post_id + "commentIn").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                $("#" + post_id + "commentIn").val("");
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
    moveUpComments(i) {
        $(".userinfos").css("margin-bottom", "0px");
        if (this.platform.is("android")) {
            this.statusBar.overlaysWebView(false);
        }
        console.log("Move comments up ", i);
        // $("#userinfo").css("margin-bottom", "0px");
    }
    moveDownComments() {
        // this.styleExp = "0";
        // this.styleTop = "unset";
        // this.styleMarginTop = "unset";
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
        $(".userinfos").css("margin-bottom", "100px");
    }
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
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
};
PostViewPage = tslib_1.__decorate([
    Component({
        selector: 'app-post-view',
        templateUrl: './post-view.page.html',
        styleUrls: ['./post-view.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, Location, ActionSheetController, AngularFireDatabase, TabsPage, RequestsService, ToastController, StatusBar, Router, LoadingController, Storage])
], PostViewPage);
export { PostViewPage };
//# sourceMappingURL=post-view.page.js.map