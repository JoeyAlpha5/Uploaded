import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(private requests: RequestsService,public toastController: ToastController,private statusBar: StatusBar,private route: Router, public loadingController: LoadingController,private storage: Storage ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
  }

  results: Observable<any>;
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  // profile_url =  'http://127.0.0.1:8000/users/users';
  email: any;
  displayLoading: boolean = false;



  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    // Put here the code you want to execute
    var Email = this.storage.get('mail').then((val) => {
      console.log('Your email is', val);
      this.email= val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.email == undefined){
        this.route.navigate(['']);
      }
    });
  }

  file: File;
  changeListener($event): void{
    this.file = $event.target.files[0];
    this.presentToast("File selected: "+ this.file.name);
  }

  addToPlaylist: boolean = false;
  addPlaylist($event){
    console.log($event.target.checked);
    this.addToPlaylist = $event.target.checked;
    if(this.addToPlaylist == true){
      this.presentToast("Upload will be made available on your profile");
    }
    
  }

  upload(){
    console.log("file ", this.file);
    console.log("Add to playlist ", this.addToPlaylist);
    console.log($("#Select").val());

    let genre = $("#Select").val();
    let video_name: any;
    let description = $("#uploadDescription").val();
    let message = "";
    if(this.file == undefined){
      message = "Please select file to upload";
      this.presentLoadingWithOptions(message)
    }
    else if (description == undefined || description == ""){
      message = "Please provide a description for your upload";
      this.presentLoadingWithOptions(message)
    }else if(genre == ""){
      message = "Please select a genre for your upload";
      this.presentLoadingWithOptions(message)
    }else{
      var user_email = this.email;
      video_name = this.file.name;
      this.displayLoading = true;
      let upload = this.requests.Upload(this.profile_url,user_email,this.file, description,genre,this.addToPlaylist);
      this.presentLoadingWithOptions("Uploading, please wait...");
      upload.subscribe(x => {
         this.route.navigate(['/home/tabs/tab4']);
         console.log(x)
         this.displayLoading = false;
      
      });
    }

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  //loading component
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
