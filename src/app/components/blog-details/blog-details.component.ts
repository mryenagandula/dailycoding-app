import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }

  private _blogDetails;

  @Input()
  public set blogDetails(value:any){
    this._blogDetails=value;
  }

  public get blogDetails(){
    return this._blogDetails;
  }

  ngOnInit(): void {
  }

}
