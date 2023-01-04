import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { LibraryService } from '../../service/library.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  @ViewChild('f') signinForm!: NgForm; 
  
  constructor(private libraryService : LibraryService, private route : Router){}
  user = {
    name : "",
    email : "",
    password : "",
    phnNo : 0,
  }
  display = 'none'; 
  IsSignedIn = false;
  submitted = false;

  ngOnInit(){
    this.user.name = "",
    this.user.email = "";
    this.user.password = "",
    this.user.phnNo = 0;

    this.display = 'none'; 
    this.IsSignedIn = false;
  }
  
  onSubmit(){
    this.submitted = true;
    this.user.name = this.signinForm.value.name;
    this.user.email = this.signinForm.value.email;
    this.user.phnNo = this.signinForm.value.phnNo;
    this.user.password = this.signinForm.value.password;

    let check = this.checkUserExitenceForSignIn(this.user.email);
    console.log(this.signinForm); 
  }

  checkUserExitenceForSignIn(emailId : string) {
    this.libraryService.checkUserExitenceForSignIn(emailId).subscribe(res => {
      if(res === false){
        console.log("User doesn't exist")
        let newUser = new User(0,this.user.name,this.user.email,this.user.phnNo,this.user.password,[]);
        this.addUser(newUser);
      }else{
        this.display = 'block';
      }
    },err =>{
      alert(err);
    })
  }

  addUser(user : User){
    this.libraryService.addUser(user).subscribe(res =>{
      this.display = 'none';
      this.ngOnInit(); 
      this.signinForm.reset();
      this.roueToLogin();
    },err => {
      alert(err);
    })
  }

  roueToLogin(){
      this.route.navigateByUrl('/login');
  }

}
