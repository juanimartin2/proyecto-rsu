// imports app
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmbitosModule } from './ambitos/ambitos.module';
import { SharedModule } from './shared/shared.module';
import { FacultadesModule } from './facultades/facultades.module';
import { LoginModule } from './login/login.module';

//imports firebase
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmbitosModule,
    SharedModule,
    FacultadesModule,
    LoginModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp({"projectId":"rsu-proyect","appId":"1:43704865178:web:2a96ec3a6f9ee641906a23","databaseURL":"https://rsu-proyect-default-rtdb.firebaseio.com","storageBucket":"rsu-proyect.appspot.com","apiKey":"AIzaSyCSk15rVx0PDGb8c2XTTopudjtxPZBNT7c","authDomain":"rsu-proyect.firebaseapp.com","messagingSenderId":"43704865178","measurementId":"G-QSNFLVB5R7"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
