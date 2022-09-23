import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Letstalk';

  constructor(private profileService:ProfileService){}

  public async ngOnInit(): Promise<void> {
    await this.getProfile();
  }

  async getProfile(){
    await this.profileService.getAllProfileDetails().toPromise();
  }
}
