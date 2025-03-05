import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HabitoService } from '../services/habito.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  langs: string [] = [];
  constructor(private translateService: TranslateService, private habitoService: HabitoService, private alertCtrl: AlertController) {
    this.langs = this.translateService.getLangs();
  }

  changeLang(event: CustomEvent){
    this.translateService.use(event.detail.value);
    console.log(event.detail.value);
  }

  agregarHabitos(){
    this.habitoService.agregar10Habitos();
  }

  async eliminarTodos() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar todos',
      message: '¿Estás seguro de que quieres eliminar todos los hábitos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.habitoService.eliminarTodosHabitos();
          }
        }
      ]
    });
  
    await alert.present();
  }
  

}
