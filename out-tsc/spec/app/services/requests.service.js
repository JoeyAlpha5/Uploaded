import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "angularfire2/firestore";
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let RequestsService = class RequestsService {
    constructor(storage, toast, http, afs, platform) {
        this.storage = storage;
        this.toast = toast;
        this.http = http;
        this.afs = afs;
        this.platform = platform;
    }
    //get profile api
    getProfile(url, email) {
        return this.http.get(url, { params: { email: email, type: 'profile' } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getProfilePlaylists(url, email) {
        return this.http.get(url, { params: { email: email, type: 'profile' } }).pipe(map(results => {
            console.log("Results", results);
            return results["posts"];
        }));
    }
    GetPost(url, val, email) {
        return this.http.get(url, { params: { post: val, email: email, type: 'getPost' } }).pipe(map(results => {
            console.log("Post data", results);
            return results["post"];
        }));
    }
    getSearchResults(url, searchTerm, user_email) {
        return this.http.get(url, { params: { Term: searchTerm, type: 'search', email: user_email } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    // profile_url, Email, user_name, first_name, website, bio,location,this.file
    updateProfile(url, user_email, user_name, first_name, website, bio, location, file) {
        let postData = new FormData();
        postData.append('type', 'updateProfile');
        postData.append('email', user_email);
        postData.append('user_name', user_name);
        postData.append('first_name', first_name);
        postData.append('website', website);
        postData.append('location', location);
        postData.append('bio', bio);
        postData.append('file', file);
        return this.http.post(url, postData).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getFeed(url, user_email) {
        return this.http.get(url, { params: { type: 'feed', email: user_email } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getPlaces(url, input) {
        return this.http.get(url, { params: { type: 'places', input: input } }).pipe(map(results => {
            console.log("Results", results);
            return results["data"];
        }));
    }
    Repost(url, user_email, post_id) {
        return this.http.get(url, { params: { type: 'repost', email: user_email, post: post_id } }).pipe(map(results => {
            console.log("Repost", results);
            return results;
        }));
    }
    getUserProfile(url, user_id, user_email) {
        return this.http.get(url, { params: { type: 'getUser_UD', user_id: user_id, email: user_email } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Follow(url, user_id, user_email) {
        return this.http.get(url, { params: { type: 'Follow', user_id: user_id, email: user_email } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Like(url, user_email, post_id) {
        return this.http.get(url, { params: { type: 'like', email: user_email, post: post_id } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Upload(url, user_email, file, description, genre, playlisted) {
        let postData = new FormData();
        postData.append('file', file);
        postData.append('type', 'upload');
        postData.append('email', user_email);
        postData.append('description', description);
        postData.append('genre', genre);
        postData.append('playlisted', playlisted);
        return this.http.post(url, postData).pipe(map(results => {
            console.log("Results", results);
            return results["newly created post_id"];
        }));
    }
    Login(url, user_email, password) {
        return this.http.get(url, { params: { type: 'login', email: user_email, password: password } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    deletePost(url, post_id) {
        return this.http.get(url, { params: { type: 'deletePost', id: post_id } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    getUserFeed(url, username, email) {
        return this.http.get(url, { params: { type: 'getUserFeed', username: username, "email": email } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    //notifications
    registerDevice(url, userId, email) {
        return this.http.get(url, { params: { type: 'registerDevice', userId: userId, email: email } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    sendMessageNotification(url, to, sender, message) {
        return this.http.get(url, { params: { type: 'sendMessageNotif', to: to, sender: sender, message: message } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    UpdateNotifications(url, user_id, type) {
        return this.http.get(url, { params: { type: 'updateNotifications', user: user_id, notificationInfo: type } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    UpdateIndividualNotifications(url, user_id, type, value) {
        return this.http.get(url, { params: { type: 'updateIndividualNotifications', user: user_id, notificationInfo: type, NotificationsValue: value } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    getNotificationSettings(url, user_id) {
        return this.http.get(url, { params: { type: 'getNotificationSettings', user: user_id } }).pipe(map(results => {
            console.log("Results", results);
            return results;
        }));
    }
    //
    searchPage(url) {
        return this.http.get(url, { params: { type: 'searchPage' } }).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    searchPageOneBig(url) {
        return this.http.get(url, { params: { type: 'searchPage' } }).pipe(map(results => {
            console.log("Results", results["One"]);
            return results["One"];
        }));
    }
    getDuration(url, post_id) {
        return this.http.get(url, { params: { type: 'getDuration', post: post_id } }).pipe(map(results => {
            console.log("Results", results);
            return results['Response'];
        }));
    }
    resetPost(url, post_id) {
        return this.http.get(url, { params: { type: 'resetPost', post: post_id } }).pipe(map(results => {
            console.log("Results", results);
            return results['Response'];
        }));
    }
    UploadCoverImage(url, user_email, file) {
        let postData = new FormData();
        postData.append('file', file);
        postData.append('type', 'uploadCover');
        postData.append('email', user_email);
        return this.http.post(url, postData).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    UploadCroppedCoverImage(url, user_email, file) {
        let postData = new FormData();
        postData.append('file', file);
        postData.append('type', 'uploadCroppedCover');
        postData.append('email', user_email);
        return this.http.post(url, postData).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    UploadChatFile(url, filename, file) {
        let postData = new FormData();
        postData.append('file', file);
        postData.append('type', 'chatFileUpload');
        postData.append('id', filename);
        return this.http.post(url, postData).pipe(map(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
};
RequestsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, ToastController, HttpClient, AngularFirestore, Platform])
], RequestsService);
export { RequestsService };
//# sourceMappingURL=requests.service.js.map