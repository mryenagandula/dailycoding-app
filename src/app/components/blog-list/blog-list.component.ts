import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private api:BlogService) { }

  public allBlogs;
  public pageIndex=0;
  public pageSize=5;

  async ngOnInit(): Promise<void> {
    await this.getAllBlogs(this.pageIndex,this.pageSize);
  }

  public async getAllBlogs(pageIndex,pageSize){
    const  result = await this.api.getPublicBlogsByPagination(pageIndex,pageSize).toPromise();
    console.log(result)
    this.allBlogs =result;
  }

}
