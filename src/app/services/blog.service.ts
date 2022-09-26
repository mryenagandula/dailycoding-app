import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getPublicBlogs(){
    return this.http.get(`${environment.nodeUri}/public/blogs`)
  }
  getPublicBlogsByPagination(pageIndex,pageSize,published=true){
    return this.http.get(`${environment.nodeUri}/public/blogs/${pageIndex}/${pageSize}/${published}`)
  }

  getUserBlogsByPagination(pageIndex,pageSize,published=true){
    return this.http.get(`${environment.nodeUri}/blogs/userId/${pageIndex}/${pageSize}/${published}`)
  }

  createBlog(payload:any){
    return this.http.post(`${environment.nodeUri}/blogs`,payload)
  }
}
