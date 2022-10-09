import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CategoriesAndTagsService {
  constructor(private http: HttpClient) {}

  public createCategory(payload: any): Observable<any> {
    return this.http.post(`${environment.nodeUri}/categories`, payload);
  }
  public createTag(payload: any): Observable<any> {
    return this.http.post(`${environment.nodeUri}/tags`, payload);
  }
}
