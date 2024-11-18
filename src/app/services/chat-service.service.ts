import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private usersCollection;

  constructor(private firestore: Firestore) { 
    this.usersCollection = collection(this.firestore, 'users'); // Firestore 'users' collection
  }
  async addUser(user: string): Promise<void> {
    const userDoc = doc(this.usersCollection, user); // Each user is stored by their username
    await setDoc(userDoc, { name: user, active: true });
  }
  getUsers(): Observable<any[]> {
    return collectionData(this.usersCollection, { idField: 'id' });
  }
}
