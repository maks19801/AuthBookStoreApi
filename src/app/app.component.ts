import { Component, Input } from '@angular/core';
import { Login } from './models/login';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

   email:'';
   password:'';


  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  constructor(private as: AuthService) {}

  login():void {
    this.as.login(this.email, this.password)
    .subscribe(res => {

      }, error => {
        alert('Wrong login or password!')
      })
  }

  logout() {
    this.as.logout();
  }
}
