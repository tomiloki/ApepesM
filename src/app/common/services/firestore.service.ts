import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore : Firestore = inject(Firestore)

  constructor() { }

  getCollectionChanges<tipo>(path: string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }

  createDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  }
}
