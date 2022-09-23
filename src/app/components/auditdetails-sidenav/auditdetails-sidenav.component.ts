import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-auditdetails-sidenav',
  templateUrl: './auditdetails-sidenav.component.html',
  styleUrls: ['./auditdetails-sidenav.component.scss']
})
export class AuditdetailsSidenavComponent implements OnInit {
  
  panelOpenState=false;
  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild("sidenav") sideNav:MatSidenav;
  @Input() auditInfo;
  @Output() closeEvent= new EventEmitter<string>();
  
  close(){
    this.closeEvent.emit();
    this.sideNav.close();
  }


}
