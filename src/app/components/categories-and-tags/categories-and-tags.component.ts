import { CategoriesAndTagsService } from './../../services/categories-and-tags.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-categories-and-tags",
  templateUrl: "./categories-and-tags.component.html",
  styleUrls: ["./categories-and-tags.component.scss"],
})
export class CategoriesAndTagsComponent implements OnInit {
  public categoryForm: FormGroup;
  public tagForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CategoriesAndTagsService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.onInitCategory();
    this.onInitTag();
  }

  public onInitCategory(): void {
    this.categoryForm = this.fb.group({
      title: ["",Validators.required],
      description: ["",Validators.required],
    });
  }

  public onInitTag(): void {
    this.tagForm = this.fb.group({
      title: ["",Validators.required],
      description: ["",Validators.required],
    });
  }
   
  public errorSnackBar(){
    this._snackBar.open("Services are down please try after some time", "", {
      duration: 4000,
    });
  }

 public  openSnackBar() {
    this._snackBar.open("Saved Successfully", "", {
      duration: 4000,
    });
  }
  public saveCategory() {
    this.service.createCategory(this.categoryForm.value).subscribe(
      (res: any) => {
        //console.log(res);
        this.categoryForm.reset();
        this.openSnackBar();
      },
      (err: any) => {
        //console.log(err);
        this.errorSnackBar();
      }
    );
  }
  public saveTag(){
    this.service.createTag(this.tagForm.value).subscribe(
      (res: any) => {
       // console.log(res);
        this.tagForm.reset();
        this.openSnackBar();
      },
      (err: any) => {
        //console.log(err);
        this.errorSnackBar();
      }
    );
  }
}