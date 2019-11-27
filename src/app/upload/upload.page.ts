import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  todayDate: any;
  Time: any;
  search_request: Observable<any[]>;
  Tags: any;
  constructor(private tabs: TabsPage,private requests: RequestsService,public toastController: ToastController,private statusBar: StatusBar,private route: Router, public loadingController: LoadingController,private storage: Storage ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.todayDate = new Date().toISOString();
    this.Time = new Date().toISOString();
    this.Tags = "Tagged users: ";
  }

  ngOnInit() {
  }

  results: Observable<any>;
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  // profile_url =  'http://127.0.0.1:8000/users/users';
  email: any;
  displayLoading: boolean = false;


  changeIconColors(){
    this.tabs.tab1 = "white";
    this.tabs.tab2 = "white";
    this.tabs.tab3 = "#fc8700";
    this.tabs.tab4 = "white";
    this.tabs.tab5 = "white";
  }


  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.changeIconColors();
    // Put here the code you want to execute
    var Email = this.storage.get('mail').then((val) => {
      console.log('Your email is', val);
      this.email= val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.email == undefined){
        this.route.navigate(['login']);
      }
    });
  }

  file: File;
  changeListener($event): void{
    this.file = $event.target.files[0];
    this.presentToast("File selected: "+ this.file.name);
    //get video duration
    // var vid = <HTMLVideoElement>document.getElementById("videoPlaceHolder");
    // var videoElem = $("#placeholderSrc");
    // var URL = window.URL || window.webkitURL;
    // var src = URL.createObjectURL( this.file );

    // videoElem.attr("src", src)
    // vid.load();
    // console.log(vid, vid.duration);
    
    //

    //
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
    let selectedMonthDay = this.todayDate;
    let selectedTime = this.Time;

    let post_day = new Date(selectedMonthDay).getDate();
    let post_month = new Date(selectedMonthDay).getMonth();
    let selectedHours = new Date(selectedTime).getHours();
    let selectedMinutes = new Date(selectedTime).getMinutes();

    let publish_date = post_day+"/"+(post_month+1)+"/"+selectedHours+":"+selectedMinutes

    console.log(publish_date, selectedTime)

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
      let upload = this.requests.Upload(this.profile_url,user_email,this.file, description,genre,this.addToPlaylist,publish_date,this.tagged_ids);
      this.presentLoadingWithOptions("Uploading, please wait...");
      this.Time = new Date().toISOString();
      upload.subscribe(x => {
        this.displayLoading = false;
         this.route.navigate(['/home/tabs/tab4']);
         console.log(x)
         
      
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

  getUsers(){
    this.storage.get("mail").then(val=>{
      let input_text = $("#uploadTag").val();
      this.search_request = this.requests.getSearchResults(this.profile_url,input_text,val);
      this.search_request.subscribe(result=>{
        console.log(result);
        console.log(input_text);
      });
      
    });
  }

  tagged_users = [];
  tagged_ids = [];
  SetTag(id,first_name){
    if(this.tagged_users.includes(first_name) == false){
      if(this.Tags == "Tagged users: "){
        this.Tags =  this.Tags + first_name;
        this.tagged_users.push(first_name);
        this.tagged_ids.push(id);
      }else{
        this.Tags =  this.Tags + ","+first_name;
        this.tagged_users.push(first_name);
        this.tagged_ids.push(id);
      }
    }  
    
    console.log(first_name);
    console.log(this.tagged_users);
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
