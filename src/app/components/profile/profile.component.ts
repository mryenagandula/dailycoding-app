import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  userDetails;

  constructor(private profileService:ProfileService,private fb:FormBuilder,private datePipe:DatePipe) { 
    this.profileFormInit();
  }
  profileFormInit(){
    this.profileForm=this.fb.group({
      userId:[''],
      firstName:[''],
      middleName:[''],
      secondName:[''],
      userName:[''],
      email:[''],
      dob:[''],
      gender:[''],
      mobile:[''],
      bio:[''],
      updatedAt:[''],
      createdAt:[''],
      activated:[''],
      emailVerified:['']
    })
  }

  async ngOnInit(): Promise<void> {
   await this.getProfile();
  }
  async getProfile(){
   const userProfile:any= await this.profileService.getAllProfileDetails().toPromise();
   this.userDetails =userProfile?.user;
   this.setFormValues();
  }
  setFormValues(){
    this.profileForm.patchValue({
      userId:this.userDetails?._id,
      firstName:this.userDetails?.firstName,
      middleName:this.userDetails?.middleName,
      secondName:this.userDetails?.secondName,
      userName:this.userDetails?.userName,
      email:this.userDetails?.email,
      dob:this.userDetails?.dob,
      gender:this.userDetails?.gender,
      mobile:this.userDetails?.mobile,
      bio:this.userDetails?.bio,
      updatedAt: this.datePipe.transform(this.userDetails?.updatedAt,'medium'),
      createdAt:this.datePipe.transform(this.userDetails?.createdAt,'medium'),
      activated:this.userDetails?.activated,
      emailVerified:this.userDetails?.email_Verified
    })

    this.profileForm.disable({emitEvent:false})
  }

}
