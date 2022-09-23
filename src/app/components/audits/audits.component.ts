import { Component, OnInit } from '@angular/core';
import { AuditsService } from 'src/app/services/audits.service';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  auditData:any;
  auditDetails:any;
  isSideNavOpen = false;
  selectedRowIndex=-1;
  // displayedColumns=["email","client_ip","server_ip","client_city","server_city","client_region","server_region","uri","statusCode","client_org","server_org","client_timezone","server_timezone","createdAt"];
  displayedColumns=["email","client_ip","server_ip","client_region","uri","statusCode","client_org","server_org","client_timezone","server_timezone","createdAt"];
  pageSize = 10;
  pageIndex=0;
  pageSizeOptions: number[] = [5, 10,15,20, 25,50,100];

  constructor(private service:AuditsService) { }

  ngOnInit(): void {
   this.loadAudits(this.pageIndex,this.pageSize);
  }
  loadAudits(pageIndex,pageSize){
    this.service.getAuditsByPagination(pageIndex,pageSize).subscribe((res)=>{
      // console.log(res);
      this.auditData=res;
    })
  }
  handlePage(event){
    // console.log(event);
    this.loadAudits(event.pageIndex,event.pageSize)
  }
  selectedRow(row){
    this.auditDetails=row;
    this.selectedRowIndex=row._id;
    this.isSideNavOpen=true;
  }
  closeSideNav(){
    this.isSideNavOpen=false;
    this.selectedRowIndex=-1;
  }

}
