import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactUsForm:FormGroup;
  firstName='';
  email='';
  constructor(private formBuilder:FormBuilder, private service:AuthenticationService) {
    this.formInit();
  }
  
  ngOnInit(): void {
  }
  
  formInit(){
    const userData= this.service.userDetails ? JSON.parse(this.service.userDetails) :null;
    this.firstName=userData?.user?.firstName;
    this.email=userData?.user?.email;
    this.contactUsForm=this.formBuilder.group({
      name:[this.firstName,[Validators.required]],
      email:[this.email,[Validators.required]],
      context:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
    this.contactUsForm.get('name').disable({emitEvent:false});
    this.contactUsForm.get('email').disable({emitEvent:false});
  }
  
  public getName(){
    return this.contactUsForm.get('name');
  }
  public getEmail(){
    return this.contactUsForm.get('email');
  }
  public getContext(){
    return this.contactUsForm.get('context');
  }
  public getSubject(){
    return this.contactUsForm.get('subject');
  }
  public getMessage(){
    return this.contactUsForm.get('message');
  }


  onSubmitSignUpForm(){
    console.log(this.contactUsForm.getRawValue());
  }

  onReset(){
    this.getContext().reset();
    this.getSubject().reset();
    this.getMessage().reset();
  }
}
