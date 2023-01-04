import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LibraryService } from '../../service/library.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private libraryService : LibraryService,
    private route : Router,
    private cookie : CookieService){}
  user = {
    email : "",
    password : "",
  }

  isLoggeedIn=false;
  display="none";
  submitted = false;

  ngOnInit(){
    this.user.email="";
    this.user.password="";
    this.display="none";
    this.submitted = false;
  }

  onSubmit(form : NgForm){
    this.submitted = true;
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    let check = this.checkUserExitence(this.user.email,this.user.password);
    console.log(form); 
  }

  checkUserExitence(emailId : string, password : string) {
    this.libraryService.checkUserExitence(emailId,password).subscribe(res => {
      if(res > 0){
        this.roueToDashboard();
        this.cookie.set("UserId",res.toString(),1);
        this.cookie.set("isLoggedIn","true",1);
      }else{
        this.display = 'block';
      }
    },err =>{
      alert(err);
    })
  }

  roueToDashboard(){
    this.route.navigateByUrl('/dashboard');
}



}
