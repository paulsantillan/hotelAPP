import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonAvatar, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonButton, IonAvatar, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  profile:any;
  personid:any;
  constructor(private usuarioService: UsuarioService) {
    this.personid = localStorage.getItem('id');
   }

  ngOnInit() {
    this. viewProfile();
  }

  viewProfile(){

    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;

      },
      error:(error:any)=>{

      }
    })

  }
}
