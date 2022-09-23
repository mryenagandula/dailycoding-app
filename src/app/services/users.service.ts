import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getUsers(){
    return this.http.get(`${environment.nodeUri}/users`)
   }

   getUsersByPagination(pageIndex,pageSize){
    return this.http.get(`${environment.nodeUri}/users/${pageIndex}/${pageSize}`)

   }

}

