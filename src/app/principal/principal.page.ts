import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonLabel, IonItem, IonList, IonBackButton, IonButtons, IonTabButton, IonTabBar, IonTab, IonTabs, IonSegmentButton, IonCardContent, IonSearchbar, IonSegment } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search, homeOutline, cartOutline, personCircleOutline, globe, chevronForwardOutline, image } from 'ionicons/icons';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonSegment, IonSearchbar, IonCardContent, IonSegmentButton, IonTabs, IonTab, IonTabBar, IonTabButton, IonButtons,RouterLink, IonBackButton, IonList, IonItem, IonLabel, IonCard, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class PrincipalPage implements OnInit {
  user:any;
  rooms = [
    { type: 'Simple', price: 10 },
    { type: 'Dobles', price: 15 },
  ];
  constructor() { addIcons({chevronForwardOutline,homeOutline,cartOutline,personCircleOutline,globe,library,search,radio,playCircle});}

  ngOnInit() {
   this.user = localStorage.getItem('username');
  }

}
