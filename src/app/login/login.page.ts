import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loadingController: LoadingController, private statusBar: StatusBar) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#ffffff');

  }


  ngOnInit() {
  }

  ionViewDidEnter() {
    // Put here the code you want to execute
    console.log('page has loaded');
    //check for stored credentials
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if(email == null && password == null){
      $('.login').show();
    }else{
      window.location.href = 'home/tabs/tab1';
    }
    this.presentLoading();
  }


  login() {
    const emailInput = $('#emailInput').val();
    const passwordInput = $('#passwordInput').val();
    var message = 'Please fill in all fields';
    if ( emailInput === '' || passwordInput === '' ) {
      console.log('Error in loggin in');
      this.presentLoadingWithOptions(message);
    }
    else {
      this.presentLoading();
      $.ajax({
        type: 'GET',
        url: 'https://uploaded.herokuapp.com/users/users',
        dataType: 'json',
        data: {email: emailInput, password: passwordInput, type: 'login'},
        async: true,
        success: function(data) {
          //
          if(data.data == "Authentication test passed") {
            localStorage.setItem('email', JSON.stringify(emailInput));
            localStorage.setItem('password', JSON.stringify(passwordInput));
            localStorage.setItem('username', JSON.stringify(data.username));
            $(".signInPrompt").text("Login successful");
            $("#UploadedHeading").text(JSON.stringify(emailInput));
            $("#UploadedHeading").css("color","#0d8479");
            $(".signInPrompt").css("color","#0d8479");
            window.location.href = 'home/tabs/tab1';
          }else{
            $(".signInPrompt").text("User not found");
            $("#UploadedHeading").text(JSON.stringify(emailInput));
            $("#UploadedHeading").css("color","#f44336");
            $(".signInPrompt").css("color","#f44336");
            
          }

          console.log(data);
        }
      });
    }
  }


  //loading component
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

   // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  //
  async presentLoadingWithOptions(Message) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: Message,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


}
