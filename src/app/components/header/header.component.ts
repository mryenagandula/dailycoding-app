import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAdmin="ADMIN";
  public isMenuOpen=true;

  public get isUserLoggedIn(){
    return this.service.isUserLoggedIn || false;
  }

  public get userName(){
    const auth = this.service.userDetails ? JSON.parse(this.service.userDetails) :null;
    return auth?.user?.firstName;
  }
  constructor(private service:AuthenticationService,private router:Router) {
     
   }

  ngOnInit(): void {

  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
  
}
