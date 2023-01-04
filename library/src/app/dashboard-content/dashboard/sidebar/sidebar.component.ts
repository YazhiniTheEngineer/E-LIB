import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/User';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private cookie : CookieService,private route : Router,private libraryService : LibraryService){}

  user!: User;

  ngOnInit(){
    this.getUserDetails();
  }

  
  getUserDetails(){
    this.libraryService.getUser().subscribe(res => {
      this.user = res;
    },err => {
      alert(err);
    })

    }

  logout(){
    this.cookie.set('isLoggedIn','false',0,"/");
    this.cookie.delete("UserId");
    this.route.navigateByUrl("/login"); 
  }

}
