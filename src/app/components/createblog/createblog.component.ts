import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.scss']
})
export class CreateblogComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder , private service:BlogService, private router:Router) { 
    
  }

  ngOnInit(): void {
  this.form = this.fb.group({
    title:[' ', [Validators.required]],
    description:[' ', [Validators.required]],
    featureImageUri:['',[Validators.required]],
    categories:['',[Validators.required]],
    tags:['',[Validators.required]]
  })
  }
  onSubmit(){
    const formValues= this.form.getRawValue();
    this.service.createBlog({
      title:formValues.title,
      description: formValues.description,
      featureImageUri:formValues.featureImageUri,
      comment:[],
      tags:[],
      categories:[]
    }).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/blogs'])
    },error=>{
      console.log(error);
    })
  }
  onReset(){
    this.form.reset();
  }
  
}
