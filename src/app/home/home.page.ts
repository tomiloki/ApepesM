import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonCard, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { UserI } from '../common/models/users.models';
import { FirestoreService } from '../common/services/firestore.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonButton, IonCard, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle,

    IonContent, FormsModule, IonCard, IonButton,],
})
export class HomePage {

  users: UserI[] = [];

  newUser: UserI;
  cargando: boolean = false;

  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
  }

  loadusers() {
    this.firestoreService.getCollectionChanges<UserI>('Usuarios').subscribe( data => {
      if (data) {
        this.users = data;
      }

  async save() {
    this.cargando = true;
    await this.firestoreService.createDocumentID(this.newUser, 'Usuarios', this.newUser.id)
    this.cargando = false;
  }


    })
    const user = {
      nombre: "pablo",
      edad: 10
    }

    const user1 = {
      nombre: "diego",
      edad: 20
    }
  }
}
