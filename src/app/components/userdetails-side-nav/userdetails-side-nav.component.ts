import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';


@Component({
  selector: "app-userdetails-side-nav",
  templateUrl: "./userdetails-side-nav.component.html",
  styleUrls: ["./userdetails-side-nav.component.scss"],
})
export class UserdetailsSideNavComponent implements OnInit {
  constructor(public fb: FormBuilder,private datePipe:DatePipe) {
    this.formInit();
  }

  public _userInfo;
  public form:FormGroup;

  ngOnInit(): void {
    console.log(this.userInfo.users);
  }

  @ViewChild("sidenav") sidenav: MatSidenav;
  @Output() closeEvent = new EventEmitter<string>();
  @Input() set userInfo(value: any) {
    this._userInfo = value;
    if (value) {
      this.setValuesToForm(value);
    }
    else{
      this.form.reset({emitEvent:false});
      this.form.disable({emitEvent:false})
    }
  }

  get userInfo() {
    return this._userInfo;
  }

  close() {
    this.closeEvent.emit();
    this.sidenav.close();
  }

  formInit() {
    this.form = this.fb.group({
      firstName:[''],
      middleName:[''],
      secondName:[''],
      userName:[''],
      userId:[''],
      email:[''],
      mobile:[''],
      dob:[''],
      gender:[''],
      createdAt:[''],
      updatedAt:[''],
      bio:[''],
      activated:[''],
      emailVerified:['']
    });
  }

  setValuesToForm(value){
    this.form.patchValue({
      firstName:value.firstName,
      middleName:value.middleName ? value.middleName : 'Not Given',
      secondName:value.secondName,
      userName:value.userName,
      userId:value._id,
      email:value.email,
      mobile:value.mobile,
      dob:value.dob,
      gender:value.gender,
      createdAt:this.datePipe.transform(value.createdAt,'medium'),
      updatedAt:this.datePipe.transform(value.updatedAt,'medium'),
      bio: value.bio ?  value.bio : 'Not Added Anything',
      activated:value.activated,
      emailVerified:value.email_Verified
    },{emitEvent:false})

    this.form.disable({emitEvent:false})
  }
}
