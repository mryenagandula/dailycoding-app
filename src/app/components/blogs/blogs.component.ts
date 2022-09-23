import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { BlogService } from "src/app/services/blog.service";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"],
})
export class BlogsComponent implements OnInit {
  public pageIndex = 0;
  public pageSize = 5;
  public allBlogs;
  public selectedIndex=0;
  public publishedCount=0;
  public notPublishedCount=0;

  constructor(private api: BlogService) {}

  public async ngOnInit(): Promise<void> {
    const publishedResult:any = await this.api.getUserBlogsByPagination(this.pageIndex, this.pageSize, true).toPromise();
    this.allBlogs = publishedResult;
    const notPublishedResult:any = await this.api.getUserBlogsByPagination(this.pageIndex, this.pageSize, false).toPromise();
    this.publishedCount = publishedResult.totalCount;
    this.notPublishedCount = notPublishedResult.totalCount;
  }

  public async tabChanged(tabChangeEvent: MatTabChangeEvent): Promise<void> {
    const published = tabChangeEvent.index === 0;
    this.selectedIndex = tabChangeEvent.index;
    const result = await this.api.getUserBlogsByPagination(
      this.pageIndex,
      this.pageSize,
      published
    ).toPromise();
    this.allBlogs = result;
  }
}
