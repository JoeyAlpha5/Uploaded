import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public toast: ToastController,public loadingController: LoadingController, private statusBar: StatusBar,private route: Router, private requests: RequestsService,private storage: Storage ) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);
    // // set status bar to white
    this.statusBar.backgroundColorByHexString('#ffffff');
  }


  ngOnInit() {
  }

  
  Bottom: boolean = true;


  async Notifications(){
    this.requests.listenNotifications().pipe(
      tap(msg=>{
        const toast = this.toast.create({ message: msg.body, duration:3000 }).then(alert=> alert.present());
      })
    ).subscribe();
  }

  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    console.log('page has loaded');
    this.presentLoading();

    //get user token for push
    this.requests.getToken();
    //listen for notififcations
    this.Notifications();

    //check for stored credentials
    this.storage.get('mail').then((val) => {
      let profile_url =  'https://uploaded.herokuapp.com/users/users';
      //profile_url = 'http://127.0.0.1:8000/users/users'
      if(val == undefined){
        $(".login").show();
      }else{
        this.route.navigate(['/home/tabs/tab1']);
      }
    });
    
  }

  disableBottom(){
    this.Bottom = false;
    console.log("bottom disabled");
  }

  enableBottom(){
    this.Bottom = true;
    console.log("bottom enabled");    
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
      let url = 'https://uploaded.herokuapp.com/users/users';
      this.presentLoading();
      let login = this.requests.Login(url,emailInput,passwordInput);
      login.subscribe(data =>{
        console.log(data.data);
        if(data.data == "Authentication test passed") {
          this.storage.set('mail', emailInput);
          this.storage.set('password', emailInput);
          this.storage.set('username', data.username);
          this.storage.set('current_userID', data.id);
          $(".signInPrompt").text("Login successful");
          $("#UploadedHeading").text(JSON.stringify(emailInput));
          $("#UploadedHeading").css("color","#0d8479");
          $(".signInPrompt").css("color","#0d8479");
          this.route.navigate(['home/tabs/tab1']);
       }else{
          $(".signInPrompt").text("User not found");
          $("#UploadedHeading").text(JSON.stringify(emailInput));
          $("#UploadedHeading").css("color","#f44336");
          $(".signInPrompt").css("color","#f44336"); 
      }


      })
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
