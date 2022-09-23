import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  constructor(private http:HttpClient) { }

  getAudits(){
    return this.http.get(`${environment.nodeUri}/audits`)
  }
  getAuditsByPagination(pageIndex,pageSize){
    return this.http.get(`${environment.nodeUri}/audits/${pageIndex}/${pageSize}`)
  }
}
