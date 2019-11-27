import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let NotificationsPage = class NotificationsPage {
    constructor(route, platform, statusBar) {
        this.route = route;
        this.platform = platform;
        this.statusBar = statusBar;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.route.navigate(['/home/tabs/tab4']);
        });
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/home/tabs/tab4']);
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
    }
    navigateToNotifications() {
        this.route.navigate(['/home/tabs/notifyme']);
    }
};
NotificationsPage = tslib_1.__decorate([
    Component({
        selector: 'app-notifications',
        templateUrl: './notifications.page.html',
        styleUrls: ['./notifications.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Platform, StatusBar])
], NotificationsPage);
export { NotificationsPage };
//# sourceMappingURL=notifications.page.js.map