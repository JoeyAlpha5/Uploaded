import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  displayLoading: boolean = false;
  Bottom: boolean = true;
  results: Observable<any>;

  constructor(private statusBar: StatusBar,public toastController: ToastController,private storage: Storage,private requests: RequestsService,private route: Router,public loadingController: LoadingController ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
  }



  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.storage.get('mail').then((val) => {
      let profile_url =  'https://uploaded.herokuapp.com/users/users';
      //profile_url = 'http://127.0.0.1:8000/users/users'
      if(val == undefined){
        this.route.navigate(['']);
      }else{
        this.results =  this.requests.getProfile(profile_url, val); 
        // this.results.subscribe(profile => {
        //   console.log("profile", profile);
        //   this.renderProfile(profile);
  
        // });
      }
    });
  }


  file: File;
  changeListener($event): void{
    this.file = $event.target.files[0];
    this.presentToast("File selected: "+ this.file.name);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  updateProfile(){
    let user_name = $("#user_name").val();
    let first_name = $("#first_name").val();
    let last_name = $("#last_name").val();
    let bio = $("#bioInput").val();

    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    //var profile_url = 'http://127.0.0.1:8000/users/users'
    this.storage.get('mail').then((Email) =>{
      let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio,this.file); 

      update.subscribe(x => console.log(x) );
      this.ionViewDidEnter();
    });
  }

  logout(){
    this.storage.clear();
    this.ionViewDidEnter();
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: 'Updating '+message+', Please wait...',
      duration: 10000
    });
    await loading.present();

   // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
