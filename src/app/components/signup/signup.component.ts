import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { TermsandconditionsComponent } from '../termsandconditions/termsandconditions.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private service:AuthenticationService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.onInitSignUpForm();
  }

  onInitSignUpForm(){
    this.signUpForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      middleName:['',],
      secondName:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required]],
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
      bio:[''],
      hobbies:['',[Validators.required]],
      termsAndConditions:[false,[Validators.required]]
    })
  }

  onSubmitSignUpForm(){
    // console.log(this.signUpForm.value);
    this.service.signUp(this.signUpForm.value.firstName,this.signUpForm.value.middleName,this.signUpForm.value.secondName,this.signUpForm.value.gender,this.signUpForm.value.dob,this.signUpForm.value.mobile,this.signUpForm.value.email,this.signUpForm.value.userName,this.signUpForm.value.password,this.signUpForm.value.bio,this.signUpForm.value.hobbies,[]);
  }
  openDialog() {
    const dialogRef = this.dialog.open(TermsandconditionsComponent,{
      height: '450px',
      width: '850px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
