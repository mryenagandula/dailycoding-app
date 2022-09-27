import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  signUpForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private service:AuthenticationService,private dialog:MatDialog) { }

  // formInit(){
  //   this.signUpForm = this.formBuilder.group({
  //     formArray: this.formBuilder.array([
  //       this.formBuilder.group({
  //         hobbies: ['playing cricket']
  //       })
  //     ])
  //   })
  // }
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
      hobbies:this.formBuilder.array([
        this.formBuilder.group({
          hobby: ['',[Validators.required]]
        })
      ]),
      termsAndConditions:[false,[Validators.required]]
    })
  }

  get hobbies(){
    return this.signUpForm.get('hobbies') as FormArray;
  }
  public addHobby(){
    const hobby=this.formBuilder.group({
      hobby: ['',[Validators.required]]
    })
    this.hobbies.push(hobby)
  }

  public removeHobby(index){
    this.hobbies.removeAt(index);
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
