import { Component } from '@angular/core';
import { Habito } from '../models/habito.model';
import { HabitoService } from '../services/habito.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  habitos: Habito[] = [];

  constructor(private habitoService: HabitoService) {}

  ngOnInit(){
    // Obtener usuarios
    this.habitos = this.habitoService.obtenerHabitos();
  }

}
