import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInputPasswordToggle,IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { cellular } from 'ionicons/icons';
@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonInputPasswordToggle,IonButton, IonAvatar, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {
  profile:any;
  personid:any;
  constructor(private usuarioService: UsuarioService, private router:Router,
    private loadingController:LoadingController, private alertController:AlertController) {
    this.personid = localStorage.getItem('id');
  }

  ngOnInit() {


  }
  async register(user:any,email:any, password:any,ci:any,celular:any) {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      spinner: 'circles',
    });
    loading.present();
    this.usuarioService.register(user.value,email.value,password.value,ci.value,celular.value).subscribe({
      next: async (datos: any) => {

        loading.dismiss();
        this.router.navigateByUrl('login');
      },
      error: async (e: any) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: e.error.message,
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }


  }




