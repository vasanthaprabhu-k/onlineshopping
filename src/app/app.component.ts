import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'add-to-cart';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBB9Ku_NNkz0oSQ4_mosOYPghAyGZfWISE'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
