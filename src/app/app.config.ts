import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIHp9jd9eAShDLV84XJsbs8SBr-XJqPXE",
  authDomain: "buzztalk-498b7.firebaseapp.com",
  projectId: "buzztalk-498b7",
  storageBucket: "buzztalk-498b7.firebasestorage.app",
  messagingSenderId: "958358309760",
  appId: "1:958358309760:web:4dc8207c53f8ea49c4cf65",
  measurementId: "G-74CM1WVZB1"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),]
};
