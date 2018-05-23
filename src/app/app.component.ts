import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginExample';

  private authSubscription: Subscription;
  public user;

  constructor (public afAuth: AngularFireAuth) {
    // subscription to observer
    this.authSubscription = this.obs()
      .subscribe(user => {
        this.user = user;
        });
  }

  obs(): Observable<firebase.User> {
    // Observer login and logout
    return this.afAuth.authState;
  }

  login() {
    // popup google login
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    // logout
    return this.afAuth.auth.signOut();
  }
}
