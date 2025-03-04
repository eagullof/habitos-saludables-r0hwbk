import { Component } from '@angular/core';
import { HabitoService } from '../services/habito.service';
import { Habito } from '../models/habito.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  habitos: Habito[] = [];

  constructor(private habitoService: HabitoService, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando hábitos...',
      spinner: 'crescent',
      duration: 2000
    });

    await loading.present();
    this.habitos = await this.habitoService.obtenerHabitos();
    await loading.dismiss();
  }

  async eliminarHabito(id: string) {
    await this.habitoService.eliminarHabito(id);
    this.habitos = this.habitoService.obtenerHabitos();
  }

  async marcarCompletado(id: string){
    await this.habitoService.marcarCompletado(id);
  }
}

