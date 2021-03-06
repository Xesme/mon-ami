import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';
import {Router} from "@angular/router";
import { UsersService } from './users.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,  FirebaseObjectObservable } from 'angularfire2';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService, UsersService ]
})
export class AppComponent implements OnInit {
  public loginStatus = false;
  profile;
  profileStorage;

  constructor(public authService: AuthService, public usersService: UsersService, public router: Router, private storage: LocalStorageService){}

  ngOnInit() {
    this.loginStatus = false;
  }

  loginSender() {
      this.loginStatus = true;
  }

  logoutSender() {
    this.authService.logout();
    this.storage.clear('profileKey');
    this.storage.clear('profileStorage');
    this.router.navigate(['logged-off']);
  }
}
