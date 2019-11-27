import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
let LoginPage = class LoginPage {
    constructor(toast, loadingController, statusBar, route, requests, storage) {
        this.toast = toast;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.route = route;
        this.requests = requests;
        this.storage = storage;
        this.Bottom = true;
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        console.log('page has loaded');
        this.presentLoading();
        //check for stored credentials
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                $(".login").show();
            }
            else {
                this.route.navigate(['/home/tabs/tab1']);
            }
        });
    }
    disableBottom() {
        this.Bottom = false;
        console.log("bottom disabled");
    }
    enableBottom() {
        this.Bottom = true;
        console.log("bottom enabled");
    }
    login() {
        const emailInput = $('#emailInput').val();
        const passwordInput = $('#passwordInput').val();
        var message = 'Please fill in all fields';
        if (emailInput === '' || passwordInput === '') {
            console.log('Error in loggin in');
            this.presentLoadingWithOptions(message);
        }
        else {
            let url = 'https://uploaded.herokuapp.com/users/users';
            this.presentLoading();
            let login = this.requests.Login(url, emailInput, passwordInput);
            login.subscribe(data => {
                console.log(data.data);
                if (data.data == "Authentication test passed") {
                    this.storage.set('mail', emailInput);
                    this.storage.set('password', emailInput);
                    this.storage.set('username', data.username);
                    this.storage.set('current_userID', data.id);
                    $(".signInPrompt").text("Login successful");
                    $("#UploadedHeading").text(JSON.stringify(emailInput));
                    $("#UploadedHeading").css("color", "#0d8479");
                    $(".signInPrompt").css("color", "#0d8479");
                    this.route.navigate(['home/tabs/tab1']);
                }
                else {
                    $(".signInPrompt").text("User not found");
                    $("#UploadedHeading").text(JSON.stringify(emailInput));
                    $("#UploadedHeading").css("color", "#f44336");
                    $(".signInPrompt").css("color", "#f44336");
                }
            });
        }
    }
    //loading component
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    //
    presentLoadingWithOptions(Message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 1000,
                message: Message,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController, LoadingController, StatusBar, Router, RequestsService, Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map