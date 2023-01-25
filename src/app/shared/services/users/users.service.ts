import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword, Auth, UserCredential } from '@angular/fire/auth';
import { User } from 'src/app/core/models/user.model';
import { collection, where, query } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private firestore: Firestore,
    private auth : Auth,
  ) { }

  public register(user : User) : Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
    // const userCollection = collection(this.firestore, 'users');
    // addDoc(userCollection, {...user});
  }

  public getUser(user : string): Observable<any> {
    const usersCollection = collection(this.firestore, 'users');
    const q = query(usersCollection, where('user', '==', user))
    return collectionData(q, {idField: 'id'}) as Observable<any>;
  }

  // public getUsers(): Observable<any> {
  //   const userRef = collection(this.firestore, 'users');
  //   return collectionData(userRef, {idField: 'id'}) as Observable<any>
  // }
}
