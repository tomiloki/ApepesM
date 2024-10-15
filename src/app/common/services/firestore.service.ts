import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData, collection,
  doc, docData, getDoc, setDoc, updateDoc, deleteDoc,
  DocumentReference
} from '@angular/fire/firestore';

import { v4 as uuidv4 } from 'uuid';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore : Firestore = inject(Firestore)

  constructor() { }


  getDocument<tipo>(enlace: string) {
    const document = doc(this.firestore, enlace) as DocumentReference<tipo, any>;
    return getDoc<tipo, any>(document)
  }


  getCollectionChanges<tipo>(path: string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }


  createDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  }


  createDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, '${enlace}/${idDoc}');
    return setDoc(document, data);
  }


  createIdDoc(): string {
    return uuidv4()
  }


  deleteDocumentID(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }



}
