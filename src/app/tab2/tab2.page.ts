import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results: Observable<any>;
  searchTerm = '';
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  constructor(private requests: RequestsService, private route: Router ) {}

  ionViewDidEnter() {
    var Email = JSON.parse(localStorage.getItem('email'));
    var Password = localStorage.getItem('password');
    if(Email == null && Password == null){
      window.location.href = '';
      return;
    }
  }


  getSearchResults(){
    console.log(this.searchTerm);
    var user_email = JSON.parse(localStorage.getItem('email'));
    this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email); 
  }

  viewProfile(user_id,email){
    console.log("user",user_id);
    localStorage.setItem("user_id",user_id);
    localStorage.setItem("userProfileEmail",email);
    this.route.navigate(['/home/tabs/profile']);
  }

}
