import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(private requests: RequestsService ) { }

  ngOnInit() {
  }

  results: Observable<any>;

  ionViewDidEnter() {
    // Put here the code you want to execute
    var Email = JSON.parse(localStorage.getItem('email'));
    var Password = localStorage.getItem('password');
    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    if(Email == null && Password == null){
      window.location.href = '';
      return;
    }else{
      this.results =  this.requests.getProfile(profile_url, Email); 
      // this.results.subscribe(profile => {
      //   console.log("profile", profile);
      //   this.renderProfile(profile);

      // });
    }
  }

}
