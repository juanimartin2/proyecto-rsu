import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyCSk15rVx0PDGb8c2XTTopudjtxPZBNT7c",
  authDomain: "rsu-proyect.firebaseapp.com",
  databaseURL: "https://rsu-proyect-default-rtdb.firebaseio.com",
  projectId: "rsu-proyect",
  storageBucket: "rsu-proyect.appspot.com",
  messagingSenderId: "43704865178",
  appId: "1:43704865178:web:2a96ec3a6f9ee641906a23",
  measurementId: "G-QSNFLVB5R7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
