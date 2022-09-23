import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {
  public userDetails:any;
  signInForm:any;
  constructor(private formBuilder:FormBuilder,private service:AuthenticationService,private router:Router) { this.onInitSignInForm();}

  ngOnInit(): void {
    if(this.service.isUserLoggedIn){
      this.router.navigate(['/home']);
    }
  }
  onInitSignInForm(){
    this.signInForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  public getEmail(){
    return this.signInForm.get('email');
  }
  public getPassword(){
    return this.signInForm.get('password');
  }
  onSubmitSignInForm(){
    this.service.signIn(this.signInForm.value.email,this.signInForm.value.password);
  }
}
