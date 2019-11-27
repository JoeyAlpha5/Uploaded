import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let NotifymePage = class NotifymePage {
    constructor(storage, requests, toastController, route, platform, statusBar) {
        this.storage = storage;
        this.requests = requests;
        this.toastController = toastController;
        this.route = route;
        this.platform = platform;
        this.statusBar = statusBar;
        this.pushAll = false;
        this.like = false;
        this.follow = false;
        this.comment = false;
        this.repost = false;
        this.upload = false;
        this.features = false;
        this.dm = false;
        this.tag = false;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.route.navigate(['/home/tabs/notifications']);
        });
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/home/tabs/notifications']);
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.storage.get('current_userID').then((val) => {
            this.results = this.requests.getNotificationSettings(this.profile_url, val);
            this.results.subscribe(x => {
                console.log(x);
                this.like = x.like;
                this.follow = x.follow;
                this.comment = x.follow;
                this.repost = x.repost;
                this.upload = x.upload;
                this.tag = x.tag;
                this.dm = x.dm;
                this.features = x.features;
                this.pushAll = x.pushAll;
            });
        });
    }
    enableAllNotifications($event) {
        console.log($event.target.checked);
        if ($event.target.checked == true) {
            this.pushAll = true;
            this.like = true;
            this.follow = true;
            this.comment = true;
            this.repost = true;
            this.upload = true;
            this.features = true;
            this.dm = true;
            this.tag = true;
            this.storage.get('current_userID').then((val) => {
                this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allTrue");
                this.notification.subscribe(x => {
                });
            });
        }
        else {
            this.pushAll = false;
            this.like = false;
            this.follow = false;
            this.comment = false;
            this.repost = false;
            this.upload = false;
            this.features = false;
            this.dm = false;
            this.tag = false;
            this.storage.get('current_userID').then((val) => {
                this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allFalse");
                this.notification.subscribe(x => {
                    this.presentToast(x.Response);
                });
            });
        }
    }
    updateNotification($event, type, value) {
        this.storage.get('current_userID').then((val) => {
            this.updateNotifications = this.requests.UpdateIndividualNotifications(this.profile_url, val, type, value);
            this.updateNotifications.subscribe(x => {
                this.presentToast(x.Response);
            });
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
NotifymePage = tslib_1.__decorate([
    Component({
        selector: 'app-notifyme',
        templateUrl: './notifyme.page.html',
        styleUrls: ['./notifyme.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, RequestsService, ToastController, Router, Platform, StatusBar])
], NotifymePage);
export { NotifymePage };
//# sourceMappingURL=notifyme.page.js.map