import { HttpClient } from '@angular/common/http';
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
  createBlogForm:FormGroup;
  url:any;
  constructor(private fb:FormBuilder , private service:BlogService, private router:Router,private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.createBlogForm = this.fb.group({
      title:[' ', [Validators.required]],
      description:[' ', [Validators.required]],
      featureImageUri:['',[Validators.required]],
      categories:['',[Validators.required]],
      tags:['',[Validators.required]]
    })
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(){
    const formValues= this.createBlogForm.getRawValue();
    this.service.createBlog({
      title:formValues.title,
      description: formValues.description,
      featureImageUri:this.url,
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
    this.createBlogForm.reset();
  }
  
}
